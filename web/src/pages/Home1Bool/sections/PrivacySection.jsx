const PrivacySection = ({ config }) => {
  const { apiName, supportEmail } = config
  const html = `
<section id="privacy" class="py-24 bg-[color:var(--semi-color-primary-light-default)]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-[color:var(--text-primary)] mb-6">隐私政策</h2>
                <p class="text-xl text-[color:var(--text-secondary)]">我们如何保护您的隐私和数据安全</p>
                <div class="mt-4 text-sm text-[color:var(--text-muted)]">最后更新: 2026年3月1号</div>
            </div>

            <!-- 数据收集 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[color:var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                    </span>
                    数据收集
                </h3>
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm space-y-4">
                    <div>
                        <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">我们收集的信息</h4>
                        <ul class="text-[color:var(--text-secondary)] space-y-2 ml-6">
                            <li>• 电子邮箱地址（用于账户验证和通信）</li>
                            <li>• API 使用统计（请求次数、响应时间等）</li>
                            <li>• 计费信息（仅用于订阅管理）</li>
                            <li>• 技术日志（错误信息、性能数据）</li>
                        </ul>
                    </div>
                    <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                        <h4 class="font-semibold text-green-800 mb-2">我们不收集的信息</h4>
                        <ul class="text-green-700 space-y-1 ml-6">
                            <li>• 您的源代码内容</li>
                            <li>• 项目文件或文档</li>
                            <li>• 与 AI 的对话内容</li>
                            <li>• 个人身份信息（除邮箱外）</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 数据安全 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-green-100 text-green-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                    </span>
                    数据安全
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                        <div class="w-12 h-12 bg-[color:var(--semi-color-primary-light-default)] rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">端到端加密</h4>
                        <p class="text-[color:var(--text-secondary)] text-sm">所有数据传输均使用 TLS 1.3 加密，确保数据在传输过程中的安全性。</p>
                    </div>
                    <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                        <div class="w-12 h-12 bg-[color:var(--semi-color-primary-light-default)] rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">安全传输</h4>
                        <p class="text-[color:var(--text-secondary)] text-sm">您的 API 请求采用直连架构，不经过我们的中间服务器存储或缓存。</p>
                    </div>
                    <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2c1.821 0 3.532.451 5.041 1.241"></path>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">访问控制</h4>
                        <p class="text-[color:var(--text-secondary)] text-sm">严格的权限管理确保只有授权人员能够访问必要的系统数据。</p>
                    </div>
                </div>
            </div>

            <!-- API 架构 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[color:var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                        </svg>
                    </span>
                    API 架构
                </h3>
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                    <p class="text-[color:var(--text-secondary)] mb-6">我们的系统架构设计确保数据隐私</p>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-[color:var(--semi-color-primary-light-default)] rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-8 h-8 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">直连 API</h4>
                            <p class="text-[color:var(--text-secondary)] text-sm">您的请求采用直连架构设计，不经过我们的服务器存储或缓存。</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                            <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">无数据存储</h4>
                            <p class="text-[color:var(--text-secondary)] text-sm">我们不存储您的代码、对话内容或项目文件，所有处理都在本地完成。</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-[color:var(--semi-color-primary-light-default)] rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-8 h-8 text-[color:var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h4 class="font-semibold text-[color:var(--text-primary)] mb-2">本地处理</h4>
                            <p class="text-[color:var(--text-secondary)] text-sm">代码分析和文件操作都在您的本地环境中进行，确保敏感信息不会离开您的设备。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 数据使用 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[color:var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                        </svg>
                    </span>
                    数据使用
                </h3>
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                    <p class="text-[color:var(--text-secondary)] mb-3">我们如何使用收集的数据</p>
                    <ul class="text-[color:var(--text-secondary)] space-y-2 ml-6">
                        <li>• 提供和维护 ${apiName} 服务</li>
                        <li>• 处理订阅和计费</li>
                        <li>• 提供客户支持</li>
                        <li>• 改进服务质量和性能</li>
                        <li>• 遵守法律法规要求</li>
                    </ul>
                </div>
            </div>

            <!-- 用户权利 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </span>
                    用户权利
                </h3>
                <div class="bg-[color:var(--semi-color-bg-1)] rounded-lg p-6 shadow-sm">
                    <p class="text-[color:var(--text-secondary)] mb-3">您对个人数据享有的权利</p>
                    <ul class="text-[color:var(--text-secondary)] space-y-2 ml-6">
                        <li>• 访问您的个人数据</li>
                        <li>• 更正不准确的数据</li>
                        <li>• 删除您的个人数据</li>
                        <li>• 数据可携带性</li>
                        <li>• 反对数据处理</li>
                    </ul>
                </div>
            </div>

            <!-- 联系方式 -->
            <div class="text-center bg-[color:var(--cool-bg-alt)] rounded-lg p-8">
                <h3 class="text-2xl font-bold text-[color:var(--text-primary)] mb-4">联系我们</h3>
                <p class="text-[color:var(--text-secondary)] mb-4">如有隐私相关问题，请联系我们</p>
                <a href="mailto:${supportEmail}" class="inline-flex items-center text-[color:var(--accent-blue)] hover:text-[color:var(--accent-blue-hover)] font-semibold">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    邮箱: ${supportEmail}
                </a>
            </div>
        </div>
    </section>
  `
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default PrivacySection;
