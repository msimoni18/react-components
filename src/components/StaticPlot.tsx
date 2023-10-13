import React from 'react';
import Plot from 'react-plotly.js';
import { useResizeDetector } from 'react-resize-detector';

import { useColor } from '@/lib/useColor';

type Props = {
  height?: number;
};

const StaticPlot = ({ height = 400 }: Props) => {
  const { foreground, background } = useColor();

  const { width, ref } = useResizeDetector();

  return (
    <div
      className="border flex grow items-center rounded-lg overflow-hidden"
      style={{ height: height }}
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
            color: foreground,
          },
          paper_bgcolor: background,
          plot_bgcolor: background,
        }}
        config={{
          displaylogo: false,
          scrollZoom: false,
          editable: false,
          staticPlot: false,
          displayModeBar: false,
          modeBarButtonsToRemove: [
            // 'toImage',
            'zoom2d',
            'pan2d',
            'select2d',
            'lasso2d',
            'zoomIn2d',
            'zoomOut2d',
            'autoScale2d',
            'resetScale2d',
          ],
        }}
      />
    </div>
  );
};

export default StaticPlot;
