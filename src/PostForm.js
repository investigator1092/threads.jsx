import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/posts', { title, content })
            .then(response => {
                // console.log(response.data);
                setTitle('');
                setContent('');
                onPostCreated();
            })
            .catch(error => {
                console.error('Oops!! There was an error!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5 flex flex-col">
            <h1 className="text-3xl font-bold my-4">New Thread</h1>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border border-gray-800 rounded my-2"
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Content"
                    className="border border-gray-800 rounded p-2 mb-2"
                />
            </div>
            <div className="flex justify-start">
                <button type="submit" className="border border-gray-800 rounded px-3 py-1">Submit</button>
            </div>
        </form>
    );
}

export default PostForm;
