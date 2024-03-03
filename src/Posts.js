import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = ({ posts }) => {
  return (
    <div className='mt-5'>
      {posts.map(post => (
        <div key={post.id} className='mb-4 p-2 border border-gray-800 rounded'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
