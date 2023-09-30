import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

import ReactPlot from './components/ReactPlot/ReactPlot';
import { Button } from './components/ui/button';

import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="m-2">
        <ReactPlot />
      </div>
    </ThemeProvider>
  );
}

export default App;
