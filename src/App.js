// App.js
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import PostForm from './PostForm';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:8000/posts')
    .then(response => {
        setPosts(response.data);
      })
    .catch(error => {
        console.error('Error fetching posts', error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostForm onPostCreated={fetchPosts} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
