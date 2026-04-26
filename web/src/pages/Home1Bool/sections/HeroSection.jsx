const HeroSection = ({ config }) => {
  const { apiHost } = config;
  return (
    <section className="hero pt-16" id="hero">
      <div className="hero-deco" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb--indigo" />
        <div className="hero-orb hero-orb--blue" />
      </div>

      <div className="hero-inner">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          支持 Claude Code · CodeX · Gemini CLI
        </div>

        <h1 className="hero-h1">
          <span className="hero-h1-line">让每一个想法，</span>
          <span className="hero-h1-line">
            都配得上<span className="hero-h1-accent">最好的模型</span>
          </span>
        </h1>

        <p className="hero-sub">一个 API，接通 Claude、GPT、Gemini 的全部能力</p>

        <div className="hero-actions">
          <a
            href={`https://${apiHost}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            立即开始
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#claude-code-setup" className="hero-btn-secondary">
            查看文档
          </a>
        </div>

        <div className="hero-logos">
          <span>Claude</span>
          <span className="hero-logos-sep" />
          <span>OpenAI</span>
          <span className="hero-logos-sep" />
          <span>Gemini</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
