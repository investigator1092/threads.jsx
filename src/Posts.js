import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div className='mt-5'>
      {posts.map(post => (
        <div key={post.id} className='mb-4 p-2 border border-gray-800 rounded'>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/threads/${post.id}`}>View Replies</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
