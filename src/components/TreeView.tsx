import React from 'react';
import { Folder, FolderOpen, FileText } from 'lucide-react';
import { cn, Node } from '@/lib/utils';
import { getAllNodeNames } from '@/lib/utils';
import { Button } from './ui/button';

type Props = {
  tree: Node;
  setSelectedDocument: React.Dispatch<React.SetStateAction<string>>;
};

export default function TreeView({ tree, setSelectedDocument }: Props) {
  const allNodeNames = getAllNodeNames(tree);

  // Remove any nodes where the level is 0 or 1 so
  // the entire tree doesn't have an initially collapsed
  // state
  const [collapsedNodes] = React.useState(
    allNodeNames
      .filter((node) => {
        if (node.level > 0) {
          return node.name;
        }
      })
      .map((node) => node.name),
  );

  const [collapsedItems, setCollapsedItems] = React.useState(collapsedNodes);

  function toggleCollapse(name: string) {
    if (collapsedItems.includes(name)) {
      setCollapsedItems(collapsedItems.filter((item) => item !== name));
    } else {
      setCollapsedItems([...collapsedItems, name]);
    }
  }

  const handleShow = () => {
    setCollapsedItems([]);
  };

  const handleHide = () => {
    setCollapsedItems(collapsedNodes);
  };

  function buildNestedList(node: Node) {
    if (!node || !node.name) {
      return null;
    }

    const isCollapsed = collapsedItems.includes(node.name);

    const handleClick = (name: string) => {
      toggleCollapse(name);
      setSelectedDocument(name);
    };

    return (
      <ul key={node.name}>
        <li
          className="flex items-center gap-2"
          onClick={() => handleClick(node.name)}
        >
          {node.type === 'folder' && isCollapsed && <Folder />}
          {node.type === 'folder' && !isCollapsed && <FolderOpen />}
          {node.type === 'file' && <FileText />}
          <p className="text-lg">{node.name}</p>
        </li>
        {node.children && node.children.length > 0 && !isCollapsed && (
          <ul
            className={cn(
              'border-l border-dotted border-foreground',
              isCollapsed ? 'hidden' : 'block',
            )}
          >
            {node.children.map((child) => (
              <li key={child.name} className="pl-4 pt-2 cursor-pointer">
                {buildNestedList(child)}
              </li>
            ))}
          </ul>
        )}
      </ul>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button className="grow" variant="outline" onClick={handleShow}>
          Show All
        </Button>
        <Button className="grow" variant="outline" onClick={handleHide}>
          Hide All
        </Button>
      </div>
      {buildNestedList(tree)}
    </div>
  );
}
