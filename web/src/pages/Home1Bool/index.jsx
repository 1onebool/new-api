import HelpContent from './HelpContent';
import { APP_CONFIG } from './config';
import './theme.css';

const Home1Bool = () => (
  <div className="home1bool-root">
    <HelpContent config={APP_CONFIG} />
  </div>
);

export default Home1Bool;
