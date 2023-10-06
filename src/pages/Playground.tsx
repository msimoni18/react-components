import React from 'react';
import ReactPlot from '@/components/ReactPlot/ReactPlot';
import AgGridTable from '@/components/AgGridTable/AgGridTable';

import { stocks } from '../data/data';
import { defaultStockColumns } from '../data/defaultColumns';

const Playground = () => {
  return (
    <div className="p-10 flex flex-col gap-8">
      <AgGridTable rows={stocks} columns={defaultStockColumns} />
      <ReactPlot />
    </div>
  );
};

export default Playground;
