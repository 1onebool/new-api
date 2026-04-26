import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';

const HelpContent = ({ config }) => (
  <>
    <HeroSection config={config} />
    <ToolsSection config={config} />
  </>
);

export default HelpContent;
