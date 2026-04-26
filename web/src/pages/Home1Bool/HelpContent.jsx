import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';
import OpenClawSection from './sections/OpenClawSection';
import GeminiSetupSection from './sections/GeminiSetupSection';
import CallToActionSection from './sections/CallToActionSection';
import TermsSection from './sections/TermsSection';
import PrivacySection from './sections/PrivacySection';

const HelpContent = ({ config }) => (
  <>
    <HeroSection config={config} />
    <ToolsSection config={config} />
    <OpenClawSection config={config} />
    <GeminiSetupSection config={config} />
    <CallToActionSection config={config} />
    <TermsSection config={config} />
    <PrivacySection config={config} />
  </>
);

export default HelpContent;
