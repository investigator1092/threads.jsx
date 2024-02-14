import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;