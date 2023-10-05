import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ScatterChart, FileText, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './ModeToggle';
import logo from '../assets/python.png';

const iconStyle = 'mr-4 h-6 w-6';

const routes = [
  {
    id: 0,
    route: '/',
    title: 'Dashboard',
    icon: <LayoutDashboard className={iconStyle} />,
  },
  {
    id: 1,
    route: '/playground',
    title: 'Playground',
    icon: <ScatterChart className={iconStyle} />,
  },
  {
    id: 2,
    route: '/documentation',
    title: 'Docs',
    icon: <FileText className={iconStyle} />,
  },
  {
    id: 3,
    route: '/statistics',
    title: 'Statistics',
    icon: <Rocket className={iconStyle} />,
  },
];

const Navbar = () => {
  const [selected, setSelected] = React.useState(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <nav className="flex items-center justify-between border-b dark:border-zinc-800 w-screen px-4 py-2">
      <div className="flex items-center gap-4">
        <img width={25} height={25} src={logo} alt="logo"></img>
        <h1 className="text-2xl">ABCD Dashboard</h1>
      </div>
      <div className="flex gap-8">
        {routes.map((route) => (
          <Link key={route.id} to={route.route}>
            <div
              className={cn(
                'h-full text-zinc-400 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                selected === route.id && 'text-zinc-900 dark:text-zinc-100',
              )}
              onClick={() => handleClick(route.id)}
            >
              <h2 className="text-xl">{route.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
