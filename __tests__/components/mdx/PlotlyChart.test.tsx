import { render, screen } from '@testing-library/react';
import PlotlyChart from '@/components/mdx/PlotlyChart';

// Mock next/dynamic
jest.mock('next/dynamic', () => {
  return () => {
    const MockPlot = () => <div data-testid="plotly-chart" />;
    MockPlot.displayName = 'MockPlot';
    return MockPlot;
  };
});

describe('PlotlyChart', () => {
  it('renders without crashing', () => {
    render(<PlotlyChart data={[]} />);
    expect(screen.getByTestId('plotly-chart')).toBeInTheDocument();
  });

  it('renders with data and layout without crashing', () => {
    render(
      <PlotlyChart
        data={[{ x: [1, 2, 3], y: [4, 5, 6], type: 'scatter' }]}
        layout={{ title: 'Test Chart' }}
      />
    );
    expect(screen.getByTestId('plotly-chart')).toBeInTheDocument();
  });
});
