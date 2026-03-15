import { getAllPosts, getPostBySlug } from '@/lib/posts';

describe('getAllPosts', () => {
  it('returns an array', () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  it('has at least 1 element', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThanOrEqual(1);
  });

  it('each element has required fields', () => {
    const posts = getAllPosts();
    posts.forEach((post) => {
      expect(typeof post.slug).toBe('string');
      expect(typeof post.title).toBe('string');
      expect(typeof post.date).toBe('string');
      expect(Array.isArray(post.tags)).toBe(true);
      expect(typeof post.description).toBe('string');
    });
  });

  it('is sorted by date descending', () => {
    const posts = getAllPosts();
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });
});

describe('getPostBySlug', () => {
  it('returns an object for hello-world', () => {
    const post = getPostBySlug('hello-world');
    expect(post).not.toBeNull();
  });

  it('has correct title', () => {
    const post = getPostBySlug('hello-world');
    expect(post?.frontmatter.title).toBe('Hello World');
  });

  it('has correct date', () => {
    const post = getPostBySlug('hello-world');
    expect(post?.frontmatter.date).toBe('2026-03-14');
  });

  it('has non-empty content', () => {
    const post = getPostBySlug('hello-world');
    expect(typeof post?.content).toBe('string');
    expect((post?.content ?? '').length).toBeGreaterThan(0);
  });

  it('returns null for nonexistent slug', () => {
    const post = getPostBySlug('nonexistent-slug');
    expect(post).toBeNull();
  });
});
