import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

import type { FilterPanelProps, Column } from './types';

const FilterPanel = ({ columns }: FilterPanelProps) => {
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

  return (
    <div className="w-full flex flex-col gap-2 p-4 overflow-scroll">
      <Label htmlFor="column-search">Search</Label>
      <Input
        type="text"
        id="filter-search"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
      />
      <Accordion type="single" collapsible className="w-full">
        {renderColumns.map((column, index) => (
          <AccordionItem key={`${column.name}-${index}`} value={column.name}>
            <AccordionTrigger>{column.name}</AccordionTrigger>
            <AccordionContent>Filter criteria goes here</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterPanel;
