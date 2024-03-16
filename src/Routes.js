import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Replies from './Replies';
import PostForm from './PostForm';
import axios from 'axios';

const RoutesComponent = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    axios.get(`https://threads-jsx-api-dd13d6652d76.herokuapp.com/posts`)
    .then(response => {
        setPosts(response.data);
    })
    .catch(error => {
         console.error('Error fetching posts', error);
     });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleNewPost = () => {
    fetchPost();
  };

  return (
    <Routes>
      <Route path="/" element={
        <>
          <PostForm onPostCreated={handleNewPost} />
          <Posts posts={posts} />
        </>
      } />
      <Route path="/threads/:threadId" element={
        <Replies />
      } />
    </Routes>
  );
};

export default RoutesComponent;
