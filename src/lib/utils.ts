import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Node = {
  name: string;
  type: 'root' | 'file' | 'folder';
  children?: Node[];
};

// Find matching values in a tree structure based
// on an input value and return the names in an array
export function findNamesMatchingValue(tree: Node, inputValue: string) {
  const matchingNames: string[] = [];

  function search(node: Node) {
    if (node.name.toLowerCase().includes(inputValue.toLowerCase())) {
      matchingNames.push(node.name);
    }

    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        search(child);
      }
    }
  }

  search(tree);
  return matchingNames;
}

// Filter tree structure based on input value and return
// a new tree structure
export function filterTreeByValue(tree: Node, inputValue: string) {
  function filter(node: Node): boolean {
    if (node.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return true;
    }

    if (node.children && node.children.length > 0) {
      node.children = node.children.filter(filter);
      return node.children.length > 0;
    }

    return false;
  }

  const filteredTree = JSON.parse(JSON.stringify(tree)); // Create a deep clone
  filteredTree.children = filteredTree.children.filter(filter);
  return filteredTree;
}

// Get all node names in tree structure and return
// a list of objects containining the name of the
// node and what level it is
export function getAllNodeNames(node: Node, level = 0) {
  // Add level so that levels 0 and 1 and be removed
  // from list. This way they can be defaulted to an
  // open state in the tree view.

  if (!node || !node.name) {
    return [];
  }

  let names = [{ name: node.name, level: level }];

  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      names = names.concat(getAllNodeNames(child, level + 1));
    }
  }

  return names;
}
