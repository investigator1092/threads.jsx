import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/posts/', { title, content })
            .then(response => {
                console.log(response.data);
                setTitle('');
                setContent('');
            })
            .catch(error => {
                console.error('There was an error!', error);
                // ここでユーザーにエラーを通知する
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5 text-red-500">
            <div>
                <label className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-red-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="text-red-500"
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <button type="submit" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-red-500">Submit</button>
        </form>
    );
}

export default PostForm;
