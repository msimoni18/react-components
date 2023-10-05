import { Plus, Send } from 'lucide-react';

import { Tooltip } from '../ui/tooltip';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Series from './Series';

const DataPanel = () => {
  return (
    <div className="w-full flex flex-col gap-2 p-4 overflow-scroll">
      <h1 className="font-bold">Data</h1>
      <Separator />
      <Series />
      <div className="flex gap-2 w-full">
        <Tooltip title="Add new series" placement="bottom">
          <Button variant="ghost" className="w-12 h-12 p-1 rounded-full">
            <Plus />
          </Button>
        </Tooltip>
        <Tooltip title="Update plot" placement="bottom">
          <Button variant="ghost" className="w-12 h-12 p-1 rounded-full">
            <Send />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default DataPanel;
