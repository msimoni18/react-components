import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Grip } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ColumnPanelProps, Column } from './types';

const ColumnPanel = ({ columns, setColumns }: ColumnPanelProps) => {
  const [defaultColumns] = React.useState(columns);
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const renderColumns =
    searchText !== ''
      ? columns.filter((column: Column) =>
          column.name.toLowerCase().includes(searchText.toLowerCase()),
        )
      : columns;

  const toggleItem = (name: string) => {
    const newColumns = columns.map((col: Column) =>
      col.name === name ? { ...col, checked: !col.checked } : col,
    );
    setColumns(newColumns);
  };

  const sortByName = () => {
    const newColumns = [...columns];

    newColumns.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    setColumns(newColumns);
  };

  const sortByChecked = () => {
    const newColumns = [...columns];

    newColumns.sort((a, b) => {
      return Number(b.checked) - Number(a.checked);
    });

    setColumns(newColumns);
  };

  const resetSort = () => {
    setColumns(defaultColumns);
  };

  const selectAll = () => {
    const newColumns = columns.map(({ name }) => ({
      name,
      checked: true,
    }));

    setColumns(newColumns);
  };

  const unselectAll = () => {
    const newColumns = columns.map(({ name }) => ({
      name,
      checked: false,
    }));

    setColumns(newColumns);
  };

  // Dragging functionality
  const [isDragging, setIsDragging] = React.useState(false);
  const draggingItem = React.useRef(null) as React.MutableRefObject<
    number | null
  >;
  const dragOverItem = React.useRef(null) as React.MutableRefObject<
    number | null
  >;

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    position: number,
  ) => {
    draggingItem.current = position;
    setIsDragging(true);
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLLIElement>,
    position: number,
  ) => {
    dragOverItem.current = position;
    const colCopy = [...columns];
    const draggingItemContent = colCopy[draggingItem.current];
    colCopy.splice(draggingItem.current, 1);
    colCopy.splice(dragOverItem.current, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setColumns(colCopy);
  };

  const handleDrop = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col gap-2 p-4 overflow-scroll">
      <Label htmlFor="column-search">Search</Label>
      <Input
        type="text"
        id="column-search"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
      />
      <div className="flex gap-2">
        <Button variant="outline" className="grow" onClick={sortByName}>
          Sort by name
        </Button>
        <Button variant="outline" className="grow" onClick={sortByChecked}>
          Sort by checked
        </Button>
        <Button variant="outline" className="grow" onClick={resetSort}>
          Reset
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="grow" onClick={selectAll}>
          Select all
        </Button>
        <Button variant="outline" className="grow" onClick={unselectAll}>
          Unselect all
        </Button>
      </div>
      <ul>
        {renderColumns.map(({ checked, name }: Column, index: number) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <li
              key={index}
              draggable={searchText === '' ? true : false}
              onDragStart={(event) => handleDragStart(event, index)}
              onDragEnter={(event) => handleDragEnter(event, index)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              className={cn(isDragging ? 0.5 : undefined)}
              onClick={() => toggleItem(name)}
            >
              <div className="flex items-center gap-2">
                <Checkbox id={labelId} checked={checked} />
                <Button
                  variant="ghost"
                  className={cn(
                    'w-10 h-10 p-2',
                    searchText === '' ? 'grab' : 'not-allowed',
                  )}
                >
                  <Grip />
                </Button>
                <Label
                  htmlFor={labelId}
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {name}
                </Label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColumnPanel;
