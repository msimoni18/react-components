import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function LayoutNavbar() {
  return (
    <div className="flex flex-col h-full max-h-screen max-w-screen text-zinc-800 dark:text-zinc-200 dark:bg-zinc-900 dark:text-zinc-200">
      <Navbar />
      <div className="grow h-full h-screen max-h-screen no-scrollbar overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}
