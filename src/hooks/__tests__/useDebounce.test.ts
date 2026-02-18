import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 300));
    expect(result.current).toBe('hello');
  });

  it('debounces value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: 'hello' } }
    );
    
    rerender({ value: 'world' });
    expect(result.current).toBe('hello'); // not yet updated
    
    act(() => { jest.advanceTimersByTime(300); });
    expect(result.current).toBe('world'); // now updated
  });
});
