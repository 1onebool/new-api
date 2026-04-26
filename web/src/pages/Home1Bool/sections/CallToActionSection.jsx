const CallToActionSection = ({ config }) => {
  const { apiHost } = config
  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <div className="cta-pill">1Bool API</div>
        <h2 className="cta-title">准备好接入 AI 的算力底座了吗？</h2>
        <p className="cta-sub">进入控制台，创建 API Key，立即开始接入。</p>
        <div className="cta-actions">
          <a
            href={`https://${apiHost}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-primary"
          >
            进入控制台
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
          <a href="#claude-code-setup" className="cta-btn-secondary">
            查看 Claude Code 接入
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection;
