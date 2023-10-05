import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Tooltip } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

const Series = () => {
  return (
    <div className="flex flex-col gap-2 p-2 border-l border-dotted border-slate-500 mb-6">
      <Label>Chart Type</Label>
      <RadioGroup defaultValue="scatter" orientation="horizontal">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="scatter" id="scatter-series" />
          <Label htmlFor="scatter-series">Scatter</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bar" id="bar-series" />
          <Label htmlFor="bar-series">Bar</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="contour" id="contour-series" />
          <Label htmlFor="contour-series">Contour</Label>
        </div>
      </RadioGroup>
      <div className="flex gap-2 w-full justify-end">
        <Tooltip title="Delete series" placement="bottom">
          <Button variant="ghost" className="w-12 h-12 p-1 rounded-full">
            <Trash2 />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Series;
