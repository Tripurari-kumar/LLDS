const useFunction = () => {
  const addComment = (tree, commentID, newComment) => {
    if (typeof tree == 'object' && !Array.isArray(tree)) {
      if (tree.id === commentID) {
        tree.replies.unshift(newComment);
        return tree;
      }
      return {
        ...tree,
        replies: tree.replies.map((ele) =>
          addComment(ele, commentID, newComment)
        ),
      };
    }
    return tree.map((ele) => {
      return addComment(ele, commentID, newComment);
    });
  };
  return { addComment };
};

export default useFunction;
