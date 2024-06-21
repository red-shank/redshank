import { useEffect, useState } from 'react';

export default function useDebounce<T>(
  value: T,
  delay: number
): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (typeof value === 'string' && value.trim().length === 0) {
      setDebouncedValue(value);
      return;
    }

    // Update debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed within the delay period
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
