import { useState, useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import './PostForm.css';

const PostForm = () => {
  const { setPosts } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    const newPost = await res.json();
    setPosts((prev) => [...prev, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Create a New Blog Post</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows="6"
        required
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default PostForm;
