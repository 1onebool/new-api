const ClaudeCodeSetupSection = ({ config }) => {
  const { apiName, apiHost } = config
  const html = `
<section id="claude-code-setup" class="py-20 bg-[var(--cool-bg)]">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-bold text-[var(--text-primary)] mb-8">Claude Code 安装步骤</h2>
                <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">详细的分平台安装指南</p>
                <div class="w-32 h-1 bg-[var(--accent-blue)] mx-auto mt-8 rounded-full"></div>
            </div>

            <!-- Claude Code 快速开始 -->
            <div class="bg-[var(--cool-bg)] rounded-2xl p-8 mb-12 text-center">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4">Claude Code 快速开始</h3>
                <p class="text-[var(--accent-blue-hover)] text-lg">Anthropic 官方 CLI 工具，Claude Sonnet 4.5 驱动</p>
                <div class="mt-6 flex justify-center items-center space-x-8 text-[var(--accent-blue)]">
                    <div class="flex items-center">
                        <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <span>安装 CLI</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <span>配置密钥</span>
                    </div>
                    <div class="flex items-center">
                        <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <span>开始编程</span>
                    </div>
                </div>
            </div>

            <!-- 平台选择 -->
            <div class="flex justify-center mb-12 sm:mb-16">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl p-2 sm:p-3 shadow-lg border border-[color:var(--card-border)] w-full max-w-md sm:max-w-none">
                    <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button onclick="showPlatform('windows')" id="btn-windows" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base bg-[color:var(--semi-color-primary)] text-white shadow-md">Windows</button>
                        <button onclick="showPlatform('mac')" id="btn-mac" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">macOS</button>
                        <button onclick="showPlatform('linux')" id="btn-linux" class="px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base text-[var(--text-secondary)] hover:bg-[color:var(--cool-bg-alt)]">Linux</button>
                    </div>
                </div>
            </div>

            <!-- Windows 安装步骤 -->
            <div id="platform-windows" class="platform-content">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center">
                        Windows 版本教程
                    </h3>
                    
                    <!-- 系统要求 -->
                    <div class="mb-8">
                        <h4 class="text-lg font-semibold mb-4">系统要求</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2">
                            <li>• Windows 10 或 Windows 11</li>
                            <li>• Node.js 18+</li>
                            <li>• 网络连接</li>
                        </ul>
                    </div>

                    <!-- 安装步骤 -->
                    <div class="space-y-8">
                        <!-- 步骤 1: 安装 Node.js -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                                安装 Node.js
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4"><strong>方法一：使用官方安装包（推荐）</strong></p>
                                <ol class="list-decimal list-inside text-[var(--text-secondary)] mb-4 ml-4 space-y-2">
                                    <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                                    <li>下载 LTS 版本的 Windows Installer (.msi)</li>
                                    <li>运行安装程序，按默认设置完成安装</li>
                                    <li>安装程序会自动添加到 PATH 环境变量</li>
                                </ol>

                                <p class="text-[var(--text-secondary)] mb-4 mt-6"><strong>方法二：使用包管理器</strong></p>
                                <p class="text-[var(--text-secondary)] mb-3">使用 <strong>Winget</strong>（Windows 11 或 Windows 10 自带）：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">PowerShell（管理员）</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>winget install OpenJS.NodeJS.LTS</code></pre>
                                </div>

                                <p class="text-[var(--text-secondary)] mb-3">使用 <strong>Chocolatey</strong>：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">PowerShell（管理员）</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>choco install nodejs-lts</code></pre>
                                </div>

                                <p class="text-[var(--text-secondary)] mb-3">使用 <strong>Scoop</strong>：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>scoop install nodejs-lts</code></pre>
                                </div>

                                <p class="text-[var(--text-secondary)] mb-4 mt-6"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>node --version
npm --version</code></pre>
                                </div>

                                <div class="bg-[var(--cool-bg)] border-l-4 border-[var(--accent-blue)] p-4 rounded-r-lg mt-4">
                                    <p class="text-[var(--accent-blue-hover)]"><strong>提示：</strong> 建议使用 LTS（长期支持）版本以获得最佳稳定性。安装完成后需重启命令行窗口。</p>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 2: 安装 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                                安装 Claude Code CLI
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">打开命令提示符（以管理员身份运行）或 PowerShell，执行以下命令：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @anthropic-ai/claude-code</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude --version</code></pre>
                                </div>
                                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                                    <p class="text-yellow-800 text-sm">
                                        <strong>注意：</strong>如果遇到权限问题，请确保以管理员身份运行命令提示符。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 3: 配置 API -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                                配置 ${apiName}
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <!-- 获取 Auth Token -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.1 获取 Auth Token</h5>
                                    <p class="text-[var(--text-secondary)] mb-3">访问 <a href="https://${apiHost}/console/token" target="_blank" class="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-medium">${apiName} 控制台</a> 进行以下操作：</p>
                                    <ul class="text-[var(--text-secondary)] space-y-2 mb-4 ml-4">
                                        <li>• 点击「添加令牌」</li>
                                        <li>• <strong>令牌分组请选择：default / cc_reverse_kiro / cc_max</strong></li>
                                        <li>• 令牌名称：随意填写</li>
                                        <li>• 额度建议：设置为无限额度</li>
                                        <li>• 其他选项保持默认</li>
                                    </ul>
                                </div>

                                <!-- 配置环境变量 -->
                                <div>
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.2 配置环境变量</h5>
                                    <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                        <p class="text-red-700 font-medium">重要提示：请将下方的 ANTHROPIC_AUTH_TOKEN 替换为您在 https://${apiHost}/console/token 生成的API密钥！</p>
                                    </div>

                                    <!-- 配置方法 -->
                                    <div class="space-y-6">
                                        <div>
                                            <h6 class="font-medium mb-3">settings.json 配置（推荐，永久生效）</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">%USERPROFILE%\\.claude\\settings.json</code></p>
                                            <p class="text-[var(--text-secondary)] mb-3">举例：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">C:\\Users\\{你的用户名}\\.claude\\settings.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://${apiHost}"
  }
}</code></pre>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h6 class="font-medium mb-3">claude.json 配置 添加一个key</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">%USERPROFILE%\\.claude.json</code></p>
                                            <p class="text-[var(--text-secondary)] mb-3">举例：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">C:\\Users\\{你的用户名}\\.claude.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">.claude.json 保留别选项不变 新增一个key值</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
"hasCompletedOnboarding": true
}
                                                </code></pre>
                                            </div>
                                        </div>

                                        <div class="bg-[var(--cool-bg)] border-l-4 border-[var(--accent-blue)] p-4 rounded-r-lg">
                                            <p class="text-[var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Claude Code 才生效。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 4: 启动 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                                启动 Claude Code
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">配置完成后，先进入到工程目录：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>cd your-project-folder</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4">然后，运行以下命令启动：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">CMD/PowerShell</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude</code></pre>
                                </div>
                                <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                                    <p class="text-green-700 mb-2"><strong>首次启动后需要先进行主题的选择等操作：</strong></p>
                                    <ul class="text-green-700 space-y-1">
                                        <li>• 选择喜欢的主题（回车）</li>
                                        <li>• 确认安全须知（回车）</li>
                                        <li>• 使用默认 Terminal 配置（回车）</li>
                                        <li>• 信任工作目录（回车）</li>
                                        <li>• 开始编程！</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- macOS 安装步骤 -->
            <div id="platform-mac" class="platform-content hidden">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center">
                        Mac 版本教程
                    </h3>
                    
                    <!-- 系统要求 -->
                    <div class="mb-8">
                        <h4 class="text-lg font-semibold mb-4">系统要求</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2">
                            <li>• macOS 10.15 (Catalina) 或更高版本</li>
                            <li>• Node.js 18+</li>
                            <li>• 网络连接</li>
                        </ul>
                    </div>

                    <!-- 安装步骤 -->
                    <div class="space-y-8">
                        <!-- 步骤 1: 安装 Node.js -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                                安装 Node.js
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4"><strong>方法一：使用 Homebrew（推荐）</strong></p>
                                <p class="text-[var(--text-secondary)] mb-4">如果尚未安装 Homebrew：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4">使用 Homebrew 安装 Node.js：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>brew install node</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4"><strong>方法二：使用官方安装包</strong></p>
                                <ol class="list-decimal list-inside text-[var(--text-secondary)] mb-4 ml-4 space-y-2">
                                    <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                                    <li>下载 LTS 版本的 macOS Installer (.pkg)</li>
                                    <li>运行安装程序，按默认设置完成安装</li>
                                    <li>安装程序会自动添加到 PATH 环境变量</li>
                                </ol>
                                <p class="text-[var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>node --version
npm --version</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 2: 安装 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                                安装 Claude Code CLI
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">打开终端，执行以下命令：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @anthropic-ai/claude-code</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude --version</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 3: 配置 API -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                                配置 ${apiName}
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <!-- 获取 Auth Token -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.1 获取 Auth Token</h5>
                                    <p class="text-[var(--text-secondary)] mb-3">访问 <a href="https://${apiHost}/console/token" target="_blank" class="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-medium">${apiName} 控制台</a> 进行以下操作：</p>
                                    <ul class="text-[var(--text-secondary)] space-y-2 mb-4 ml-4">
                                        <li>• 点击「添加令牌」</li>
                                        <li>• <strong>令牌分组请选择：default / cc_reverse_kiro / cc_max</strong></li>
                                        <li>• 令牌名称：随意填写</li>
                                        <li>• 额度建议：设置为无限额度</li>
                                        <li>• 其他选项保持默认</li>
                                    </ul>
                                </div>

                                <!-- 配置环境变量 -->
                                <div>
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.2 配置环境变量</h5>
                                    <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                        <p class="text-red-700 font-medium">重要提示：请将下方的 ANTHROPIC_AUTH_TOKEN 替换为您在 https://${apiHost}/console/token 生成的API密钥！</p>
                                    </div>

                                    <!-- 配置方法 -->
                                    <div class="space-y-6">
                                        <div>
                                            <h6 class="font-medium mb-3">settings.json 配置（推荐，永久生效）</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.claude/settings.json</code> 或 <code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">.claude/settings.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://${apiHost}"
  },
  "apiKeyHelper": "echo '你的API密钥'"
}</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <h6 class="font-medium mb-3">claude.json 配置 添加一个key</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.claude.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">.claude.json 保留别选项不变 新增一个key值</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
"hasCompletedOnboarding": true
}
                                                </code></pre>
                                            </div>
                                        </div>

                                        <div class="bg-[var(--cool-bg)] border-l-4 border-[var(--accent-blue)] p-4 rounded-r-lg">
                                            <p class="text-[var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Claude Code 才生效。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 4: 启动 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                                启动 Claude Code
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">配置完成后，先进入到工程目录：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>cd your-project-folder</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4">运行以下命令启动：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude</code></pre>
                                </div>
                                <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                                    <p class="text-green-700 mb-2"><strong>首次启动后需要先进行主题的选择等操作：</strong></p>
                                    <ul class="text-green-700 space-y-1">
                                        <li>• 选择喜欢的主题（回车）</li>
                                        <li>• 确认安全须知（回车）</li>
                                        <li>• 使用默认 Terminal 配置（回车）</li>
                                        <li>• 信任工作目录（回车）</li>
                                        <li>• 开始编程！</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Linux 安装步骤 -->
            <div id="platform-linux" class="platform-content hidden">
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-xl shadow-lg p-8 mb-8">
                    <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center">
                        Linux 版本教程
                    </h3>
                    
                    <!-- 系统要求 -->
                    <div class="mb-8">
                        <h4 class="text-lg font-semibold mb-4">系统要求</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2">
                            <li>• Linux 发行版 (Ubuntu 18.04+, CentOS 7+, Debian 9+)</li>
                            <li>• Node.js 18+</li>
                            <li>• 网络连接</li>
                        </ul>
                    </div>

                    <!-- 安装步骤 -->
                    <div class="space-y-8">
                        <!-- 步骤 1: 安装 Node.js -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                                安装 Node.js
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4"><strong>方法一：使用官方安装包（推荐）</strong></p>
                                <ol class="list-decimal list-inside text-[var(--text-secondary)] mb-4 ml-4 space-y-2">
                                    <li>访问 <a href="https://nodejs.org" target="_blank" class="text-[var(--accent-blue)] hover:underline">https://nodejs.org</a></li>
                                    <li>下载 LTS 版本的 Linux Binaries</li>
                                    <li>解压并安装到系统目录</li>
                                    <li>配置 PATH 环境变量</li>
                                </ol>

                                <p class="text-[var(--text-secondary)] mb-4 mt-6"><strong>方法二：使用包管理器</strong></p>

                                <!-- Ubuntu/Debian -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">Ubuntu/Debian</h5>
                                    <p class="text-[var(--text-secondary)] mb-3">更新包列表：</p>
                                    <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                        <div class="flex items-center justify-between p-3 bg-gray-800">
                                            <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                            <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                        </div>
                                        <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>sudo apt update</code></pre>
                                    </div>
                                    <p class="text-[var(--text-secondary)] mb-3">安装 Node.js：</p>
                                    <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                        <div class="flex items-center justify-between p-3 bg-gray-800">
                                            <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                            <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                        </div>
                                        <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs</code></pre>
                                    </div>
                                </div>

                                <!-- CentOS/RHEL/Fedora -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">CentOS/RHEL/Fedora</h5>
                                    <p class="text-[var(--text-secondary)] mb-3">使用 dnf (Fedora) 或 yum (CentOS/RHEL)：</p>
                                    <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                        <div class="flex items-center justify-between p-3 bg-gray-800">
                                            <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                            <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                        </div>
                                        <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>sudo dnf install nodejs npm
# 或者
sudo yum install nodejs npm</code></pre>
                                    </div>
                                </div>

                                <!-- Arch Linux -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">Arch Linux</h5>
                                    <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                        <div class="flex items-center justify-between p-3 bg-gray-800">
                                            <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                            <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                        </div>
                                        <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>sudo pacman -S nodejs npm</code></pre>
                                    </div>
                                </div>

                                <p class="text-[var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>node --version
npm --version</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 2: 安装 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                                安装 Claude Code CLI
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">打开终端，执行以下命令：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>npm install -g @anthropic-ai/claude-code</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4"><strong>验证安装：</strong></p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude --version</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 3: 配置 API -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</span>
                                配置 ${apiName}
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <!-- 获取 Auth Token -->
                                <div class="mb-6">
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.1 获取 Auth Token</h5>
                                    <p class="text-[var(--text-secondary)] mb-3">访问 <a href="https://${apiHost}/console/token" target="_blank" class="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-medium">${apiName} 控制台</a> 进行以下操作：</p>
                                    <ul class="text-[var(--text-secondary)] space-y-2 mb-4 ml-4">
                                        <li>• 点击「添加令牌」</li>
                                        <li>• <strong>令牌分组请选择：default / cc_reverse_kiro / cc_max</strong></li>
                                        <li>• 令牌名称：随意填写</li>
                                        <li>• 额度建议：设置为无限额度</li>
                                        <li>• 其他选项保持默认</li>
                                    </ul>
                                </div>

                                <!-- 配置环境变量 -->
                                <div>
                                    <h5 class="text-lg font-semibold text-[color:var(--text-primary)] mb-3">3.2 配置环境变量</h5>
                                    <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
                                        <p class="text-red-700 font-medium">重要提示：请将下方的 ANTHROPIC_AUTH_TOKEN 替换为您在 https://${apiHost}/console/token 生成的API密钥 </p>
                                    </div>

                                    <!-- 配置方法 -->
                                    <div class="space-y-6">
                                        <div>
                                            <h6 class="font-medium mb-3">settings.json 配置（推荐，永久生效）</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.claude/settings.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">settings.json</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "粘贴为你的API密钥",
    "ANTHROPIC_BASE_URL": "https://${apiHost}"
  },
  "apiKeyHelper": "echo '你的API密钥'"
}</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <h6 class="font-medium mb-3">claude.json 配置 添加一个key</h6>
                                            <p class="text-[var(--text-secondary)] mb-3">配置位置：<code class="bg-[color:var(--cool-bg-alt)] text-[color:var(--text-primary)] px-2 py-1 rounded text-sm">~/.claude.json</code></p>
                                            <div class="bg-gray-900 rounded-lg overflow-hidden code-block">
                                                <div class="flex items-center justify-between p-3 bg-gray-800">
                                                    <span class="text-gray-300 font-mono text-sm">.claude.json 保留别选项不变 新增一个key值</span>
                                                    <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制配置</button>
                                                </div>
                                                <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>{
"hasCompletedOnboarding": true
}
                                                </code></pre>
                                            </div>
                                        </div>

                                        <div class="bg-[var(--cool-bg)] border-l-4 border-[var(--accent-blue)] p-4 rounded-r-lg">
                                            <p class="text-[var(--accent-blue-hover)]"><strong>注意：</strong> 配置文件更加安全且便于管理，需要重启 Claude Code 才生效。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 步骤 4: 启动 Claude Code -->
                        <div class="mb-8">
                            <h4 class="text-xl font-semibold text-[color:var(--text-primary)] mb-4 flex items-center">
                                <span class="bg-[var(--accent-blue)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</span>
                                启动 Claude Code
                            </h4>
                            <div class="bg-[var(--cool-bg)] rounded-lg p-6">
                                <p class="text-[var(--text-secondary)] mb-4">配置完成后，先进入到工程目录：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>cd your-project-folder</code></pre>
                                </div>
                                <p class="text-[var(--text-secondary)] mb-4">运行以下命令启动：</p>
                                <div class="bg-gray-900 rounded-lg overflow-hidden code-block mb-4">
                                    <div class="flex items-center justify-between p-3 bg-gray-800">
                                        <span class="text-gray-300 font-mono text-sm">Terminal</span>
                                        <button onclick="copyCode(this)" class="copy-btn text-gray-400 hover:text-white transition-colors text-sm">复制</button>
                                    </div>
                                    <pre class="p-4 text-green-400 text-sm overflow-x-auto"><code>claude</code></pre>
                                </div>
                                <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                                    <p class="text-green-700 mb-2"><strong>首次启动后需要先进行主题的选择等操作：</strong></p>
                                    <ul class="text-green-700 space-y-1">
                                        <li>• 选择喜欢的主题（回车）</li>
                                        <li>• 确认安全须知（回车）</li>
                                        <li>• 使用默认 Terminal 配置（回车）</li>
                                        <li>• 信任工作目录（回车）</li>
                                        <li>• 开始编程！</li>
                                    </ul>
                                </div>
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

export default ClaudeCodeSetupSection;
