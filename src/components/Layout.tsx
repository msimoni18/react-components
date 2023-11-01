import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="flex flex-col h-full max-h-screen max-w-screen">
      <Navbar />
      <div className="grow h-full h-screen max-h-screen no-scrollbar overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}
