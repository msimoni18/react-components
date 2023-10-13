import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ScatterChart, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './ModeToggle';
import logo from '../assets/python.png';

const iconStyle = 'mr-2 h-4 w-4';

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
];

const Navbar = () => {
  const [selected, setSelected] = React.useState(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <nav className="flex items-center justify-between border-b w-screen px-4 py-2">
      <div className="flex items-center gap-4">
        <img width={25} height={25} src={logo} alt="logo"></img>
        <h1 className="text-2xl">ABCD Dashboard</h1>
      </div>
      <div className="flex gap-8">
        {routes.map((route) => (
          <Link key={route.id} to={route.route}>
            <div
              className={cn(
                'flex items-center h-full text-muted-foreground hover:text-foreground',
                selected === route.id && 'text-foreground',
              )}
              onClick={() => handleClick(route.id)}
            >
              {route.icon}
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
