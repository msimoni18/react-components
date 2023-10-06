import React from 'react';
import Plot from 'react-plotly.js';
import { useResizeDetector } from 'react-resize-detector';

import { useColor } from '@/lib/useColor';

type Props = {
  height?: number;
};

const StaticPlot = ({ height = 400 }: Props) => {
  const { textColor, bgColor } = useColor();

  const { width, ref } = useResizeDetector();

  return (
    <div
      className="border border-zinc-200 dark:border-zinc-800 flex grow items-center overflow-hidden shadow-lg dark:shadow-zinc-950"
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
            color: textColor,
          },
          paper_bgcolor: bgColor,
          plot_bgcolor: bgColor,
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
