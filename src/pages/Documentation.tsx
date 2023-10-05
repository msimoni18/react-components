import React from 'react';
import TreeView from '@/components/TreeView';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { filterTreeByValue } from '@/lib/utils';
import pdf from '/sample.pdf';

const treeContent = {
  name: 'Table of Contents',
  type: 'root',
  children: [
    { name: 'File 1', type: 'file' },
    {
      name: 'Folder 1',
      type: 'folder',
      children: [
        { name: 'File 1.1', type: 'file' },
        { name: 'File 1.2', type: 'file' },
      ],
    },
    {
      name: 'Folder 2',
      type: 'folder',
      children: [
        { name: 'File 2.1', type: 'file' },
        { name: 'File 2.2', type: 'file' },
      ],
    },
    {
      name: 'Folder 3',
      type: 'folder',
      children: [
        { name: 'File 3.1', type: 'file' },
        {
          name: 'Folder 3.2',
          type: 'folder',
          children: [
            { name: 'File 3.2.1', type: 'file' },
            { name: 'File 3.2.2', type: 'file' },
            {
              name: 'Folder 3.2.3',
              type: 'folder',
              children: [
                { name: 'File 3.2.3.1', type: 'file' },
                { name: 'File 3.2.3.2', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Folder 4',
      type: 'folder',
      children: [
        { name: 'File 4.1', type: 'file' },
        {
          name: 'Folder 4.2',
          type: 'folder',
          children: [
            { name: 'File 4.2.1', type: 'file' },
            {
              name: 'Folder 4.2.3',
              type: 'folder',
              children: [
                { name: 'File 4.2.3.1', type: 'file' },
                { name: 'File 4.2.3.2', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Folder 5',
      type: 'folder',
      children: [
        { name: 'File 5.1', type: 'file' },
        {
          name: 'Folder 5.2',
          type: 'folder',
          children: [
            { name: 'File 5.2.1', type: 'file' },
            {
              name: 'Folder 5.2.3',
              type: 'folder',
              children: [
                { name: 'File 5.2.3.1', type: 'file' },
                { name: 'File 5.2.3.2', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Folder 6',
      type: 'folder',
      children: [
        { name: 'File 6.1', type: 'file' },
        {
          name: 'Folder 6.2',
          type: 'folder',
          children: [
            { name: 'File 6.2.1', type: 'file' },
            {
              name: 'Folder 6.2.3',
              type: 'folder',
              children: [
                { name: 'File 6.2.3.1', type: 'file' },
                { name: 'File 6.2.3.2', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const Documentation = () => {
  const [tree, setTree] = React.useState(treeContent);
  const [searchField, setSearchField] = React.useState('');
  const [selectedDocument, setSelectedDocument] = React.useState('');

  React.useEffect(() => {
    console.log(selectedDocument);
  }, [selectedDocument]);

  React.useEffect(() => {
    if (searchField) {
      const newTree = filterTreeByValue(treeContent, searchField);
      setTree(newTree);
    } else {
      setTree(treeContent);
    }
  }, [searchField]);

  return (
    <div className="flex h-full">
      <div className="w-1/4 p-2 pb-6 border-r dark:border-r-zinc-800 no-scrollbar overflow-scroll">
        <Label htmlFor="search-tree">Search</Label>
        <Input
          type="text"
          id="search-tree"
          placeholder="Search"
          className="mb-4"
          value={searchField}
          onChange={(event) => setSearchField(event.target.value)}
        />
        <TreeView tree={tree} setSelectedDocument={setSelectedDocument} />
      </div>
      <div className="w-3/4">
        <iframe width="100%" height="100%" src={pdf} />
      </div>
    </div>
  );
};

export default Documentation;
