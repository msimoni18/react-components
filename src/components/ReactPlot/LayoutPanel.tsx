import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { Slider } from '../ui/slider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const LayoutPanel = () => {
  return (
    <div className="w-full flex flex-col gap-2 p-4 overflow-scroll">
      <h1 className="font-bold">Layout</h1>
      <Separator />
      <div className="flex flex-col gap-2 px-2 border-l border-dotted border-muted-foreground mb-6">
        <h2 className="font-semibold">Labels</h2>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Title</Label>
          <Input
            type="text"
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">X-Axis</Label>
          <Input
            type="text"
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Y-Axis</Label>
          <Input
            type="text"
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 border-l border-dotted border-muted-foreground mb-6">
        <h2 className="font-semibold">Legend</h2>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Show</Label>
          <Checkbox onCheckedChange={(checked) => console.log(checked)} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 border-l border-dotted border-muted-foreground mb-6">
        <h2 className="font-semibold">Gridlines</h2>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Show</Label>
          <Checkbox onCheckedChange={(checked) => console.log(checked)} />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Major linestyle</Label>
          <Select defaultValue={'solid'}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>solid</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="solid">solid</SelectItem>
                <SelectItem value="dotted">dotted</SelectItem>
                <SelectItem value="dash">dash</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Major line color</Label>
          <Select defaultValue={'solid'}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>solid</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="solid">solid</SelectItem>
                <SelectItem value="dotted">dotted</SelectItem>
                <SelectItem value="dash">dash</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Minor linestyle</Label>
          <Select defaultValue={'solid'}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>dotted</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="solid">solid</SelectItem>
                <SelectItem value="dotted">dotted</SelectItem>
                <SelectItem value="dash">dash</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Minor line color</Label>
          <Select defaultValue={'solid'}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>solid</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="solid">solid</SelectItem>
                <SelectItem value="dotted">dotted</SelectItem>
                <SelectItem value="dash">dash</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 border-l border-dotted border-muted-foreground mb-6">
        <h2 className="font-semibold">Chart</h2>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Height</Label>
          <Slider defaultValue={[500]} min={200} max={600} />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Font size</Label>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-2 border-l border-dotted border-muted-foreground mb-6">
        <h2 className="font-semibold">Margin</h2>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Top</Label>
          <Slider defaultValue={[80]} min={0} max={120} />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Bottom</Label>
          <Slider defaultValue={[80]} min={0} max={120} />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Left</Label>
          <Slider defaultValue={[80]} min={0} max={120} />
        </div>
        <div className="flex items-center gap-2">
          <Label className="basis-1/4">Right</Label>
          <Slider defaultValue={[80]} min={0} max={120} />
        </div>
      </div>
    </div>
  );
};

export default LayoutPanel;
