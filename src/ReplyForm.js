import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ threadId, onReplyPosted }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/posts/${threadId}/replies`, { content })
          .then(response => {
                if (onReplyPosted) onReplyPosted(response.data);
                setContent('');
            })
          .catch(error => {
                console.error('Error posting reply', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder='input your reply here'
                className='border border-gray-800 rounded'
            />
            <button
                type='submit'
                className='hover:bg-gray-500 hover:text-white font-bold border border-gray-800 py-2 px-4 rounded'
                disabled={!content.trim()}
                >
                Reply
            </button>
        </form>
    );
};

export default ReplyForm;