import { render, screen } from '@testing-library/react';
import NotFound from '@/app/blog/[slug]/not-found';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe('NotFound', () => {
  it('renders Post not found heading', () => {
    render(<NotFound />);
    expect(screen.getByText('Post not found')).toBeInTheDocument();
  });

  it('renders a link back to /blog', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /back to blog/i });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/blog');
  });
});
