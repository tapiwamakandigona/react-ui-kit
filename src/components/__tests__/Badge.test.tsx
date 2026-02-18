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
    expect(badge.style.color).toContain('22c55e');
  });

  it('applies danger variant', () => {
    const { container } = render(<Badge variant="danger">Error</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.color).toContain('ef4444');
  });
});
