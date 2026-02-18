import { useState, useCallback } from "react";

/**
 * Simple boolean toggle hook.
 * @example
 * const [isOpen, toggle, setOpen] = useToggle(false);
 */
export function useToggle(initial = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle, setValue];
}
