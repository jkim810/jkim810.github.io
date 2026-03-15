import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { mdxComponents } from '@/lib/mdxComponents';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}
    >
      {/* Post header */}
      <header style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.15,
            margin: '0 0 0.5rem 0',
          }}
        >
          {post.frontmatter.title}
        </h1>

        <div
          style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            marginBottom: '0.75rem',
          }}
        >
          {post.frontmatter.date}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
          {post.frontmatter.tags.map((tag: string) => (
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
      </header>

      {/* MDX content */}
      <article className="prose prose-gray max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </div>
  );
}
