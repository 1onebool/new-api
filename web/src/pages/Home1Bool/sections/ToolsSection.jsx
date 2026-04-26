const TOOLS = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    provider: 'Anthropic 官方 CLI',
    anchor: '#claude-code-setup',
    features: [
      '终端 AI 助手，直接在命令行中对话编程',
      '智能文件操作，自动编辑文件、运行命令、创建提交',
      'MCP 集成，连接 Google Drive、Jira、Slack 等外部工具',
      '支持 Opus、Sonnet、Haiku 多档模型',
    ],
  },
  {
    id: 'codex',
    name: 'CodeX',
    provider: 'OpenAI 官方 CLI',
    anchor: '#codex-setup',
    features: [
      '基于 GPT-5 的深度代码理解与生成',
      '自动化的仓库级别重构与补丁生成',
      '与 Anthropic Messages、OpenAI Responses 接口互通',
      '企业级稳定接入，支持长上下文',
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini CLI',
    provider: 'Google 官方 CLI',
    anchor: '#gemini-setup',
    features: [
      'Gemini 2 系列模型，多模态支持',
      '本地工具调用与插件生态',
      '与 Google Generative AI 接口完全兼容',
      '百万级长上下文窗口',
    ],
  },
]

const ToolsSection = ({ config: _config }) => {
  return (
    <section className="tools" id="tools">
      <div className="tools-inner">
        <div className="tools-head">
          <div className="tools-eyebrow">SUPPORTED TOOLS</div>
          <h2 className="tools-title">支持的工具</h2>
          <p className="tools-sub">接入一次，使用全部</p>
        </div>

        <div className="tools-grid">
          {TOOLS.map((t) => (
            <a key={t.id} href={t.anchor} className="tool-card">
              <div className="tool-card-head">
                <h3 className="tool-card-title">{t.name}</h3>
                <svg
                  className="tool-card-arrow"
                  width="18" height="18"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <p className="tool-card-subtitle">{t.provider}</p>
              <div className="tool-card-rule" />
              <ul className="tool-card-list">
                {t.features.map((f, i) => (
                  <li key={i} className="tool-card-item">
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection;
