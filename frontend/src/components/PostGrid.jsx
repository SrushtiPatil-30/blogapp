import PostCard from './PostCard';
import './PostGrid.css';

const PostGrid = ({ posts }) => {
  return (
    <div className="post-grid">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
