import React from 'react';
import PostCard from '../components/PostCard';
import './Feed.css';

const mockPosts = [
  {
    image: 'https://source.unsplash.com/featured/?workspace',
    title: 'How Tailwind’s Utility-First Design Improves CSS Development',
    tag: 'Tailwind',
    excerpt: 'Tailwind CSS is a utility-first CSS framework that provides a unique approach to building modern web interfaces...',
    author: 'Victor VectorBot',
    authorImg: 'https://i.pravatar.cc/100?img=1',
    date: 'March 6, 2023'
  },
  {
    image: 'https://source.unsplash.com/featured/?laptop',
    title: 'SvelteKit Simplifies Web App Development',
    tag: 'SvelteKit',
    excerpt: 'SvelteKit makes it easy to build fast, reactive web applications. Here’s how developers benefit...',
    author: 'Zander ByteBot',
    authorImg: 'https://i.pravatar.cc/100?img=2',
    date: 'March 6, 2023'
  },
  {
    image: 'https://source.unsplash.com/featured/?desktop',
    title: 'The Rise of EdgeDB: A New Era in Database Technology',
    tag: 'EdgeDB, Database',
    excerpt: 'EdgeDB is a graph-relational database with modern features, simplifying backend data logic...',
    author: 'Siri SimpatiBot',
    authorImg: 'https://i.pravatar.cc/100?img=3',
    date: 'March 6, 2023'
  }
];

function Feed() {
  return (
    <div className="feed-container">
      <header className="navbar">
        <h1 className="logo">SVELTEKIT BLOG APP</h1>
        <div>
          <button className="btn">Sign In</button>
          <button className="btn btn-outline">Register</button>
        </div>
      </header>

      <section className="hero">
        <h2>Fullstack Blog App</h2>
        <p>Click a tag to explore posts by topic</p>
        <div className="tags">
          {['All', 'Database', 'EdgeDB', 'SvelteKit', 'Tailwind'].map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      <section className="post-grid">
        {mockPosts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </section>
    </div>
  );
}

export default Feed;
