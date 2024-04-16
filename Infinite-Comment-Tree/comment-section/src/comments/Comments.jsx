import { useState } from 'react';
import './Comments.css';

const Comments = ({ comments, handleAddComments }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentsBody, setCommentsBody] = useState('');

  const handleAdd = () => {
    let newComment = {
      id: Date.now(),
      text: commentsBody,
      replies: [],
    };
    handleAddComments(comments.id, newComment);
    setShowInput(false);
  };

  return (
    <div>
      <div className='coments-container'>
        <h3> {comments.text}</h3>
        {showInput && (
          <input
            type='text'
            autoFocus
            onChange={(e) => {
              setCommentsBody(e.target.value);
            }}
          />
        )}
        <div>
          {showInput ? (
            <button onClick={handleAdd}>Add</button>
          ) : (
            <button
              onClick={() => {
                setShowInput(true);
              }}
            >
              Reply
            </button>
          )}
        </div>
      </div>
      <div style={{ paddingLeft: '20px' }}>
        {comments?.replies?.map((comments) => (
          <Comments
            key={comments.id}
            comments={comments}
            handleAddComments={handleAddComments}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
