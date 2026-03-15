import { render, screen } from '@testing-library/react';
import BlogPage from '@/app/blog/page';

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
    {
      slug: 'second-post',
      title: 'Second Post',
      date: '2026-03-10',
      tags: ['research'],
      description: 'A second post.',
    },
  ]),
}));

// Mock SectionHeading
jest.mock('@/components/SectionHeading', () => ({
  SectionHeading: ({ label, title }: { label: string; title: string }) => (
    <div>
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  ),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe('BlogPage', () => {
  it('renders post titles', () => {
    render(<BlogPage />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('renders links to post pages', () => {
    render(<BlogPage />);
    // The "Read →" links point to the slugs
    const readLinks = screen.getAllByText('Read →');
    expect(readLinks.length).toBeGreaterThan(0);
    const helloLink = readLinks.find((el) => el.closest('a')?.getAttribute('href') === '/blog/hello-world');
    expect(helloLink).toBeTruthy();
    const secondLink = readLinks.find((el) => el.closest('a')?.getAttribute('href') === '/blog/second-post');
    expect(secondLink).toBeTruthy();
  });

  it('renders tags', () => {
    render(<BlogPage />);
    expect(screen.getByText('meta')).toBeInTheDocument();
    expect(screen.getByText('intro')).toBeInTheDocument();
    expect(screen.getByText('research')).toBeInTheDocument();
  });
});
