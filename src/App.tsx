import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Documentation } from './pages/documentation/Documentation';
import { Statistics } from './pages/statistics/Statistics';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="docs" element={<Documentation />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}
