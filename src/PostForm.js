import React from "react";
import axios from "axios";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/posts/', {title, content})
            .then(response => 
                {console.log(response.data);
                setTitle('');
                setContent('');
                })
                .catch(error => {
                    console.error('Therer was an error!', error);
                });
    };

    return (
        <form onsubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                 />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostForm;