import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Replies from './Replies';
import PostForm from './PostForm';
import axios from 'axios';

const RoutesComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
    .then(response => {
        setPosts(response.data);
    })
    .catch(error => {
         console.error('Error fetching posts', error);
     });
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <PostForm onPostCreated={}/>
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
