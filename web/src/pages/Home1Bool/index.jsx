import { useEffect, useRef, useState } from 'react';
import { useActualTheme } from '../../context/Theme';
import HelpContent from './HelpContent';
import { APP_CONFIG } from './config';
import './theme.css';

const ANCHOR_OFFSET = 80; // 主站 HeaderBar 64px + 16px 边距
const DOC_NAV_ITEMS = [
  { id: 'tools', label: '工具总览' },
  { id: 'openclaw-setup', label: 'OpenClaw' },
  { id: 'claude-code-setup', label: 'Claude Code' },
  { id: 'codex-setup', label: 'CodeX' },
  { id: 'gemini-setup', label: 'Gemini CLI' },
  { id: 'terms', label: '服务条款' },
  { id: 'privacy', label: '隐私政策' },
];

const Home1Bool = () => {
  const actualTheme = useActualTheme();
  const rootRef = useRef(null);
  const [activeDocSection, setActiveDocSection] = useState(DOC_NAV_ITEMS[0].id);
  const [isDocNavVisible, setIsDocNavVisible] = useState(false);

  useEffect(() => {
    let reveals = [];
    let scrollTimeout = null;
    let scrollContainers = [];
    const getRoot = () => rootRef.current;

    document.body.classList.add('home1bool-page');

    const toggleContent = (contentSelector, selectedId) => {
      const root = getRoot();
      if (!root) return;
      root.querySelectorAll(contentSelector).forEach((el) => {
        el.classList.add('hidden');
      });
      const selected = root.querySelector(`#${selectedId}`);
      if (selected) selected.classList.remove('hidden');
    };

    const INACTIVE_TAB_CLASSES = [
      'text-[color:var(--text-secondary)]',
      'hover:bg-[color:var(--cool-bg-alt)]',
    ];
    const INACTIVE_TAB_CLASS_POOL = [
      ...INACTIVE_TAB_CLASSES,
      'text-gray-600',
      'hover:bg-gray-100',
    ];

    const setButtonState = (buttonSelector, selectedId, options) => {
      const root = getRoot();
      if (!root) return;
      const { inactiveClasses, activeClasses, resetClasses } = options;
      const classesToRemove = resetClasses ?? activeClasses;
      root.querySelectorAll(buttonSelector).forEach((btn) => {
        btn.classList.remove(...classesToRemove, ...INACTIVE_TAB_CLASS_POOL);
        btn.classList.add(...inactiveClasses);
      });
      const selected = root.querySelector(`#${selectedId}`);
      if (selected) {
        selected.classList.remove(...inactiveClasses, ...INACTIVE_TAB_CLASS_POOL);
        selected.classList.add(...activeClasses);
      }
    };

    const createTabToggle = (options) => (value) => {
      toggleContent(options.contentSelector, options.contentId(value));
      setButtonState(options.buttonSelector, options.buttonId(value), {
        inactiveClasses: options.inactiveClasses,
        activeClasses: options.activeClasses(value),
        resetClasses: options.resetClasses,
      });
    };

    // 激活态使用 Semi primary 色（修复 bug #1：主题色对齐）
    const ACTIVE_BG = 'bg-[color:var(--semi-color-primary)]';
    const platformToggle = createTabToggle({
      contentSelector: '.platform-content',
      contentId: (v) => `platform-${v}`,
      buttonSelector: '#btn-windows, #btn-mac, #btn-linux',
      buttonId: (v) => `btn-${v}`,
      inactiveClasses: INACTIVE_TAB_CLASSES,
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const codexPlatformToggle = createTabToggle({
      contentSelector: '.codex-platform-content',
      contentId: (v) => `codex-platform-${v}`,
      buttonSelector: '#codex-btn-windows, #codex-btn-mac, #codex-btn-linux',
      buttonId: (v) => `codex-btn-${v}`,
      inactiveClasses: INACTIVE_TAB_CLASSES,
      activeClasses: () => [ACTIVE_BG, 'text-white'],
      resetClasses: [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const codexSetupToggle = createTabToggle({
      contentSelector: '.codex-setup-platform-content',
      contentId: (v) => `codex-setup-platform-${v}`,
      buttonSelector: '#codex-setup-btn-windows, #codex-setup-btn-mac, #codex-setup-btn-linux',
      buttonId: (v) => `codex-setup-btn-${v}`,
      inactiveClasses: INACTIVE_TAB_CLASSES,
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const geminiSetupToggle = createTabToggle({
      contentSelector: '.gemini-setup-platform-content',
      contentId: (v) => `gemini-setup-platform-${v}`,
      buttonSelector: '#gemini-setup-btn-windows, #gemini-setup-btn-mac, #gemini-setup-btn-linux',
      buttonId: (v) => `gemini-setup-btn-${v}`,
      inactiveClasses: INACTIVE_TAB_CLASSES,
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const productToggle = createTabToggle({
      contentSelector: '.product-tutorial-content',
      contentId: (v) => `product-${v}`,
      buttonSelector: '#product-btn-claude, #product-btn-codex',
      buttonId: (v) => `product-btn-${v === 'claude-code' ? 'claude' : 'codex'}`,
      inactiveClasses: INACTIVE_TAB_CLASSES,
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
      resetClasses: [ACTIVE_BG, 'text-white', 'shadow-md'],
    });

    const showCopySuccess = (button) => {
      const originalText = button.textContent || '';
      const originalClasses = button.className;
      button.textContent = '✓ 已复制';
      button.className = button.className.replace(/bg-\w+-\d+/, 'bg-green-600');
      window.setTimeout(() => {
        button.textContent = originalText;
        button.className = originalClasses;
      }, 2000);
    };

    const fallbackCopyTextToClipboard = (text, button) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-999999px';
      ta.style.top = '-999999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        const ok = document.execCommand('copy');
        if (ok) showCopySuccess(button); else alert('复制失败，请手动复制');
      } catch {
        alert('复制功能不被支持，请手动复制');
      }
      document.body.removeChild(ta);
    };

    const getCodeText = (button, containerSelector, errorMessage, trim = false) => {
      const container = button.closest(containerSelector);
      const codeEl = container ? container.querySelector('code') : null;
      if (!codeEl) {
        alert(errorMessage);
        return null;
      }
      const text = codeEl.textContent || '';
      return trim ? text.trim() : text;
    };

    const copyText = (text, button) => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
          .then(() => showCopySuccess(button))
          .catch(() => fallbackCopyTextToClipboard(text, button));
      } else {
        fallbackCopyTextToClipboard(text, button);
      }
    };

    const copyToClipboard = (button) => {
      const text = getCodeText(button, '.code-block', '复制失败，未找到配置内容');
      if (text === null) return;
      copyText(text, button);
    };

    const copyCode = (button) => {
      const text = getCodeText(button, '.code-block', '复制失败，未找到代码内容', true);
      if (text === null) return;
      copyText(text, button);
    };

    const enhanceCodeBlocks = (scopeSelector = '#codex-setup') => {
      const pageRoot = getRoot();
      const root = pageRoot?.querySelector(scopeSelector);
      if (!root) return;
      root.querySelectorAll('.code-block').forEach((block) => {
        if (!block.querySelector('code')) return;
        if (block.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn text-gray-400 hover:text-white transition-colors text-sm';
        btn.textContent = '复制';
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          copyCode(btn);
        });
        block.appendChild(btn);
      });
    };

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      for (let i = 0; i < reveals.length; i += 1) {
        const top = reveals[i].getBoundingClientRect().top;
        if (top < windowHeight - elementVisible) reveals[i].classList.add('revealed');
      }
    };

    const updateDocNavState = () => {
      const root = getRoot();
      if (!root) return;
      const firstSection = root.querySelector(`#${DOC_NAV_ITEMS[0].id}`);
      const lastSection = root.querySelector(`#${DOC_NAV_ITEMS[DOC_NAV_ITEMS.length - 1].id}`);
      if (!firstSection || !lastSection) return;

      const probeLine = ANCHOR_OFFSET + 24;
      const shouldShow = (
        firstSection.getBoundingClientRect().top <= window.innerHeight - 160
        && lastSection.getBoundingClientRect().bottom >= probeLine
      );
      setIsDocNavVisible(shouldShow);

      let nextActive = DOC_NAV_ITEMS[0].id;
      DOC_NAV_ITEMS.forEach((item) => {
        const section = root.querySelector(`#${item.id}`);
        if (section && section.getBoundingClientRect().top <= probeLine) {
          nextActive = item.id;
        }
      });
      setActiveDocSection(nextActive);
    };

    const handleScroll = () => {
      if (scrollTimeout !== null) return;
      scrollTimeout = window.setTimeout(() => {
        revealOnScroll();
        updateDocNavState();
        scrollTimeout = null;
      }, 16);
    };

    const getScrollContainer = () => (
      scrollContainers.find((el) => el.scrollHeight > el.clientHeight + 1) || null
    );

    const scrollToTarget = (targetEl, behavior = 'smooth') => {
      const container = getScrollContainer();
      if (container) {
        const containerTop = container.getBoundingClientRect().top;
        const targetTop = targetEl.getBoundingClientRect().top;
        container.scrollTo({
          top: targetTop - containerTop + container.scrollTop - ANCHOR_OFFSET,
          behavior,
        });
        return;
      }
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset - ANCHOR_OFFSET;
      window.scrollTo({ top, behavior });
    };

    const createRipple = (event, element) => {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      ripple.style.cssText = `width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px;`;
      ripple.className = 'ripple';
      element.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 600);
    };

    const clickHandler = (event) => {
      const root = getRoot();
      if (!root) return;
      const target = event.target;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        if (!root.contains(anchor)) return;
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetEl = root.querySelector(href);
          if (targetEl) {
            const docItem = DOC_NAV_ITEMS.find((item) => `#${item.id}` === href);
            if (docItem) {
              setActiveDocSection(docItem.id);
              setIsDocNavVisible(true);
            }
            scrollToTarget(targetEl);
            history.pushState(null, '', href);
          }
        }
      }
      // ripple 限定在 Home1Bool 内部，避免污染主站 HeaderBar / Sidebar 按钮
      if (root.contains(target)) {
        const rippleTarget = target.closest('a, button');
        if (rippleTarget) createRipple(event, rippleTarget);
      }
    };

    // 全局函数挂载（HTML 模板内的 inline onclick 用到）
    window.showPlatform = (p) => platformToggle(p);
    window.showCodeXPlatform = (p) => codexPlatformToggle(p);
    window.showCodeXSetupPlatform = (p) => codexSetupToggle(p);
    window.showGeminiSetupPlatform = (p) => geminiSetupToggle(p);
    window.showProduct = (p) => productToggle(p);
    window.copyCode = copyCode;
    window.copyToClipboard = copyToClipboard;

    document.addEventListener('click', clickHandler);
    window.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainers = Array.from(
      document.querySelectorAll('.semi-layout, .semi-layout-content'),
    ).filter((el) => el.scrollHeight > el.clientHeight + 1);
    scrollContainers.forEach((el) => {
      el.addEventListener('scroll', handleScroll, { passive: true });
    });

    const root = getRoot();
    reveals = root ? Array.from(root.querySelectorAll('.fade-in-up')) : [];
    revealOnScroll();
    updateDocNavState();
    codexSetupToggle('windows');
    enhanceCodeBlocks('#codex-setup');

    const handleInitialHash = () => {
      const hash = window.location.hash;
      const root = getRoot();
      if (hash) {
        setTimeout(() => {
          const targetEl = root?.querySelector(hash);
          if (targetEl) {
            const docItem = DOC_NAV_ITEMS.find((item) => `#${item.id}` === hash);
            if (docItem) {
              setActiveDocSection(docItem.id);
              setIsDocNavVisible(true);
            }
            scrollToTarget(targetEl);
          }
        }, 100);
      }
    };
    handleInitialHash();

    return () => {
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', handleScroll);
      scrollContainers.forEach((el) => {
        el.removeEventListener('scroll', handleScroll);
      });
      if (scrollTimeout !== null) {
        window.clearTimeout(scrollTimeout);
      }
      document.body.classList.remove('home1bool-page');
      delete window.showPlatform;
      delete window.showCodeXPlatform;
      delete window.showCodeXSetupPlatform;
      delete window.showGeminiSetupPlatform;
      delete window.showProduct;
      delete window.copyCode;
      delete window.copyToClipboard;
    };
  }, []);

  return (
    <div ref={rootRef} className="home1bool-root" data-theme={actualTheme}>
      <nav
        className={`home1bool-doc-nav ${isDocNavVisible ? 'is-visible' : ''}`}
        aria-label="文档目录"
      >
        <div className="home1bool-doc-nav-title">文档目录</div>
        <div className="home1bool-doc-nav-list">
          {DOC_NAV_ITEMS.map((item) => {
            const isActive = activeDocSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`home1bool-doc-nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="home1bool-doc-nav-dot" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
      <HelpContent config={APP_CONFIG} />
    </div>
  );
};

export default Home1Bool;
