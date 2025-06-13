import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => (
  <div className="post-card">
    <img src={post.image} alt="Post" className="post-image" />
    <div className="post-content">
      <small className="post-tag">{post.tag}</small>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-author">
        <img src={post.authorImg} alt={post.author} />
        <div>
          <strong>{post.author}</strong>
          <p>{post.date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
