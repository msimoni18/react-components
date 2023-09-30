import React from 'react';
import Plot from 'react-plotly.js';
import { useResizeDetector } from 'react-resize-detector';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Tooltip } from '../ui/tooltip';
import { LineChart, Layout, Save, Trash2 } from 'lucide-react';

import DataPanel from './DataPanel';
import LayoutPanel from './LayoutPanel';
import { useTheme } from '../theme-provider';

const ReactPlot = () => {
  const { theme } = useTheme();
  const themeHexColor = theme === 'dark' ? '#020817' : '#ffffff';
  const themeFontHexColor = theme === 'dark' ? '#ffffff' : '#444';

  const { width, ref } = useResizeDetector();

  const height = 500;

  const [openDataPanel, setOpenDataPanel] = React.useState(false);
  const [openLayoutPanel, setOpenLayoutPanel] = React.useState(false);

  const handlePanelClick = (name: 'data' | 'layout') => {
    if (name === 'data') {
      setOpenDataPanel(!openDataPanel);
      setOpenLayoutPanel(false);
    }
    if (name === 'layout') {
      setOpenDataPanel(false);
      setOpenLayoutPanel(!openLayoutPanel);
    }
  };

  return (
    <div
      className="border w-full max-w-full flex flex-nowrap"
      style={{ height: height }}
    >
      <div
        className="w-full min-w-0 flex items-center overflow-hidden"
        ref={ref}
      >
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
            { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            width: width,
            height: height,
            title: 'A Fancy Plot',
            font: {
              color: themeFontHexColor,
            },
            paper_bgcolor: themeHexColor,
            plot_bgcolor: themeHexColor,
          }}
        />
      </div>
      <div
        className={cn('border-l w-1/2', {
          flex: openDataPanel === true,
          hidden: openDataPanel === false,
        })}
      >
        <DataPanel />
      </div>
      <div
        className={cn('border-l w-1/2', {
          flex: openLayoutPanel === true,
          hidden: openLayoutPanel === false,
        })}
      >
        <LayoutPanel />
      </div>
      <div className="flex flex-col grow-0 gap-2 border-l items-center pt-2 h-full">
        <Tooltip title="Data" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => handlePanelClick('data')}
          >
            <LineChart />
          </Button>
        </Tooltip>
        <Tooltip title="Layout" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => handlePanelClick('layout')}
          >
            <Layout />
          </Button>
        </Tooltip>
        <Tooltip title="Save" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => console.log('Saving plot...')}
          >
            <Save />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => console.log('Deleting plot...')}
          >
            <Trash2 />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ReactPlot;