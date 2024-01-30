import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { ModeToggle } from './mode-toggle';
import { LayoutDashboard, ScatterChart, FileText } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 border-b bg-background px-4 h-12 w-full z-50">
      <div className="flex gap-10 items-center">
        <Label className="text-xl">My Dashboard</Label>
        <div className="flex gap-4 items-center">
          <NavLink to="/">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={cn(
                  'text-md px-1 rounded-none hover:bg-background hover:text-primary hover:border-b-primary hover:border-b-2 flex gap-2 items-center',
                  isActive ? 'text-primary border-b-primary border-b-2' : '',
                )}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            )}
          </NavLink>
          <NavLink to="docs">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={cn(
                  'text-md px-1 rounded-none hover:bg-background hover:text-primary hover:border-b-primary hover:border-b-2 flex gap-2 items-center',
                  isActive ? 'text-primary border-b-primary border-b-2' : '',
                )}
              >
                <FileText className="w-4 h-4" />
                Documents
              </Button>
            )}
          </NavLink>
          <NavLink to="statistics">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={cn(
                  'text-md px-1 rounded-none hover:bg-background hover:text-primary hover:border-b-primary hover:border-b-2 flex gap-2 items-center',
                  isActive ? 'text-primary border-b-primary border-b-2' : '',
                )}
              >
                <ScatterChart className="w-4 h-4" />
                Statistics
              </Button>
            )}
          </NavLink>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};
