# Home1Bool 首页迁移设计

**日期**: 2026-04-26
**状态**: 已与用户对齐，待写实施计划
**范围**: 把独立首页项目 `api-docs`（部署在 `home.1bool.com`）迁移到主站 `new-api/web/` 的路由 `/`，修复 3 个生产 bug，并保持长期与上游 `newapi.pro` 合并的低冲突面。

---

## 1. 背景

- **主站**: `https://1bool.com`（基于上游 `newapi.pro`，Go + React + Semi UI + Tailwind v3 + react-i18next）
- **独立首页**: `https://home.1bool.com`（独立 Vite + React + Tailwind v4 项目，源码在 `/Users/jawoo/Work/jawoo/productivity/api-docs`）
- **当前线上集成**: 主站通过 iframe 嵌入独立首页

### 当前生产 3 个 bug

1. 首页主题色（`#6B8EF2 / #818CF8`）与主站 Semi UI primary 色不一致
2. 浅色模式下，主站导航栏被首页内容覆盖看不到；首页内多处文字颜色错误不可见
3. 深色模式下，首页内多处文字颜色错误（如 服务条款 等模块）

### 决策：直接路由级移植，不再独立部署

- 不再用 iframe，路由 `/` 直接渲染移植后的 React 组件
- 所有移植代码集中在 `web/src/pages/Home1Bool/` 目录，与上游零冲突
- 上游 `pages/Home/index.jsx` 文件零改动保留（回滚预案）

---

## 2. 关键决策（已与用户确认）

| # | 议题 | 决策 |
|---|---|---|
| 1 | 集成方式 | A. 路由级嵌入（直接 React 组件移植，废弃 iframe） |
| 2 | 主题色对齐方向 | A. 首页跟随主站（绑定 Semi UI `--semi-color-*` token） |
| 3 | 文件落地位置 | A. 新建 `web/src/pages/Home1Bool/` 独立目录 |
| 4 | 文件类型 | B. `.tsx` 全部降级为 `.jsx`（主站零 TS 文件） |
| 5 | 国际化 | C. 本次只迁移+修 bug，文案保持硬编码中文，i18n 后续单独立项 |
| 6 | 导航栏与 Footer | A. 删掉首页自带 SiteNav/FooterSection，复用主站 HeaderBar/Footer |
| 7 | Hero 区主题 | A. 保留 Hero 恒定深色（landing page 视觉锚点） |
| 8 | Tailwind 版本 | 不升级；独立项目的 v4 样式手工降级到主站现有 v3 |

---

## 3. 文件布局与隔离

```
web/src/pages/Home1Bool/                  # 所有移植代码集中在此目录
  index.jsx                               # 路由入口；包 useEffect、useActualTheme、APP_CONFIG
  HelpContent.jsx                         # 渲染 9 个 section
  config.js                               # APP_CONFIG（apiName/apiHost/wechatId/supportEmail）
  theme.css                               # 局部样式：CSS 变量映射 Semi token + 兼容 Tailwind v3
  sections/
    HeroSection.jsx
    ToolsSection.jsx
    OpenClawSection.jsx
    ClaudeCodeSetupSection.jsx
    CodexSetupSection.jsx
    GeminiSetupSection.jsx
    CallToActionSection.jsx
    TermsSection.jsx
    PrivacySection.jsx
```

**主站只动 1 行**: `web/src/App.jsx:97` 的 `<Home />` 替换为 `<Home1Bool />`，对应 import 加 1 行。`pages/Home/index.jsx`（上游版本）零改动保留。

**`theme.css` 的作用域控制**: 所有规则用 `.home1bool-root` 作为父选择器（注入到 `Home1Bool/index.jsx` 的最外层 `<div className="home1bool-root">`），保证：
- 不污染主站其他页面的 Semi 组件样式
- Tailwind utilities 在 `web/` 现有 v3 配置下生效（不需要改 `tailwind.config.js`）
- 主题色变量重映射只在首页根节点生效

**长期合并上游策略**: 上游 `pages/Home/index.jsx` 永远不动；新增的所有文件都在 `pages/Home1Bool/` 下。`App.jsx` 的修改在合并冲突时只是 1 行人工确认（保留 `Home1Bool` 路由，丢弃上游对 `Home` 路由的更新）。

---

## 4. 主题集成（解决 bug #1）

**桥接策略**: 在 `theme.css` 里把首页用到的所有自定义 token 映射到 Semi UI token；dark 模式选择器从 `html.dark` 改为 `body[theme-mode="dark"]`（主站标准）。

```css
/* web/src/pages/Home1Bool/theme.css */
.home1bool-root {
  /* 品牌色 → Semi primary */
  --accent-blue:        var(--semi-color-primary);
  --accent-blue-hover:  var(--semi-color-primary-hover);
  --accent-cyan:        var(--semi-color-primary-light-active);
  --accent-blue-bg:     var(--semi-color-primary-light-default);
  --accent-lilac:       var(--semi-color-primary-light-hover);
  --accent-gradient:    linear-gradient(90deg,
                         var(--semi-color-primary-light-active) 0%,
                         var(--semi-color-primary-hover) 50%,
                         var(--semi-color-primary) 100%);

  /* 文字 → Semi text tokens（解决 bug #2/#3） */
  --text-primary:       var(--semi-color-text-0);
  --text-secondary:     var(--semi-color-text-1);
  --text-muted:         var(--semi-color-text-2);

  /* 背景/卡片 → Semi bg tokens */
  --cool-bg:            var(--semi-color-bg-0);
  --cool-bg-alt:        var(--semi-color-bg-1);
  --card-border:        var(--semi-color-border);
  --card-border-hover:  var(--semi-color-primary-light-hover);

  /* Hero 保留恒定深色（不接 Semi token） */
  --hero-bg-0:   #07080F;
  --hero-bg-1:   #0B0D1A;
  --hero-text-h: #ffffff;
  --hero-text-m: rgba(255, 255, 255, 0.55);
  --hero-text-l: rgba(255, 255, 255, 0.40);
  --hero-border: rgba(255, 255, 255, 0.09);
  --hero-surface:rgba(255, 255, 255, 0.04);
}

body[theme-mode="dark"] .home1bool-root {
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
}
```

**index.jsx 主题钩子**: 删除原 `App.tsx` 里所有 iframe 检测、`html.dark` 切换、postMessage 监听、`parentPollId`、`html.embedded-layout` 等约 80 行代码。改用 `useActualTheme()` 获取当前主题（CSS 已通过 `body[theme-mode="dark"]` 自动响应，不需要 JS 干预具体样式）。

**收益**:
- 主题色与 Semi UI token 完全绑定，未来在主站后台切换 violet / teal / amber / rose 主题时首页同步变色
- 删除约 80 行 iframe 兼容代码
- bug #1（主题色不一致）从根上消除

---

## 5. 字体与背景颜色修复（解决 bug #2 浅色 + bug #3 深色）

**根因**: 独立项目的 11 个 section 大量使用 Tailwind 硬编码颜色类（`text-gray-900`、`text-gray-600`、`bg-white`、`bg-gray-50`、`text-slate-700` 等）。这些类没有 `dark:` 变体；而且即使有，主站使用 `body[theme-mode="dark"]` 不是 `html.dark`，Tailwind 的 `dark` 变体匹配不上。

**机械化替换规则**:

| 场景 | 替换前 | 替换后 |
|---|---|---|
| 主标题文字 | `text-gray-900` / `text-slate-900` | `text-[color:var(--text-primary)]` |
| 次级正文 | `text-gray-700` / `text-slate-700` | `text-[color:var(--text-primary)]` |
| 辅助说明文字 | `text-gray-600` / `text-slate-600` | `text-[color:var(--text-secondary)]` |
| 弱化提示 | `text-gray-500` / `text-slate-500` / `text-gray-400` | `text-[color:var(--text-muted)]` |
| 卡片白底 | `bg-white` | `bg-[color:var(--semi-color-bg-1)]` |
| 区块底色 | `bg-gray-50` / `bg-slate-50` | `bg-[color:var(--cool-bg-alt)]` |
| 边框 | `border-gray-200` / `border-slate-200` | `border-[color:var(--card-border)]` |
| Hover 边框 | `hover:border-gray-300` | `hover:border-[color:var(--card-border-hover)]` |

**Hero 内例外**: Hero 区永远深色，保留 `text-white` / `text-white/55` 等硬编码。

**Tabs 激活态特例**: 原 `App.tsx` 里平台切换按钮硬编码 `bg-[#6B8EF2] text-white`（5 处），改为 `bg-[color:var(--semi-color-primary)] text-white`。

**代码块（CodexSetup / ClaudeCodeSetup / GeminiSetup）**: 原 `bg-gray-900 text-gray-100` 这种"语义性深色"代码块两种模式都保留深色，不替换。

**Tailwind v4 → v3 兼容**:
- 唯一 v4 指令是 `@import "tailwindcss"`（在独立项目 `styles.css:1`），主站 `index.css` 已有 v3 的 `@tailwind base/components/utilities`，移植版的 `theme.css` 不重新引入 Tailwind，只放纯 CSS 变量和 scope 内规则
- `bg-[#xxx]`、`bg-[color:var(--x)]` 这类 arbitrary values 在 v3 JIT 模式原生支持
- 不使用 v4 的 `@theme` / `@variant` / `@utility` 指令

---

## 6. index.jsx 入口逻辑改造

**保留**（继续生效）:
- 平台 tab 切换（platformToggle / codexPlatformToggle / codexSetupToggle / geminiSetupToggle / productToggle）
- 代码复制（copyCode / copyToClipboard / enhanceCodeBlocks）
- 滚动渐显（revealOnScroll / fade-in-up 类）
- Ripple 点击效果
- 锚点平滑滚动 + 初始 hash 处理（handleInitialHash）
- 全局函数挂载（window.showPlatform 等，HTML inline `onclick` 用到）
- 监听器 cleanup

**删除**（不再需要）:
- `isInIframe = window.self !== window.top` 及所有相关逻辑
- `iframeHostHeaderOffset` / `pageTopOffset` / `paddingTop` 包裹层
- `html.embedded-layout` class 切换 + `::before` 白色 backdrop
- `applyDarkMode` / `detectDarkMode` / `darkMq` 监听 / `parentPollId` 父窗口轮询
- `onThemeMessage` postMessage 主题同步
- `observeNavState` / `nav-on-hero` / `nav-on-body` IntersectionObserver（SiteNav 已删）
- `urlParams.get('theme')` URL 主题参数

**入口骨架**（约 120 行，比原来 470 行缩减一半）:

```jsx
// web/src/pages/Home1Bool/index.jsx
import { useEffect } from 'react';
import { useActualTheme } from '../../context/Theme';
import HelpContent from './HelpContent';
import { APP_CONFIG } from './config';
import './theme.css';

const Home1Bool = () => {
  const actualTheme = useActualTheme();  // 'dark' | 'light'

  useEffect(() => {
    // 平台 tab / 代码复制 / 渐显 / ripple / 锚点滚动 / 全局挂载
    // （从原 App.tsx 复制保留部分，删 iframe & 主题相关）

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="home1bool-root" data-theme={actualTheme}>
      <HelpContent config={APP_CONFIG} />
    </div>
  );
};

export default Home1Bool;
```

`config.js` 单独抽出，便于将来部署到不同站点改 `apiName/apiHost/wechatId/supportEmail` 时不动业务代码。

---

## 7. Section 文件迁移规则（11→9 个 .tsx → .jsx）

**逐文件机械改造**:

1. **重命名**: `.tsx` → `.jsx`
2. **删除 type 注解**: 去掉 `import type { SectionProps }`、函数签名 `({ config }: SectionProps)` → `({ config })`、类型别名（`type Platform`、`AppConfig` 等）
3. **改 import**: `from './help/types'` → 删除（不做类型校验，与主站其他 jsx 一致）
4. **颜色类替换**: 按第 5 节表格做规则化替换
5. **保持 JSX 结构 / 业务文案 / DOM id / class hooks 完全不变**（`index.jsx` 的 `useEffect` 通过 id 和 class 寻找元素）

**两个被删除的 section**:
- `SiteNav.tsx`: 删除文件，`HelpContent.jsx` 不渲染
- `FooterSection.tsx`: 删除文件，同上

**保留的 9 个 section 文件**: HeroSection、ToolsSection、OpenClawSection、ClaudeCodeSetupSection、CodexSetupSection、GeminiSetupSection、CallToActionSection、TermsSection、PrivacySection。

**`HelpContent.jsx`**（约 20 行）:

```jsx
import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';
import OpenClawSection from './sections/OpenClawSection';
import ClaudeCodeSetupSection from './sections/ClaudeCodeSetupSection';
import CodexSetupSection from './sections/CodexSetupSection';
import GeminiSetupSection from './sections/GeminiSetupSection';
import CallToActionSection from './sections/CallToActionSection';
import TermsSection from './sections/TermsSection';
import PrivacySection from './sections/PrivacySection';

const HelpContent = ({ config }) => (
  <>
    <HeroSection config={config} />
    <ToolsSection config={config} />
    <OpenClawSection config={config} />
    <ClaudeCodeSetupSection config={config} />
    <CodexSetupSection config={config} />
    <GeminiSetupSection config={config} />
    <CallToActionSection config={config} />
    <TermsSection config={config} />
    <PrivacySection config={config} />
  </>
);

export default HelpContent;
```

**Hero 顶部空隙**: Hero 原本依赖 App.tsx 的 `paddingTop: pageTopOffset` 给主站 HeaderBar（64px）让位。现在 PageLayout 已经把 HeaderBar `position: fixed` + Content 上面有空间——Hero 自己加 `pt-16`（64px = 主站 header 高度）作为顶部内边距。验证时滚动到顶看 Hero 是不是被 HeaderBar 盖住。

---

## 8. 验证与验收

**手工验证清单**（用 chrome-devtools MCP 强制清缓存打开，先关闭可能弹出的公告）:

| 场景 | 检查点 |
|---|---|
| 浅色模式 + 非登录态 | 主站 HeaderBar 可见、登录入口可点；Hero 仍是深色不被遮挡；9 个 section 所有文字、卡片、按钮可读；TermsSection / PrivacySection 段落文字与背景对比度 ≥ 4.5 |
| 浅色模式 + 已登录态 | HeaderBar 用户菜单/通知可见；其余同上 |
| 深色模式 | 9 个 section 所有文字与卡片背景对比度 ≥ 4.5；TermsSection 列表项、PrivacySection 段落是否可读（bug #3 重点）；代码块仍保持深色 |
| 主题切换 | 在 HeaderBar 切换浅/深，首页所有非 Hero 区域颜色立即跟随；Hero 区始终深色 |
| 平台 Tab 切换 | Windows / Mac / Linux 三个按钮可切换；激活态按钮使用主站 primary 色（不再是硬编码 `#6B8EF2`） |
| 代码复制 | ClaudeCodeSetup / CodexSetup / GeminiSetup 区代码块复制按钮工作正常 |
| 锚点跳转 | 顶部 SiteNav 已删，章节内 `<a href="#xxx">` 仍能滚动 |
| 滚动渐显 | `fade-in-up` 元素滚入视窗时正常出现 |
| 移动端 | 视窗 < 768px 时布局不破；HeaderBar 抽屉菜单仍可用；Hero 不溢出 |

**自动化检查**:
- `bun run build`（在 `web/` 下）成功，无 import / lint 报错
- 不引入新 npm 依赖（不增加 TS 工具链、不升级 Tailwind）
- `git diff` 上游文件改动控制在 1 个：`web/src/App.jsx` 加 import + 替换 `<Home />`

**回滚预案**: 保留 `pages/Home/` 不删，如出问题只需把 `App.jsx` 的 `<Home1Bool />` 改回 `<Home />`、删 `Home1Bool/` 目录即可恢复。

**部署后**: `home.1bool.com` 独立域名是否下线由用户决定（不在本次范围）。生产环境只看主站 `1bool.com/` 路由是否正常。

---

## 9. 风险与已识别问题

- **9 个 section 共约 3300 行代码做颜色类替换**，规则化机械改但量大，可能漏改一两处——通过验证清单覆盖
- **HelpContent 内部的 id / class 钩子**（`#hero` / `.code-block` / `#btn-windows` 等）是 useEffect 用 querySelector 找的，section 改造时不能误改这些
- **Hero 的 `pt-16` 顶部空隙**需要在浅/深模式 + 移动端都验证

---

## 10. 不在本次范围

- 首页文案 i18n（保持硬编码中文，作为后续独立任务）
- `home.1bool.com` 独立域名下线（部署决策）
- 主站后台主题（violet / teal / amber / rose 变体）UI 调整
- 上游 `pages/Home/index.jsx` 任何改动
- 升级 Tailwind 到 v4
