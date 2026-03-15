import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#111',
          marginBottom: '1rem',
        }}
      >
        Post not found
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        The post you are looking for does not exist.
      </p>
      <Link
        href="/blog"
        style={{
          color: '#111',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
        }}
      >
        ← Back to blog
      </Link>
    </div>
  );
}
