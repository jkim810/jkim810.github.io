import { generateMetadata } from '@/app/blog/[slug]/page';

// Mock lib/posts
jest.mock('@/lib/posts', () => ({
  getAllPosts: jest.fn(() => [
    {
      slug: 'hello-world',
      title: 'Hello World',
      date: '2026-03-14',
      tags: ['meta', 'intro'],
      description: 'The first post on this site.',
    },
  ]),
  getPostBySlug: jest.fn((slug: string) => {
    if (slug === 'hello-world') {
      return {
        frontmatter: {
          title: 'Hello World',
          date: '2026-03-14',
          tags: ['meta', 'intro'],
          description: 'The first post on this site.',
        },
        content: '# Hello World\n\nWelcome to the blog.',
      };
    }
    return null;
  }),
}));

describe('generateMetadata', () => {
  it('returns title and description for valid slug', async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) });
    expect(meta).toMatchObject({
      title: 'Hello World',
      description: 'The first post on this site.',
    });
  });

  it('returns empty object for invalid slug', async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ slug: 'bad-slug' }) });
    expect(meta).toEqual({});
  });
});
