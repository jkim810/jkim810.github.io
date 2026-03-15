import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata = {
  title: 'Blog',
  description: 'Writing on spatial biology, machine learning, and computational research.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}
    >
      <SectionHeading label="BLOG" title="Blog" />

      <div style={{ marginTop: '2rem' }}>
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: '130px 1fr',
              gap: 0,
              marginBottom: '2.5rem',
            }}
          >
            {/* Date in margin */}
            <div
              style={{
                textAlign: 'right',
                paddingRight: '16px',
                color: '#9ca3af',
                fontSize: '0.875rem',
                paddingTop: '2px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {post.date}
            </div>

            {/* Post content */}
            <div
              style={{
                borderLeft: '3px solid #2563eb',
                paddingLeft: '16px',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#111',
                  margin: '0 0 0.25rem 0',
                }}
              >
                {post.title}
              </p>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  margin: '0 0 0.5rem 0',
                }}
              >
                {post.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.5rem' }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      fontSize: '0.75rem',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontSize: '0.875rem',
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Read →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
