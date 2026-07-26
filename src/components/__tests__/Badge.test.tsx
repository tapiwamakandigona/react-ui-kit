import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeTruthy();
  });

  it('applies success variant', () => {
    const { container } = render(<Badge variant="success">OK</Badge>);
    const badge = container.firstChild as HTMLElement;
    // jsdom normalizes hex colors to rgb() format
    expect(badge.style.color).toBe('rgb(34, 197, 94)');
  });

  it('applies danger variant', () => {
    const { container } = render(<Badge variant="danger">Error</Badge>);
    const badge = container.firstChild as HTMLElement;
    // jsdom normalizes hex colors to rgb() format
    expect(badge.style.color).toBe('rgb(239, 68, 68)');
  });
});
