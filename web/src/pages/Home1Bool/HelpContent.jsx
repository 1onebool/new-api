import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';
import CallToActionSection from './sections/CallToActionSection';

const HelpContent = ({ config }) => (
  <>
    <HeroSection config={config} />
    <ToolsSection config={config} />
    <CallToActionSection config={config} />
  </>
);

export default HelpContent;
