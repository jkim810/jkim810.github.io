import { render, screen } from '@testing-library/react';
import Figure from '@/components/mdx/Figure';

// Mock next/image
jest.mock('next/image', () => {
  return function MockImage({ src, alt }: { src: string; alt: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  };
});

describe('Figure', () => {
  it('renders figcaption with caption text', () => {
    render(<Figure src="/images/test.png" caption="A test figure" />);
    expect(screen.getByText('A test figure')).toBeInTheDocument();
  });

  it('renders an img element', () => {
    render(<Figure src="/images/test.png" caption="A test figure" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('uses caption as alt when alt not provided', () => {
    render(<Figure src="/images/test.png" caption="A test figure" />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('alt')).toBe('A test figure');
  });

  it('uses provided alt when given', () => {
    render(<Figure src="/images/test.png" caption="Caption" alt="Custom alt" />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('alt')).toBe('Custom alt');
  });
});
