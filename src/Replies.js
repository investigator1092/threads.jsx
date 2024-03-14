import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReplyForm from './ReplyForm';

const Replies = () => {
  const { threadId } = useParams();
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${threadId}/replies/`)
      .then(response => {
        setReplies(response.data);
      })
      .catch(error => {
        console.error('Error fetching replies', error);
      });
  }, [threadId]);

  const handleReplyPosted = (newReply) => {
    setReplies([newReply, ...replies]);
  };

  return (
    <div>
      <ReplyForm threadId={threadId} onReplyPosted={handleReplyPosted} />
      {replies.map(reply => (
        <div key={reply.id} className='mb-1 p-2 border border-gray-800 rounded'>{reply.content}</div>
      ))}
    </div>
  );
};

export default Replies;
