const CodexSetupSection = ({ config }) => {
  const { apiName, apiHost } = config
  const html = `
<section id="codex-setup" class="py-24 bg-[color:var(--semi-color-bg-1)]">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-bold text-[color:var(--text-primary)] mb-8">CodeX 安装步骤</h2>
                <p class="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">强大的 OpenAI 代码助手安装指南</p>
                <div class="w-32 h-1 bg-gradient-to-r from-[color:var(--accent-cyan)] to-[color:var(--accent-blue)] mx-auto mt-8 rounded-full"></div>
            </div>
            
            <!-- CodeX 快速开始 -->
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 text-center">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4">CodeX 快速开始</h3>
                <p class="text-[color:var(--accent-blue-hover)] text-lg">企业级 AI 编程助手，GPT-5 驱动</p>
                <div class="mt-6 flex justify-center items-center space-x-8 text-[color:var(--accent-blue)]">
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <span>环境准备</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <span>安装配置</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <span>开始编程</span>
                    </div>
                </div>
            </div>
            
            <!-- 平台选择（CodeX 安装步骤） -->
            <div class="flex justify-center mb-12 sm:mb-16">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl p-2 sm:p-3 shadow-lg border border-[color:var(--card-border)] w-full max-w-md sm:max-w-none">
                    <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button onclick="showCodeXSetupPlatform('windows')" id="codex-setup-btn-windows" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[color:var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">Windows</button>
                        <button onclick="showCodeXSetupPlatform('mac')" id="codex-setup-btn-mac" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[color:var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">macOS</button>
                        <button onclick="showCodeXSetupPlatform('linux')" id="codex-setup-btn-linux" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base bg-[color:var(--semi-color-primary)] text-white shadow-md">Linux</button>
                    </div>
                </div>
            </div>

            <!-- Windows 安装教程 -->
            <div id="codex-setup-platform-windows" class="codex-setup-platform-content hidden">
            <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6 flex items-center">
                    Windows 完整安装教程
                </h3>
                
                <!-- 步骤1: 安装 Node.js -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                        安装 Node.js
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>方法一：使用官方安装包（推荐）</strong></p>
                        <ol class="list-decimal list-inside text-[color:var(--text-secondary)] mb-4 ml-4 space-y-2">
                            <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                            <li>下载 LTS 版本的 Windows Installer (.msi)</li>
                            <li>运行安装程序，按默认设置完成安装</li>
                            <li>安装程序会自动添加到 PATH 环境变量</li>
                        </ol>

                        <p class="text-[color:var(--text-secondary)] mb-4 mt-6"><strong>方法二：使用包管理器</strong></p>
                        <p class="text-[color:var(--text-secondary)] mb-3">使用 <strong>Winget</strong>（Windows 11 或 Windows 10 自带）：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">PowerShell（管理员）</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>winget install OpenJS.NodeJS.LTS</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-3">使用 <strong>Chocolatey</strong>：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">PowerShell（管理员）</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>choco install nodejs-lts</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-3">使用 <strong>Scoop</strong>：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>scoop install nodejs-lts</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-4 mt-6"><strong>验证安装：</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>node --version
npm --version</code></pre>
                        </div>

                        <div class="bg-[color:var(--cool-bg)] border-l-4 border-purple-400 p-4 rounded-r-lg mt-4">
                            <p class="text-[color:var(--accent-blue-hover)]"><strong>提示：</strong> 建议使用 LTS（长期支持）版本以获得最佳稳定性。安装完成后需重启命令行窗口。</p>
                        </div>
                    </div>
                </div>
                <!-- 步骤2: 安装 CodeX -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                        安装 CodeX CLI
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4">打开命令提示符（以管理员身份运行）或 PowerShell，执行以下命令：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @openai/codex@latest</code></pre>
                        </div>
                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>codex --version</code></pre>
                        </div>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                            <p class="text-yellow-800 text-sm">
                                <strong>注意：</strong>如果遇到权限问题，请确保以管理员身份运行命令提示符。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 步骤3: 获取和配置 API -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                        配置 ${apiName}
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <!-- 获取 CodeX 专用 API Token -->
                        <div class="mb-6">
                            <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.1 获取 CodeX 专用 API Token</h5>
                            <ul class="text-[color:var(--text-secondary)] space-y-2 mb-4 ml-4">
                                <li>• 访问 <a href="https://${apiHost}" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">${apiName} 控制台</a></li>
                                <li>• 注册账户或登录现有账户</li>
                                <li>• 进入 "API 密钥" 页面</li>
                                <li>• 点击 "创建新密钥"，<strong>选择 CodeX 专用分组</strong></li>
                                <li>• 复制生成的 API Key</li>
                            </ul>
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                                <p class="text-red-800 text-sm font-medium">
                                    <strong>重要：</strong>CodeX 需要使用专门的分组令牌，与 Claude Code 的令牌不同！
                                </p>
                            </div>
                        </div>

                        <!-- 创建配置文件夹 -->
                        <div class="mb-6">
                            <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.2 创建配置文件夹</h5>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>mkdir %USERPROFILE%\.codex
cd %USERPROFILE%\.codex</code></pre>
                            </div>
                        </div>

                        <!-- 创建配置文件 -->
                        <div class="mb-6">
                            <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.3 创建配置文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3"><strong>1. 创建 config.toml 文件：</strong></p>
                            <p class="text-[color:var(--text-secondary)] text-sm mb-3">使用记事本或您喜欢的文本编辑器创建 config.toml 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">config.toml</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>model_provider = "coding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true

[model_providers.coding]
name = "coding"
base_url = "https://${apiHost}/v1"
wire_api = "responses"
requires_openai_auth = true</code></pre>
                            </div>

                            <p class="text-[color:var(--text-secondary)] mb-3 mt-4"><strong>2. 创建 auth.json 文件：</strong></p>
                            <p class="text-[color:var(--text-secondary)] text-sm mb-3">在同一目录下创建 auth.json 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">auth.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "OPENAI_API_KEY": "你的API密钥"
}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 步骤4: 初始化项目 -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                        启动 CodeX
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4">配置完成后，先进入到工程目录：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>mkdir my-codex-project
cd my-codex-project</code></pre>
                        </div>
                        <p class="text-[color:var(--text-secondary)] mb-4">然后，运行以下命令启动：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>codex</code></pre>
                        </div>
                        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                            <p class="text-green-800 text-sm mb-2">
                                <strong>首次运行配置：</strong>
                            </p>
                            <ul class="text-green-700 space-y-1">
                                <li>• 选择您的开发环境配置</li>
                                <li>• 配置代码生成偏好</li>
                                <li>• 设置 GPT-5 推理等级</li>
                                <li>• 开始 AI 辅助编程！</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <!-- macOS 安装教程 -->
            <div id="codex-setup-platform-mac" class="codex-setup-platform-content hidden">
            <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6 flex items-center">
                    macOS 完整安装教程
                </h3>
                
                <!-- 步骤1: 安装 Node.js -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                        安装 Node.js
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>方法一：使用 Homebrew（推荐）</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 安装 Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node

# 验证安装
node --version
npm --version</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>方法二：官网下载</strong></p>
                        <ul class="text-[color:var(--text-secondary)] space-y-2 mb-4 ml-4">
                            <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                            <li>下载 LTS 版本的 .pkg 安装包</li>
                            <li>双击安装包，按提示完成安装</li>
                        </ul>
                    </div>
                </div>
                <!-- 步骤2: 安装 CodeX -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                        安装 CodeX CLI
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4">打开终端，执行以下命令：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 全局安装 CodeX
npm install -g @openai/codex@latest

# 验证安装
codex --version</code></pre>
                        </div>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <p class="text-yellow-800 text-sm">
                                <strong>提示：</strong>如果遇到权限问题，可能需要使用 <code class="bg-yellow-200 px-1 rounded">sudo</code> 或配置 npm 全局目录。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 步骤3: 配置 API -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                        配置 ${apiName}
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>获取 CodeX 专用 API Token：</strong></p>
                        <ol class="list-decimal list-inside text-[color:var(--text-secondary)] mb-6 ml-4 space-y-2">
                            <li>访问 <a href="https://${apiHost}" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">${apiName} 控制台</a></li>
                            <li>点击「添加令牌」</li>
                            <li>令牌分组请选择：<strong>CodeX专用（务必选择此分组，否则无法使用）</strong></li>
                            <li>令牌名称：随意填写</li>
                            <li>额度建议：设置为无限额度</li>
                            <li>其他选项保持默认</li>
                        </ol>
                        <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                            <p class="text-red-800 text-sm font-medium">
                                <strong>重要：</strong>CodeX 需要使用专门的分组令牌，与 Claude Code 的令牌不同！
                            </p>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>创建配置文件：</strong></p>

                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建 CodeX 配置目录
mkdir -p ~/.codex
cd ~/.codex</code></pre>
                        </div>
                        <div class="mb-6">
                            <p class="font-semibold text-[color:var(--text-primary)] mb-2">创建 config.toml 文件</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-2">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">config.toml</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建配置文件
cat > config.toml << 'EOF'
model_provider = "coding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true

[model_providers.coding]
name = "${apiName}"
base_url = "https://${apiHost}/v1"
wire_api = "responses"
requires_openai_auth = true
EOF</code></pre>
                            </div>
                        </div>
                        <div class="mb-6">
                            <p class="font-semibold text-[color:var(--text-primary)] mb-2">创建 auth.json 文件</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-2">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">auth.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建认证文件
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "<span class="text-yellow-300 font-bold">粘贴为你的API密钥</span>"
}
EOF</code></pre>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- 步骤4: 初始化项目 -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                        初始化项目并开始使用
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建新项目
mkdir my-codex-project
cd my-codex-project

# 启动 CodeX
codex</code></pre>
                        </div>
                        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                            <p class="text-green-800 text-sm">
                                <strong>首次运行配置：</strong>
                            </p>
                            <ul class="list-disc list-inside text-green-700 mt-2 space-y-1">
                                <li>• 选择您的开发环境配置</li>
                                <li>• 配置代码生成偏好</li>
                                <li>• 设置 GPT-5 推理等级</li>
                                <li>• 开始 AI 辅助编程！</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <!-- Linux 安装教程 -->
            <div id="codex-setup-platform-linux" class="codex-setup-platform-content">
            <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6 flex items-center">
                    Linux 完整安装教程
                </h3>
                
                <!-- 步骤1: 安装 Node.js -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                        安装 Node.js
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">方法一：使用官方安装器（推荐）</h5>
                        <ol class="list-decimal list-inside text-[color:var(--text-secondary)] mb-6 ml-4 space-y-2">
                            <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                            <li>下载 LTS 版本的 Linux 安装包</li>
                            <li>按照官方安装说明完成安装</li>
                            <li>打开终端验证安装成功</li>
                        </ol>

                        <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">验证安装</h5>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-6">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>node --version
npm --version</code></pre>
                        </div>

                        <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">方法二：使用包管理器</h5>
                        <p class="text-[color:var(--text-secondary)] mb-3"><strong>Ubuntu/Debian 系统：</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 更新软件包列表
sudo apt update

# 安装 Node.js 和 npm
sudo apt install -y nodejs npm

# 验证安装
node --version
npm --version</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-3"><strong>CentOS/RHEL/Fedora 系统：</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># CentOS/RHEL
sudo yum update
sudo yum install -y nodejs npm

# Fedora
sudo dnf install -y nodejs npm

# 验证安装
node --version
npm --version</code></pre>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-3"><strong>使用 NodeSource 仓库（推荐，获取最新版本）：</strong></p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 添加 NodeSource 仓库
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# 安装 Node.js
sudo apt-get install -y nodejs

# 验证安装
node --version
npm --version</code></pre>
                        </div>
                    </div>
                </div>
                <!-- 步骤2: 安装 CodeX -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                        安装 CodeX CLI
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4">在终端中执行以下命令：</p>
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 全局安装 CodeX
sudo npm install -g @openai/codex@latest

# 验证安装
codex --version</code></pre>
                        </div>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <p class="text-yellow-800 text-sm">
                                <strong>权限问题解决：</strong>如果遇到权限错误，可以配置 npm 使用用户目录：<br>
                                <code class="bg-yellow-200 px-1 rounded">mkdir ~/.npm-global &amp;&amp; npm config set prefix '~/.npm-global'</code><br>
                                然后将 <code class="bg-yellow-200 px-1 rounded">export PATH=~/.npm-global/bin:$PATH</code> 添加到 ~/.bashrc 中。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 步骤3: 配置 API -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                        配置 ${apiName}
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>获取 CodeX 专用 API Token：</strong></p>
                        <ol class="list-decimal list-inside text-[color:var(--text-secondary)] mb-6 ml-4 space-y-2">
                            <li>访问 <a href="https://${apiHost}" target="_blank" class="text-[color:var(--accent-blue)] hover:underline">${apiName} 控制台</a></li>
                            <li>点击「添加令牌」</li>
                            <li>令牌分组请选择：<strong>CodeX专用（务必选择此分组，否则无法使用）</strong></li>
                            <li>令牌名称：随意填写</li>
                            <li>额度建议：设置为无限额度</li>
                            <li>其他选项保持默认</li>
                        </ol>
                        <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                            <p class="text-red-800 text-sm font-medium">
                                <strong>重要：</strong>CodeX 需要使用专门的分组令牌，与 Claude Code 的令牌不同！
                            </p>
                        </div>

                        <p class="text-[color:var(--text-secondary)] mb-4"><strong>创建配置文件：</strong></p>

                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建 CodeX 配置目录
mkdir -p ~/.codex
cd ~/.codex</code></pre>
                        </div>
                        <div class="mb-6">
                            <p class="font-semibold text-[color:var(--text-primary)] mb-2">创建 config.toml 文件</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-2">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">config.toml</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建配置文件
cat > config.toml << 'EOF'
model_provider = "coding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true

[model_providers.coding]
name = "${apiName}"
base_url = "https://${apiHost}/v1"
wire_api = "responses"
requires_openai_auth = true
EOF</code></pre>
                            </div>
                        </div>
                        <div class="mb-6">
                            <p class="font-semibold text-[color:var(--text-primary)] mb-2">创建 auth.json 文件</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-2">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">auth.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建认证文件
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "<span class="text-yellow-300 font-bold">粘贴为你的API密钥</span>"
}
EOF</code></pre>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- 步骤4: 初始化项目 -->
                <div class="mb-8">
                    <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                        初始化项目并开始使用
                    </h4>
                    <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                        <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                            <div class="flex items-center justify-between p-3 bg-gray-800">
                                <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                            </div>
                            <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code># 创建新项目
mkdir my-codex-project
cd my-codex-project

# 启动 CodeX
codex</code></pre>
                        </div>
                        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                            <p class="text-green-800 text-sm">
                                <strong>首次运行配置：</strong>
                            </p>
                            <ul class="list-disc list-inside text-green-700 mt-2 space-y-1">
                                <li>• 选择您的开发环境配置</li>
                                <li>• 配置代码生成偏好</li>
                                <li>• 设置 GPT-5 推理等级</li>
                                <li>• 开始 AI 辅助编程！</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                        

                    
                    

                    
                    
                        </div>
                
            

            <!-- VSCode 配置教程 (三平台通用) -->
            <div class="mt-16">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl p-8 shadow-lg border border-[color:var(--card-border)]">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-[color:var(--accent-blue)] rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-2">VSCode 配置教程</h3>
                                <p class="text-[color:var(--text-secondary)]">适用于所有平台的 Visual Studio Code 配置</p>
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3 flex items-center">
                                <svg class="w-5 h-5 mr-2 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                配置步骤
                            </h4>
                            <div class="bg-blue-50 border-l-4 border-[color:var(--accent-blue)] p-4 mb-4">
                                <p class="text-blue-800 text-sm">
                                    <strong>注意：</strong>确保您已经安装了 ChatGPT/CodeX 相关的 VSCode 扩展插件
                                </p>
                            </div>
                            <p class="text-[color:var(--text-secondary)] mb-4">打开 VSCode 的 settings.json 文件，添加以下配置：</p>
                        </div>
                        
                        <div class="bg-gray-900 rounded-lg p-4 code-block mb-6 relative">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                <button onclick="copyCode(this)" class="copy-btn bg-[color:var(--accent-blue)] hover:bg-[color:var(--accent-blue-hover)] text-white px-3 py-1 rounded text-xs transition-colors">
                                    复制配置
                                </button>
                            </div>
                            <code class="text-green-400 font-mono text-sm block">
"chatgpt.apiBase": "https://${apiHost}/v1",<br>
"chatgpt.config": {<br>
&nbsp;&nbsp;"preferred_auth_method": "apikey"<br>
}
                            </code>
                        </div>
                        
                        <!-- 平台快捷键说明 -->
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3 flex items-center">
                                <svg class="w-5 h-5 mr-2 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                </svg>
                                快捷键说明
                            </h4>
                            <div class="grid md:grid-cols-3 gap-4">
                                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <svg class="w-4 h-4 mr-2 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="font-semibold text-[color:var(--text-primary)] text-sm">Windows</span>
                                    </div>
                                    <p class="text-[color:var(--text-secondary)] text-xs">Ctrl+Shift+P → "Preferences: Open Settings (JSON)"</p>
                                </div>
                                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <svg class="w-4 h-4 mr-2 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="font-semibold text-[color:var(--text-primary)] text-sm">macOS</span>
                                    </div>
                                    <p class="text-[color:var(--text-secondary)] text-xs">Cmd+Shift+P → "Preferences: Open Settings (JSON)"</p>
                                </div>
                                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <svg class="w-4 h-4 mr-2 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="font-semibold text-[color:var(--text-primary)] text-sm">Linux</span>
                                    </div>
                                    <p class="text-[color:var(--text-secondary)] text-xs">Ctrl+Shift+P → "Preferences: Open Settings (JSON)"</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div class="flex items-start">
                                <svg class="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <div>
                                    <h5 class="text-amber-800 font-semibold text-sm mb-1">配置说明</h5>
                                    <p class="text-amber-700 text-sm">
                                        • 请确保您的 API Token 已经在扩展设置中正确配置<br>
                                        • 配置完成后重启 VSCode 以确保设置生效<br>
                                        • 使用 CodeX 专用 Token 以获得最佳体验
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        
    </section>
  `
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default CodexSetupSection;
