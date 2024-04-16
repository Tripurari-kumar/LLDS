export const onFileExpand = (tree, id, btnForce) => {
  if (typeof tree === 'object' && !Array.isArray(tree)) {
    if (tree.id === id) {
      return {
        ...tree,
        isExpanded: btnForce ? btnForce : !tree.isExpanded,
      };
    }
    if (tree.isFolder) {
      return {
        ...tree,
        files: tree.files.map((fileData) =>
          onFileExpand(fileData, id, btnForce)
        ),
      };
    }
    return tree;
  }

  return tree.map((fileData) => onFileExpand(fileData, id, btnForce));
};

export const onFileAdd = (tree, fileObj, id) => {
  if (typeof tree === 'object' && !Array.isArray(tree)) {
    if (tree.id === id) {
      const files = tree.files;
      files.push(fileObj);
      return {
        ...tree,
        files: files,
      };
    }
    if (tree.isFolder) {
      return {
        ...tree,
        files: tree.files.map((fileData) => onFileAdd(fileData, fileObj, id)),
      };
    }
    return tree;
  }

  return tree.map((fileData) => onFileAdd(fileData, fileObj, id));
};
