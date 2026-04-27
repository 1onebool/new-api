const GeminiSetupSection = ({ config }) => {
  const { apiHost } = config
  const html = `
<section id="gemini-setup" class="py-24 bg-[color:var(--cool-bg)]">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-bold text-[color:var(--text-primary)] mb-8">Gemini CLI 安装步骤</h2>
                <p class="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">Google AI 编程助手安装指南</p>
                <div class="w-32 h-1 bg-[color:var(--accent-blue)] mx-auto mt-8 rounded-full"></div>
            </div>

            <!-- Gemini CLI 快速开始 -->
            <div class="bg-[color:var(--cool-bg)] rounded-2xl p-8 mb-12 text-center">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4">Gemini CLI 快速开始</h3>
                <p class="text-[color:var(--accent-blue-hover)] text-lg">Google AI 编程助手，Gemini 2.5 Pro 驱动</p>
                <div class="mt-6 flex justify-center items-center space-x-8 text-[color:var(--accent-blue)]">
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <span>安装 CLI</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <span>配置密钥</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <span>开始编程</span>
                    </div>
                </div>
            </div>

            <!-- 平台选择（Gemini CLI 安装步骤） -->
            <div class="flex justify-center mb-12 sm:mb-16">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl p-2 sm:p-3 shadow-lg border border-[color:var(--card-border)] w-full max-w-md sm:max-w-none">
                    <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button onclick="showGeminiSetupPlatform('windows')" id="gemini-setup-btn-windows" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base bg-[color:var(--accent-blue)] text-white shadow-md">Windows</button>
                        <button onclick="showGeminiSetupPlatform('mac')" id="gemini-setup-btn-mac" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[color:var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">macOS</button>
                        <button onclick="showGeminiSetupPlatform('linux')" id="gemini-setup-btn-linux" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[color:var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">Linux</button>
                    </div>
                </div>
            </div>

            <!-- Windows 安装教程 -->
            <div id="gemini-setup-platform-windows" class="gemini-setup-platform-content">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6">
                        Windows 完整安装教程
                    </h3>

                    <!-- 步骤1: 安装 Node.js -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                            安装 Node.js
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
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

                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg mt-4">
                                <p class="text-[color:var(--accent-blue-hover)]"><strong>提示：</strong> 建议使用 LTS（长期支持）版本以获得最佳稳定性。安装完成后需重启命令行窗口。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤2: 全局安装 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                            全局安装 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4">打开命令提示符或 PowerShell，执行以下命令：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤3: 配置 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                            配置 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                <p class="text-red-700 font-medium">重要提示：请将下方的 GEMINI_API_KEY 替换为您在 https://${apiHost}/console/token 生成的 Gemini CLI 专用 API 密钥！</p>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.1 创建 .gemini 文件夹</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">%USERPROFILE%\.gemini\</code></p>

                            <h5 class="text-md font-medium mb-3 mt-6">3.2 创建 .env 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 .env 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-6">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">.env</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>GOOGLE_GEMINI_BASE_URL=https://${apiHost}
GEMINI_API_KEY=粘贴为你的API密钥
GEMINI_MODEL=gemini-3-pro-preview</code></pre>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.3 创建 settings.json 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 settings.json 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}</code></pre>
                            </div>

                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg mt-4">
                                <p class="text-[color:var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Gemini CLI 才生效。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤4: 启动 Gemini CLI -->
                    <div>
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                            启动 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4">配置完成后，运行以下命令启动：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>gemini</code></pre>
                            </div>
                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg">
                                <p class="text-[color:var(--accent-blue-hover)] mb-2"><strong>开始使用 Gemini CLI！</strong></p>
                                <ul class="text-[color:var(--accent-blue-hover)] space-y-1">
                                    <li>• 超大上下文窗口：1M tokens</li>
                                    <li>• Agent Mode 自动规划任务</li>
                                    <li>• Google Search 实时联网</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- macOS 安装教程 -->
            <div id="gemini-setup-platform-mac" class="gemini-setup-platform-content hidden">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6">
                        macOS 完整安装教程
                    </h3>

                    <!-- 步骤1: 安装 Node.js -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                            安装 Node.js
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4">使用 Homebrew 安装：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>brew install node</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤2: 全局安装 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                            全局安装 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤3: 配置 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                            配置 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                <p class="text-red-700 font-medium">重要提示：请将下方的 GEMINI_API_KEY 替换为您在 https://${apiHost}/console/token 生成的 Gemini CLI 专用 API 密钥！</p>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.1 创建 .gemini 文件夹</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.gemini/</code></p>

                            <h5 class="text-md font-medium mb-3 mt-6">3.2 创建 .env 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 .env 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-6">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">.env</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>GOOGLE_GEMINI_BASE_URL=https://${apiHost}
GEMINI_API_KEY=粘贴为你的API密钥
GEMINI_MODEL=gemini-3-pro-preview</code></pre>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.3 创建 settings.json 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 settings.json 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}</code></pre>
                            </div>

                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg mt-4">
                                <p class="text-[color:var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Gemini CLI 才生效。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤4: 启动 Gemini CLI -->
                    <div>
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                            启动 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4">配置完成后，运行以下命令启动：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>gemini</code></pre>
                            </div>
                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg">
                                <p class="text-[color:var(--accent-blue-hover)] mb-2"><strong>开始使用 Gemini CLI！</strong></p>
                                <ul class="text-[color:var(--accent-blue-hover)] space-y-1">
                                    <li>• 超大上下文窗口：1M tokens</li>
                                    <li>• Agent Mode 自动规划任务</li>
                                    <li>• Google Search 实时联网</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Linux 安装教程 -->
            <div id="gemini-setup-platform-linux" class="gemini-setup-platform-content hidden">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-2xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-6">
                        Linux 完整安装教程
                    </h3>

                    <!-- 步骤1: 安装 Node.js -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                            安装 Node.js
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4"><strong>Ubuntu/Debian:</strong></p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>sudo apt update && sudo apt install nodejs npm</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤2: 全局安装 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                            全局安装 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤3: 配置 Gemini CLI -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                            配置 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                <p class="text-red-700 font-medium">重要提示：请将下方的 GEMINI_API_KEY 替换为您在 https://${apiHost}/console/token 生成的 Gemini CLI 专用 API 密钥！</p>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.1 创建 .gemini 文件夹</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.gemini/</code></p>

                            <h5 class="text-md font-medium mb-3 mt-6">3.2 创建 .env 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 .env 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-6">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">.env</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>GOOGLE_GEMINI_BASE_URL=https://${apiHost}
GEMINI_API_KEY=粘贴为你的API密钥
GEMINI_MODEL=gemini-3-pro-preview</code></pre>
                            </div>

                            <h5 class="text-md font-medium mb-3">3.3 创建 settings.json 文件</h5>
                            <p class="text-[color:var(--text-secondary)] mb-3">在 .gemini 文件夹中创建 settings.json 文件：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}</code></pre>
                            </div>

                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg mt-4">
                                <p class="text-[color:var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Gemini CLI 才生效。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 步骤4: 启动 Gemini CLI -->
                    <div>
                        <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                            <span class="bg-[color:var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                            启动 Gemini CLI
                        </h4>
                        <div class="bg-[color:var(--cool-bg)] rounded-lg p-6">
                            <p class="text-[color:var(--text-secondary)] mb-4">配置完成后，运行以下命令启动：</p>
                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                    <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                </div>
                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>gemini</code></pre>
                            </div>
                            <div class="bg-[color:var(--cool-bg)] border-l-4 border-[color:var(--accent-blue)] p-4 rounded-r-lg">
                                <p class="text-[color:var(--accent-blue-hover)] mb-2"><strong>开始使用 Gemini CLI！</strong></p>
                                <ul class="text-[color:var(--accent-blue-hover)] space-y-1">
                                    <li>• 超大上下文窗口：1M tokens</li>
                                    <li>• Agent Mode 自动规划任务</li>
                                    <li>• Google Search 实时联网</li>
                                </ul>
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

export default GeminiSetupSection;
