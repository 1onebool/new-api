import { useEffect } from 'react';
import { useActualTheme } from '../../context/Theme';
import HelpContent from './HelpContent';
import { APP_CONFIG } from './config';
import './theme.css';

const ANCHOR_OFFSET = 80; // 主站 HeaderBar 64px + 16px 边距

const Home1Bool = () => {
  const actualTheme = useActualTheme();

  useEffect(() => {
    let reveals = [];
    let scrollTimeout = null;

    const toggleContent = (contentSelector, selectedId) => {
      document.querySelectorAll(contentSelector).forEach((el) => {
        el.classList.add('hidden');
      });
      const selected = document.getElementById(selectedId);
      if (selected) selected.classList.remove('hidden');
    };

    const setButtonState = (buttonSelector, selectedId, options) => {
      const { inactiveClasses, activeClasses, resetClasses } = options;
      const classesToRemove = resetClasses ?? activeClasses;
      document.querySelectorAll(buttonSelector).forEach((btn) => {
        btn.classList.remove(...classesToRemove);
        btn.classList.add(...inactiveClasses);
      });
      const selected = document.getElementById(selectedId);
      if (selected) {
        selected.classList.remove(...inactiveClasses);
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
      inactiveClasses: ['text-gray-600', 'hover:bg-gray-100'],
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const codexPlatformToggle = createTabToggle({
      contentSelector: '.codex-platform-content',
      contentId: (v) => `codex-platform-${v}`,
      buttonSelector: '#codex-btn-windows, #codex-btn-mac, #codex-btn-linux',
      buttonId: (v) => `codex-btn-${v}`,
      inactiveClasses: ['text-gray-600', 'hover:bg-gray-100'],
      activeClasses: () => [ACTIVE_BG, 'text-white'],
      resetClasses: [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const codexSetupToggle = createTabToggle({
      contentSelector: '.codex-setup-platform-content',
      contentId: (v) => `codex-setup-platform-${v}`,
      buttonSelector: '#codex-setup-btn-windows, #codex-setup-btn-mac, #codex-setup-btn-linux',
      buttonId: (v) => `codex-setup-btn-${v}`,
      inactiveClasses: ['text-gray-600', 'hover:bg-gray-100'],
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const geminiSetupToggle = createTabToggle({
      contentSelector: '.gemini-setup-platform-content',
      contentId: (v) => `gemini-setup-platform-${v}`,
      buttonSelector: '#gemini-setup-btn-windows, #gemini-setup-btn-mac, #gemini-setup-btn-linux',
      buttonId: (v) => `gemini-setup-btn-${v}`,
      inactiveClasses: ['text-gray-600', 'hover:bg-gray-100'],
      activeClasses: () => [ACTIVE_BG, 'text-white', 'shadow-md'],
    });
    const productToggle = createTabToggle({
      contentSelector: '.product-tutorial-content',
      contentId: (v) => `product-${v}`,
      buttonSelector: '#product-btn-claude, #product-btn-codex',
      buttonId: (v) => `product-btn-${v === 'claude-code' ? 'claude' : 'codex'}`,
      inactiveClasses: ['text-gray-600', 'hover:bg-gray-100'],
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
      const root = document.querySelector(scopeSelector);
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

    const handleScroll = () => {
      if (scrollTimeout !== null) return;
      scrollTimeout = window.setTimeout(() => {
        revealOnScroll();
        scrollTimeout = null;
      }, 16);
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
      const target = event.target;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            const top = targetEl.getBoundingClientRect().top + window.pageYOffset - ANCHOR_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
            history.pushState(null, '', href);
          }
        }
      }
      const rippleTarget = target.closest('a, button');
      if (rippleTarget) createRipple(event, rippleTarget);
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

    reveals = Array.from(document.querySelectorAll('.fade-in-up'));
    revealOnScroll();
    codexSetupToggle('windows');
    enhanceCodeBlocks('#codex-setup');

    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            const top = targetEl.getBoundingClientRect().top + window.pageYOffset - ANCHOR_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 100);
      }
    };
    handleInitialHash();

    return () => {
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', handleScroll);
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
    <div className="home1bool-root" data-theme={actualTheme}>
      <HelpContent config={APP_CONFIG} />
    </div>
  );
};

export default Home1Bool;
