import { Dispatch, SetStateAction } from 'react';

interface Column {
  checked: boolean;
  name: string;
}

interface ColumnPanelProps {
  columns: Column[];
  setColumns: Dispatch<SetStateAction<Column[]>>;
}
interface FilterPanelProps {
  columns: Column[];
}

interface AgGridTable {
  rows: object[];
  columns: Column[];
}

export type { AgGridTable, Column, ColumnPanelProps, FilterPanelProps };
