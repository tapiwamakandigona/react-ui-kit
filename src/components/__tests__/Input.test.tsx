import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeTruthy();
  });

  it('shows error message', () => {
    render(<Input error="Required field" />);
    expect(screen.getByText('Required field')).toBeTruthy();
  });

  it('shows hint when no error', () => {
    render(<Input hint="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeTruthy();
  });

  it('hides hint when error present', () => {
    render(<Input hint="Enter your email" error="Required" />);
    expect(screen.queryByText('Enter your email')).toBeNull();
  });

  it('handles onChange', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
