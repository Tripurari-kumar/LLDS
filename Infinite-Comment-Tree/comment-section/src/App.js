import { useState } from 'react';
import './styles.css';
import Comments from '../src/comments/Comments.jsx';
import { commentData } from './data/dummyData.js';
import useFunction from './useFunction';

export default function App() {
  const [comments, setComments] = useState([]);
  const [mainComment, setMainComment] = useState('');
  const { addComment } = useFunction();
  const handleAddComments = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree);
  };

  const addPostComment = () => {
    const prevTree = comments;
    prevTree.unshift({
      id: Date.now(),
      text: mainComment,
      replies: [],
    });
    setComments(prevTree);
    setMainComment('');
  };

  return (
    <div className='App'>
      <div className='main-input-box'>
        <input
          className='main-comment-input'
          type={'text'}
          value={mainComment}
          onChange={(e) => {
            setMainComment(e.target.value);
          }}
        />
        <button onClick={addPostComment}> comment</button>
      </div>
      {comments.map((ele) => (
        <Comments
          comments={ele}
          key={ele.id}
          handleAddComments={handleAddComments}
        />
      ))}
    </div>
  );
}
