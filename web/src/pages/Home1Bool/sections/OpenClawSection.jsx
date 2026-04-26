import { useState, useRef, useEffect } from 'react'

// Module-level constants
const OC_PROVIDER_BASE_URL_MAP = {
  '1Bool': 'https://1bool.com',
}

const OC_MODEL_OPTIONS = [
  'claude-opus-4-6',
  'claude-sonnet-4-5-20250929',
  'claude-haiku-4-5-20251001',
  'claude-opus-4-5-20251101'
]

const PROVIDER_OPTIONS = Object.keys(OC_PROVIDER_BASE_URL_MAP)
const BASE_URL_OPTIONS = [...new Set(Object.values(OC_PROVIDER_BASE_URL_MAP))]
const API_MODE_OPTIONS = [
  'anthropic-messages',
  'openai-completions',
  'openai-responses',
  'google-generative-ai'
]

const CUSTOM_OPTION = 'custom'

function normalizeConfigInput(rawConfig) {
  const trimmed = rawConfig.trim()
  if (!trimmed) {
    return '{}'
  }

  const fencedMatch = trimmed.match(/^```(?:json|jsonc)?\s*([\s\S]*?)\s*```$/i)
  if (fencedMatch) {
    return fencedMatch[1].trim() || '{}'
  }

  return trimmed
}

// Pure function for processing config
const processConfig = (payload) => {
  const modelIds = payload.model_id
  const primaryModelId = modelIds[0]

  // Step 1: Build agents object
  const agentModels = {}
  modelIds.forEach((id) => {
    agentModels[`${payload.provider}/${id}`] = { alias: id }
  })

  const agents = {
    defaults: {
      model: {
        primary: `${payload.provider}/${primaryModelId}`
      },
      models: agentModels
    }
  }

  // Step 2: Build models object
  const models = {
    mode: 'merge',
    providers: {
      [payload.provider]: {
        baseUrl: payload.baseurl,
        apiKey: payload.apikey,
        api: payload.apimode,
        models: modelIds.map((id) => ({
          id: id,
          name: id
        }))
      }
    }
  }

  // Step 3: Parse user's config
  let userConfig
  try {
    const parsedConfig = JSON.parse(normalizeConfigInput(payload.config))
    if (!parsedConfig || typeof parsedConfig !== 'object' || Array.isArray(parsedConfig)) {
      throw new Error('配置 JSON 必须是对象')
    }
    userConfig = parsedConfig
  } catch (e) {
    throw new Error('配置 JSON 格式错误: ' + e.message)
  }

  // Step 4: Merge everything
  const result = {
    ...userConfig,
    models: models,
    agents: agents
  }

  // Remove auth field if exists
  delete result.auth

  return result
}

const OpenClawSection = ({ config }) => {
  // State management
  const [baseurl, setBaseurl] = useState(BASE_URL_OPTIONS[0] || '')
  const [baseurlCustom, setBaseurlCustom] = useState('')
  const [provider, setProvider] = useState(PROVIDER_OPTIONS[0] || '')
  const [providerCustom, setProviderCustom] = useState('')
  const [apimode, setApimode] = useState('anthropic-messages')
  const [apimodeCustom, setApimodeCustom] = useState('')
  const [apikey, setApikey] = useState('')
  const [configJson, setConfigJson] = useState('')
  const [modelRows, setModelRows] = useState([
    { id: 0, selectValue: OC_MODEL_OPTIONS[0], customValue: '' }
  ])
  const [output, setOutput] = useState('响应将显示在这里')
  const [status, setStatus] = useState('就绪')
  const [isProcessing, setIsProcessing] = useState(false)
  const [copyButtonText, setCopyButtonText] = useState('复制')
  const [installCopyButtonText, setInstallCopyButtonText] = useState('复制')

  const nextIdRef = useRef(1)

  // Event handlers
  const handleProviderChange = (value) => {
    setProvider(value)
    if (value !== 'custom' && OC_PROVIDER_BASE_URL_MAP[value]) {
      setBaseurl(OC_PROVIDER_BASE_URL_MAP[value])
    }
  }

  const handleBaseurlChange = (value) => {
    setBaseurl(value)
  }

  const handleApimodeChange = (value) => {
    setApimode(value)
  }

  const handleModelSelectChange = (rowId, value) => {
    setModelRows(prev =>
      prev.map(row =>
        row.id === rowId ? { ...row, selectValue: value } : row
      )
    )
  }

  const handleModelCustomChange = (rowId, value) => {
    setModelRows(prev =>
      prev.map(row =>
        row.id === rowId ? { ...row, customValue: value } : row
      )
    )
  }

  const handleAddModel = () => {
    const newRow = {
      id: nextIdRef.current++,
      selectValue: OC_MODEL_OPTIONS[0],
      customValue: ''
    }
    setModelRows(prev => [...prev, newRow])
  }

  const handleRemoveModel = (rowId) => {
    setModelRows(prev => prev.filter(row => row.id !== rowId))
  }

  const handleGenerate = () => {
    // Get actual values
    const actualBaseurl = baseurl === CUSTOM_OPTION ? baseurlCustom.trim() : baseurl
    const actualProvider = provider === CUSTOM_OPTION ? providerCustom.trim() : provider
    const actualApimode = apimode === CUSTOM_OPTION ? apimodeCustom.trim() : apimode
    const modelIds = [...new Set(modelRows
      .map(row =>
        row.selectValue === CUSTOM_OPTION ? row.customValue.trim() : row.selectValue
      )
      .filter(id => id !== '')
    )]

    // Validation
    if (!actualProvider) {
      setOutput('错误: 请输入提供商名称')
      setStatus('失败')
      return
    }
    if (!actualBaseurl) {
      setOutput('错误: 请选择或输入 Base URL')
      setStatus('失败')
      return
    }
    if (!actualApimode) {
      setOutput('错误: 请选择或输入 API 协议格式')
      setStatus('失败')
      return
    }
    if (!apikey.trim()) {
      setOutput('错误: 请输入 API Key')
      setStatus('失败')
      return
    }
    if (modelIds.length === 0) {
      setOutput('错误: 请至少填写一个模型 ID')
      setStatus('失败')
      return
    }

    setStatus('处理中...')
    setIsProcessing(true)
    setOutput('')

    try {
      const payload = {
        config: configJson,
        baseurl: actualBaseurl,
        apikey: apikey.trim(),
        apimode: actualApimode,
        provider: actualProvider,
        model_id: modelIds
      }
      const result = processConfig(payload)
      setOutput(JSON.stringify(result, null, 2))
      setStatus('完成')
    } catch (err) {
      setOutput(String(err.message || err))
      setStatus('失败')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCopyOutput = () => {
    const text = output

    const showCopySuccess = () => {
      setCopyButtonText('✓ 已复制')
    }

    const fallbackCopy = (text) => {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        const successful = document.execCommand('copy')
        if (successful) {
          showCopySuccess()
        } else {
          alert('复制失败，请手动复制')
        }
      } catch (err) {
        alert('复制功能不被支持，请手动复制')
      }

      document.body.removeChild(textArea)
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showCopySuccess()
        })
        .catch(() => {
          fallbackCopy(text)
        })
    } else {
      fallbackCopy(text)
    }
  }

  const handleCopyInstallCommand = () => {
    const text = 'curl -fsSL https://openclaw.ai/install.sh | bash'

    const showCopySuccess = () => {
      setInstallCopyButtonText('✓ 已复制')
    }

    const fallbackCopy = (text) => {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        const successful = document.execCommand('copy')
        if (successful) {
          showCopySuccess()
        } else {
          alert('复制失败，请手动复制')
        }
      } catch (err) {
        alert('复制功能不被支持，请手动复制')
      }

      document.body.removeChild(textArea)
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showCopySuccess()
        })
        .catch(() => {
          fallbackCopy(text)
        })
    } else {
      fallbackCopy(text)
    }
  }

  // Cleanup effect for copy button text
  useEffect(() => {
    if (copyButtonText === '✓ 已复制') {
      const timer = setTimeout(() => {
        setCopyButtonText('复制')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copyButtonText])

  // Cleanup effect for install copy button text
  useEffect(() => {
    if (installCopyButtonText === '✓ 已复制') {
      const timer = setTimeout(() => {
        setInstallCopyButtonText('复制')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [installCopyButtonText])

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-teal-50" id="openclaw-setup">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold text-[color:var(--text-primary)] mb-8">OpenClaw 安装</h2>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">让Openclaw 支持第三方API配置，支持多种提供商和模型</p>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Installation Tutorial */}
        <div className="mb-16">
          {/* Quick Start Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12 border border-emerald-200 fade-in-up">
            <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6 text-center">快速开始</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">1</div>
                <h4 className="font-semibold text-[color:var(--text-primary)] mb-2">安装 CLI</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">运行一键安装脚本</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">2</div>
                <h4 className="font-semibold text-[color:var(--text-primary)] mb-2">选择 Provider</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">安装时选择 Anthropic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">3</div>
                <h4 className="font-semibold text-[color:var(--text-primary)] mb-2">复制配置、API KEY</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">使用配置器重新生成支持第三方API的Openclaw配置</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">4</div>
                <h4 className="font-semibold text-[color:var(--text-primary)] mb-2">开始使用</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">立即享受 AI 助手</p>
              </div>
            </div>
          </div>

          {/* Step 1: Install OpenClaw */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-xl">1</div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-2">安装 OpenClaw</h3>
                <p className="text-[color:var(--text-secondary)]">运行以下命令一键安装 OpenClaw CLI：</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <span className="text-[color:var(--text-muted)] text-sm font-mono">bash</span>
                <button
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
                  onClick={handleCopyInstallCommand}
                >
                  {installCopyButtonText}
                </button>
              </div>
              <div className="p-4">
                <pre><code className="text-gray-300 font-mono text-sm">curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>
              </div>
            </div>
            <div className="mt-4 border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
              <p className="text-emerald-800 text-sm">
                <span className="font-semibold">提示：</span>安装脚本会自动处理所有依赖和配置，无需额外操作。
              </p>
            </div>
          </div>

          {/* Step 2: Select Anthropic */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-xl">2</div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-2">选择 Anthropic 作为 Provider</h3>
                <p className="text-[color:var(--text-secondary)]">在安装过程中，系统会提示您选择 Model/Auth Provider。</p>
              </div>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg mb-4">
              <p className="text-red-800 text-sm">
                <span className="font-semibold">重要：</span>请在提示时选择 <strong>Anthropic</strong> 作为您的 Provider, API KEY随意填写。
              </p>
            </div>

          </div>

          {/* Step 3 */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-xl">3</div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-2">配置第三方API KEY</h3>
                <p className="text-[color:var(--text-secondary)]">安装完成后 使用下方的高级配置生成器</p>
              </div>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg mb-4">
              <p className="text-red-800 text-sm">
                <span className="font-semibold">重要：</span> 复制 API KEY 跟 ~/.openclaw/openclaw.json 到下面的配置生成器，根据需要选择模型，最后生成的结果回写到 ~/.openclaw/openclaw.json
              </p>
            </div>
          </div>


          {/* Separator */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[color:var(--text-primary)] mb-4">高级配置生成器</h3>
            <p className="text-[color:var(--text-secondary)] mb-6">需要更多自定义选项？使用下方工具快速生成第三方 API 配置文件</p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 border border-emerald-100 fade-in-up">
          {/* Base URL & Provider Row */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="oc-baseurl" className="block font-semibold text-[color:var(--text-secondary)] mb-2">Base URL</label>
              <div className="field-wrapper">
                <select
                  id="oc-baseurl"
                  className="w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"
                  value={baseurl}
                  onChange={(e) => handleBaseurlChange(e.target.value)}
                >
                  {BASE_URL_OPTIONS.map(url => (
                    <option key={url} value={url}>{url}</option>
                  ))}
                  <option value={CUSTOM_OPTION}>自定义</option>
                </select>
                <input
                  type="text"
                  id="oc-baseurl-custom"
                  className={`oc-custom-input w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2 transition-all ${baseurl === CUSTOM_OPTION ? '' : 'hidden'}`}
                  placeholder="输入自定义 Base URL"
                  value={baseurlCustom}
                  onChange={(e) => setBaseurlCustom(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="oc-provider" className="block font-semibold text-[color:var(--text-secondary)] mb-2">提供商（快捷选择）</label>
              <div className="field-wrapper">
                <select
                  id="oc-provider"
                  className="w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"
                  value={provider}
                  onChange={(e) => handleProviderChange(e.target.value)}
                >
                  {PROVIDER_OPTIONS.map(prov => (
                    <option key={prov} value={prov}>{prov}</option>
                  ))}
                  <option value={CUSTOM_OPTION}>自定义</option>
                </select>
                <input
                  type="text"
                  id="oc-provider-custom"
                  className={`oc-custom-input w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2 transition-all ${provider === CUSTOM_OPTION ? '' : 'hidden'}`}
                  placeholder="输入自定义提供商"
                  value={providerCustom}
                  onChange={(e) => setProviderCustom(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* API Mode & Model ID Row */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="oc-apimode" className="block font-semibold text-[color:var(--text-secondary)] mb-2">API 协议格式(Anthropic/OpenAI/Google-Generative)</label>
              <div className="field-wrapper">
                <select
                  id="oc-apimode"
                  className="w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"
                  value={apimode}
                  onChange={(e) => handleApimodeChange(e.target.value)}
                >
                  {API_MODE_OPTIONS.map(mode => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                  <option value={CUSTOM_OPTION}>自定义</option>
                </select>
                <input
                  type="text"
                  id="oc-apimode-custom"
                  className={`oc-custom-input w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2 transition-all ${apimode === CUSTOM_OPTION ? '' : 'hidden'}`}
                  placeholder="输入自定义 API 模式"
                  value={apimodeCustom}
                  onChange={(e) => setApimodeCustom(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-[color:var(--text-secondary)] mb-2">模型 ID</label>
              <div id="oc-model-list" className="space-y-3">
                {modelRows.map((row) => (
                  <div key={row.id} className="flex gap-2">
                    <div className="flex-1">
                      <select
                        className="oc-model-select w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"
                        value={row.selectValue}
                        onChange={(e) => handleModelSelectChange(row.id, e.target.value)}
                      >
                        {OC_MODEL_OPTIONS.map(modelId => (
                          <option key={modelId} value={modelId}>{modelId}</option>
                        ))}
                        <option value={CUSTOM_OPTION}>自定义</option>
                      </select>
                      <input
                        type="text"
                        className={`oc-custom-input oc-model-custom w-full px-4 py-2 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2 transition-all text-sm ${row.selectValue === CUSTOM_OPTION ? '' : 'hidden'}`}
                        placeholder="输入自定义模型 ID"
                        value={row.customValue}
                        onChange={(e) => handleModelCustomChange(row.id, e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="oc-remove-model px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-xl transition-all text-sm"
                      onClick={() => handleRemoveModel(row.id)}
                      disabled={modelRows.length <= 1}
                    >
                      删除
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  id="oc-add-model-btn"
                  className="w-full px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-semibold rounded-xl transition-all duration-200 border border-emerald-200"
                  onClick={handleAddModel}
                >
                  + 添加模型
                </button>
              </div>
            </div>
          </div>

          {/* API Key */}
          <div className="mb-6">
            <label htmlFor="oc-apikey" className="block font-semibold text-[color:var(--text-secondary)] mb-2">API Key</label>
            <input
              id="oc-apikey"
              type="text"
              className="w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"
              placeholder="请输入 API Key，可从 控制台 -> 令牌管理 复制API key至此处"
              value={apikey}
              onChange={(e) => setApikey(e.target.value)}
            />
          </div>
          <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
            <p className="text-emerald-700 text-sm">
              <span className="font-semibold">说明：</span>API Key 可从 <a href={`https://${config.apiHost}/console`} className="underline hover:text-emerald-800" target="_blank" rel="noopener noreferrer">控制台</a> 的令牌管理页面获取。
            </p>
          </div>

          {/* Config JSON */}
          <div className="mb-6 mt-6">
            <label htmlFor="oc-config" className="block font-semibold text-[color:var(--text-secondary)] mb-2">现有 Config（可选）</label>
            <textarea
              id="oc-config"
              rows={6}
              className="w-full px-4 py-3 border border-[color:var(--card-border)] rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none resize-y transition-all font-mono text-sm"
              placeholder="可选：粘贴现有的 ~/.openclaw/openclaw.json 内容，或直接留空从空白模板生成"
              value={configJson}
              onChange={(e) => setConfigJson(e.target.value)}
            />
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">不粘贴旧配置也可以，系统会直接生成一份可用的新配置；若粘贴代码块，支持自动去掉 ```json 包裹。</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mb-6">
            <button
              id="oc-send-btn"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors shadow-sm hover:shadow-md"
              onClick={handleGenerate}
              disabled={isProcessing}
            >
              生成配置
            </button>
            <span id="oc-status" className="text-sm text-[color:var(--text-muted)]">{status}</span>
          </div>

          {/* Output */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl p-6 overflow-auto">
              <button
                id="oc-copy-btn"
                className="absolute top-4 right-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors"
                onClick={handleCopyOutput}
              >
                {copyButtonText}
              </button>
              <pre><code id="oc-output" className="text-gray-300 text-sm">{output}</code></pre>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[color:var(--semi-color-bg-1)] p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            </div>
            <h3 className="text-lg font-bold text-[color:var(--text-primary)] text-center mb-2">快速配置</h3>
            <p className="text-[color:var(--text-secondary)] text-center text-sm">一键生成完整的 OpenClaw 配置文件，无需手动编写 JSON</p>
          </div>
          <div className="bg-[color:var(--semi-color-bg-1)] p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            </div>
            <h3 className="text-lg font-bold text-[color:var(--text-primary)] text-center mb-2">多提供商支持</h3>
            <p className="text-[color:var(--text-secondary)] text-center text-sm">支持 DeepSeek、SiliconFlow、Ollama 等多种 API 提供商</p>
          </div>
          <div className="bg-[color:var(--semi-color-bg-1)] p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            </div>
            <h3 className="text-lg font-bold text-[color:var(--text-primary)] text-center mb-2">灵活定制</h3>
            <p className="text-[color:var(--text-secondary)] text-center text-sm">支持多模型配置和自定义 API 模式，满足各种使用场景</p>
          </div>
        </div>

        {/* Step 4: Start Using */}
        <div className="mb-12 mt-12 fade-in-up">
          <div className="flex items-start mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-xl">4</div>
            <div>
              <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-2">开始使用 OpenClaw</h3>
              <p className="text-[color:var(--text-secondary)]">安装完成后，您可以立即开始使用 OpenClaw。</p>
            </div>
          </div>
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <p className="text-green-800 text-sm font-semibold mb-2">安装成功！现在您可以：</p>
            <ul className="text-green-800 text-sm space-y-1 ml-4">
              <li>• 在终端中直接使用 <code className="bg-green-100 px-2 py-1 rounded font-mono text-xs">openclaw</code> 命令</li>
              <li>• 享受强大的 AI 编程助手功能</li>
              <li>• 使用下方的高级配置生成器自定义您的设置</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OpenClawSection
