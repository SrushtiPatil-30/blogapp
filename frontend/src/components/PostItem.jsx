import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post._id}`}>Read More</Link>
    </div>
  );
};

export default PostItem;
