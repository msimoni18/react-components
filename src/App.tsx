import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground';
import Documentation from './pages/Documentation';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="playground" element={<Playground />} />
        <Route path="documentation" element={<Documentation />} />
      </Route>
    </Routes>
  );
}

export default App;
