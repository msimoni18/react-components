import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import { Tooltip } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Columns, Filter, Download } from 'lucide-react';

import ColumnPanel from './ColumnPanel';
import FilterPanel from './FilterPanel';
import { cn } from '@/lib/utils';
import { useTheme } from '@/theme/theme-provider';
import type { AgGridTable, Column } from './types';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './AgGridTable.css';

const AgGridTable = ({ rows, columns }: AgGridTable) => {
  const { theme } = useTheme();

  const [parentColumns, setParentColumns] = React.useState(columns);

  const getCheckedColumns = (cols: Column[]) => {
    const checkedColumns = cols.filter((col) => {
      if (col.checked) {
        return col;
      }
    });

    return checkedColumns.map((col) => ({ field: col.name }));
  };

  const gridRef = React.useRef();
  const [rowData] = React.useState(rows);

  const [columnDefs, setColumnDefs] = React.useState(
    getCheckedColumns(parentColumns),
  );

  React.useEffect(() => {
    setColumnDefs(getCheckedColumns(parentColumns));
  }, [parentColumns]);

  const defaultColDef = React.useMemo(
    () => ({
      flex: 1,
      minWidth: 100,
      resizable: true,
      sortable: true,
      filter: true,
      editable: false,
    }),
    [],
  );
  const [openColumnPanel, setOpenColumnPanel] = React.useState(false);
  const [openFilterPanel, setOpenFilterPanel] = React.useState(false);

  const handlePanelClick = (name: 'columns' | 'filter') => {
    if (name === 'columns') {
      setOpenColumnPanel(!openColumnPanel);
      setOpenFilterPanel(false);
    }
    if (name === 'filter') {
      setOpenColumnPanel(false);
      setOpenFilterPanel(!openFilterPanel);
    }
  };

  // Reset order of list whenever columns are re-ordered in
  // table with drag and drop
  const handleDragColumnChange = (event) => {
    const newOrder = event.columnApi
      .getAllGridColumns()
      .map((row) => row.colId);

    // Add checked list items first
    const newItems = [] as Column[];
    newOrder.forEach((col: string) => {
      const checkedStatus = parentColumns.filter((item) => {
        if (col === item.name) {
          return item;
        }
      });
      newItems.push(checkedStatus[0]);
    });

    // Add unchecked list items back into list
    parentColumns.forEach((item) => {
      if (!item.checked) {
        newItems.push(item);
      }
    });

    setParentColumns(newItems);
  };

  const handleExportClick = React.useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div className="flex h-[400px] w-full border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-zinc-950">
      <div
        className={cn(
          'w-full',
          theme === 'light' ? 'ag-theme-alpine' : 'ag-theme-alpine-dark',
        )}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs as object[]}
          defaultColDef={defaultColDef}
          onDragStopped={handleDragColumnChange}
          suppressCsvExport={false}
        />
      </div>
      <div
        className={cn('w-1/2', {
          flex: openColumnPanel === true,
          hidden: openColumnPanel === false,
        })}
      >
        <ColumnPanel columns={parentColumns} setColumns={setParentColumns} />
      </div>
      <div
        className={cn('w-1/2', {
          flex: openFilterPanel === true,
          hidden: openFilterPanel === false,
        })}
      >
        <FilterPanel columns={parentColumns} />
      </div>
      <div className="flex flex-col grow-0 gap-2 border-l dark:border-l-zinc-800 items-center pt-2 h-full">
        <Tooltip title="Columns" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => handlePanelClick('columns')}
          >
            <Columns />
          </Button>
        </Tooltip>
        <Tooltip title="Filter" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={() => handlePanelClick('filter')}
          >
            <Filter />
          </Button>
        </Tooltip>
        <Tooltip title="Export" placement="left">
          <Button
            variant="ghost"
            className="w-12 h-12 p-1 rounded-full"
            onClick={handleExportClick}
          >
            <Download />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default AgGridTable;
