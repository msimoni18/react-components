import React from 'react';
import Plot from 'react-plotly.js';

const ClickablePlotly = () => {
  const [state] = React.useState({
    data: [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar',
      },
    ],
    layout: {},
    frames: [],
    config: {},
    revision: 0,
  });

  const initialized = () => {
    console.log('onInitialized');
  };

  const afterPlot = () => {
    console.log('onAfterPlot');
  };

  const update = () => {
    console.log('onUpdate');
  };

  const hover = () => {
    // console.log('onHover');
  };

  const click = (data) => {
    console.log('onClick');
    console.log(data);
    console.log(data.points[0].x);
  };

  const relayout = () => {
    console.log('onRelayout');
    console.log(state.layout);
    console.log('x-axis layout:');
    console.log(state.layout.xaxis);
    console.log('y-axis layout:');
    console.log(state.layout.yaxis);
  };

  const unhover = () => {
    // console.log('onUnhover');
  };

  const selected = () => {
    console.log('onSelected');
  };

  const beforeHover = () => {
    console.log('onBeforeHover');
  };

  return (
    <Plot
      data={state.data}
      layout={state.layout}
      frames={state.frames}
      revision={state.revision}
      onInitialized={initialized}
      onUpdate={update}
      onAfterPlot={afterPlot}
      onHover={hover}
      onClick={click}
      onRelayout={relayout}
      onUnhover={unhover}
      onSelected={selected}
      // onBeforeHover={beforeHover}
    />
  );
};

export default ClickablePlotly;
