import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';
import OpenClawSection from './sections/OpenClawSection';
import CallToActionSection from './sections/CallToActionSection';
import PrivacySection from './sections/PrivacySection';

const HelpContent = ({ config }) => (
  <>
    <HeroSection config={config} />
    <ToolsSection config={config} />
    <OpenClawSection config={config} />
    <CallToActionSection config={config} />
    <PrivacySection config={config} />
  </>
);

export default HelpContent;
