import { render, screen } from '@testing-library/react';
import NotebookBlock from '@/components/mdx/NotebookBlock';

describe('NotebookBlock', () => {
  it('renders the code text', () => {
    render(<NotebookBlock code="print('hello')" output="hello" />);
    expect(screen.getByText("print('hello')")).toBeInTheDocument();
  });

  it('renders the output text', () => {
    render(<NotebookBlock code="print('hello')" output="hello" />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('renders IN label', () => {
    render(<NotebookBlock code="print('hello')" output="hello" />);
    expect(screen.getByText('IN')).toBeInTheDocument();
  });

  it('renders OUT label', () => {
    render(<NotebookBlock code="print('hello')" output="hello" />);
    expect(screen.getByText('OUT')).toBeInTheDocument();
  });
});
