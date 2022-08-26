import './App.css';
import { LeftPanel } from './Body/LeftPanel/leftPanel';
import { Header } from "./Header/header";

function App() {
  return (
    <div className="font-link">
      <div className="header font-family-fira">
        <Header />
      </div>
      <div className="body font-family-arimo">
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="right-panel">
          <h1>Right Panel</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
