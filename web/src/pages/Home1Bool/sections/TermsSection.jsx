const TermsSection = ({ config }) => {
  const { apiName, supportEmail } = config
  const html = `
<section id="terms" class="py-24 bg-[color:var(--cool-bg-alt)]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-[var(--text-primary)] mb-6">服务条款</h2>
                <p class="text-xl text-[var(--text-secondary)]">使用 ${apiName} 服务的条款和条件</p>
                <div class="mt-4 text-sm text-[var(--text-muted)]">最后更新: 2026年3月1号</div>
            </div>

            <!-- 条款接受 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                    条款接受
                </h3>
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h4 class="font-semibold text-[var(--text-primary)] mb-2">使用我们的服务即表示您同意这些条款</h4>
                    <p class="text-[var(--text-secondary)]">通过访问和使用 ${apiName} 服务，您同意受本服务条款的约束。如果您不同意这些条款，则不应使用我们的服务。</p>
                </div>
            </div>

            <!-- 服务描述 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                    服务描述
                </h3>
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6 space-y-4">
                    <div>
                        <h4 class="font-semibold text-[var(--text-primary)] mb-2">什么是 ${apiName}</h4>
                        <p class="text-[var(--text-secondary)]">${apiName} 提供 API 接口服务，为开发者提供智能代码生成、调试和优化功能的访问能力。</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-[var(--text-primary)] mb-2">主要功能</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2 ml-6">
                            <li>• AI 代码生成和补全</li>
                            <li>• 智能错误检测和修复建议</li>
                            <li>• 代码性能优化建议</li>
                            <li>• 命令行集成和项目管理</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 许可和使用权限 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                    </span>
                    许可和使用权限
                </h3>
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6 space-y-4">
                    <div>
                        <h4 class="font-semibold text-[var(--text-primary)] mb-2">授予的权限</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2 ml-6">
                            <li>• 仅限个人非商业用途</li>
                            <li>• 不可转让和不可转移的许可</li>
                            <li>• 我们可随时撤销的许可</li>
                            <li>• 单用户许可 - 每人一个账户</li>
                        </ul>
                    </div>
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p class="text-yellow-800"><strong>这是个人许可证。</strong> 严禁商业使用、再分发或共享。</p>
                    </div>
                </div>
            </div>

            <!-- 严格禁止的活动 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-red-100 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </span>
                    严格禁止的活动
                </h3>
                <div class="bg-red-50 rounded-lg p-6 space-y-4 border border-red-200">
                    <p class="text-red-700 font-semibold">以下活动将导致立即终止账户</p>
                    <div>
                        <h4 class="font-semibold text-[var(--text-primary)] mb-2">禁止再分发和转售</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2 ml-6">
                            <li>• 转售、出租或租赁您的账户或 API 访问权限</li>
                            <li>• 转授权或向第三方提供访问权限</li>
                            <li>• 分发或共享 API 密钥或凭证</li>
                            <li>• 与多个用户共享您的账户</li>
                            <li>• 将您的账户转让或出售给他人</li>
                            <li>• 公开您的 API 密钥或访问权限</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-[var(--text-primary)] mb-2">服务滥用</h4>
                        <ul class="text-[var(--text-secondary)] space-y-2 ml-6">
                            <li>• 逆向工程或试图提取源代码</li>
                            <li>• 绕过使用限制或安全措施</li>
                            <li>• 创建自动化系统进行账户创建或滥用</li>
                            <li>• 未经授权的商业用途</li>
                            <li>• 使用我们的 API 构建竞争服务</li>
                            <li>• 任何非法或有害活动</li>
                        </ul>
                    </div>
                    <div class="bg-red-100 border-l-4 border-red-600 p-4 rounded-r-lg">
                        <p class="text-red-800 font-medium">违反这些条款将导致立即终止账户且不退款，并可能导致法律诉讼。</p>
                    </div>
                </div>
            </div>

            <!-- 服务可用性 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
                    <span class="bg-[color:var(--semi-color-primary-light-default)] text-[var(--accent-blue)] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                    服务可用性
                </h3>
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h4 class="font-semibold text-[var(--text-primary)] mb-2">地理限制和支持地区</h4>
                    <p class="text-[var(--text-secondary)] mb-4">${apiName}服务仅在支持的地区提供。从不支持地区访问可能导致服务限制或账户限制。</p>
                    <div class="bg-[color:var(--cool-bg-alt)] border-l-4 border-[color:var(--semi-color-primary)] p-4 rounded-r-lg">
                        <p class="text-[var(--accent-blue-hover)] mb-3"><strong>地理限制适用</strong></p>
                        <p class="text-[var(--accent-blue-hover)]">在订阅任何套餐之前，请确认您的地区包含在我们的支持地区列表中。</p>
                    </div>
                </div>
            </div>

            <!-- 其他条款 -->
            <div class="grid md:grid-cols-2 gap-6 mb-12">
                <!-- 用户责任 -->
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">用户责任</h3>
                    <div class="space-y-3">
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">账户安全</h4>
                            <p class="text-[var(--text-secondary)] text-sm">您有责任保护您的账户安全，包括 API 密钥的安全存储和使用。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">合规使用</h4>
                            <ul class="text-[var(--text-secondary)] text-sm space-y-1 ml-4">
                                <li>• 遵守所有适用的法律法规</li>
                                <li>• 不得尝试破坏系统安全</li>
                                <li>• 尊重他人的知识产权</li>
                                <li>• 不得生成或传播有害内容</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 付费条款 -->
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">付费条款</h3>
                    <div class="space-y-3">
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">计费方式</h4>
                            <p class="text-[var(--text-secondary)] text-sm">按量付费，使用 支付宝、微信 等安全支付处理。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">退款政策</h4>
                            <p class="text-[var(--text-secondary)] text-sm">我们承诺在提出退款申请后 1-3 个工作日内处理完成退款，退款按照使用量进行折算，并收取1.5%手续费。</p>
                        </div>
                    </div>
                </div>

                <!-- 服务限制 -->
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">服务限制</h3>
                    <div class="space-y-3">
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">服务可用性</h4>
                            <p class="text-[var(--text-secondary)] text-sm">我们努力保持服务的高可用性，但不保证服务不间断。我们可能因维护、更新或不可抗力因素暂停服务。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">责任限制</h4>
                            <p class="text-[var(--text-secondary)] text-sm">在法律允许的最大范围内，我们不对因使用或无法使用服务而产生的任何损失承担责任。</p>
                        </div>
                    </div>
                </div>

                <!-- 知识产权 -->
                <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6">
                    <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">知识产权</h3>
                    <div class="space-y-3">
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">服务所有权</h4>
                            <p class="text-[var(--text-secondary)] text-sm">${apiName} 服务、商标和相关技术的所有权归我们所有。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-[var(--text-primary)] mb-1">用户内容</h4>
                            <p class="text-[var(--text-secondary)] text-sm">您保留对自己代码和内容的所有权。我们不会声明对您的代码拥有任何权利。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 服务终止 -->
            <div class="bg-[color:var(--cool-bg-alt)] rounded-lg p-6 mb-8">
                <h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">服务终止</h3>
                <p class="text-[var(--text-secondary)]">您可以随时终止您的账户。我们也保留在违反服务条款时终止或暂停您的账户的权利。</p>
            </div>

            <!-- 联系方式 -->
            <div class="text-center bg-[color:var(--cool-bg-alt)] rounded-lg p-8">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4">联系我们</h3>
                <p class="text-[var(--text-secondary)] mb-4">如有法律相关问题，请联系我们</p>
                <a href="mailto:${supportEmail}" class="inline-flex items-center text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-semibold">
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

export default TermsSection;
