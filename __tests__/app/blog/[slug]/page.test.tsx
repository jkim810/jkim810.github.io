import { render, screen } from '@testing-library/react';
import { generateStaticParams } from '@/app/blog/[slug]/page';

// Mock lib/posts
const mockGetPostBySlug = jest.fn();
const mockGetAllPosts = jest.fn(() => [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-03-14',
    tags: ['meta', 'intro'],
    description: 'The first post on this site.',
  },
]);

jest.mock('@/lib/posts', () => ({
  getAllPosts: () => mockGetAllPosts(),
  getPostBySlug: (slug: string) => mockGetPostBySlug(slug),
}));

// Mock next-mdx-remote/rsc
jest.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ source }: { source: string }) => <div data-testid="mdx-content">{source}</div>,
}));

// Mock next/navigation
const mockNotFound = jest.fn(() => { throw new Error('NEXT_NOT_FOUND'); });
jest.mock('next/navigation', () => ({
  notFound: () => mockNotFound(),
}));

// Mock lib/mdxComponents
jest.mock('@/lib/mdxComponents', () => ({
  mdxComponents: {},
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe('generateStaticParams', () => {
  it('returns array with hello-world slug', async () => {
    const params = await generateStaticParams();
    expect(params).toContainEqual({ slug: 'hello-world' });
  });
});

describe('BlogPostPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetAllPosts.mockReturnValue([
      {
        slug: 'hello-world',
        title: 'Hello World',
        date: '2026-03-14',
        tags: ['meta', 'intro'],
        description: 'The first post on this site.',
      },
    ]);
  });

  it('renders post title for valid slug', async () => {
    mockGetPostBySlug.mockReturnValue({
      frontmatter: {
        title: 'Hello World',
        date: '2026-03-14',
        tags: ['meta', 'intro'],
        description: 'The first post on this site.',
      },
      content: '# Hello World\n\nWelcome.',
    });

    const BlogPostPage = (await import('@/app/blog/[slug]/page')).default;
    const result = await BlogPostPage({ params: Promise.resolve({ slug: 'hello-world' }) });
    render(result as React.ReactElement);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('calls notFound for invalid slug', async () => {
    mockGetPostBySlug.mockReturnValue(null);

    const BlogPostPage = (await import('@/app/blog/[slug]/page')).default;
    await expect(
      BlogPostPage({ params: Promise.resolve({ slug: 'bad-slug' }) })
    ).rejects.toThrow('NEXT_NOT_FOUND');
    expect(mockNotFound).toHaveBeenCalled();
  });
});
