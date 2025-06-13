import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <img src="/assets/bg.jpg" style={{ width: '100%', borderRadius: '20px' }} alt="cover" />
      <h2 style={{ marginTop: '20px' }}>Color in UI Design: A (Practical) Framework</h2>
      <p>👤 Christina • ⏱ 10 min</p>
      <p style={{ marginTop: '16px', lineHeight: '1.6' }}>
        Progressively e-enable sustainable outsourcing rather than prospective mindshare.
        Rapidiously reconceptualize magnetic deliverables rather than market positioning testing procedures.
        Quickly harness backward-compatible leadership skills vis-a-vis virtual markets.
        <br /><br />
        Synergistically leverage existing distributed leadership skills with web-enabled academic items.
      </p>
    </div>
  );
};

export default BlogDetail;
