import { useState, useEffect } from 'react';

/**
 * Custom React hook to manage state synchronized with `localStorage`
 * and an expiration mechanism for the stored data.
 *
 * @param {string} key - The key under which the value is stored in `localStorage`.
 * @param {unknown} initialValue - The initial value to use if no value is found in `localStorage`
 * or if the stored value has expired.
 * @returns {[unknown, React.Dispatch<React.SetStateAction<unknown>>]}
 * A tuple containing the current value and a function to update it.
 *
 * ### Behavior:
 * - On initialization, the hook checks if a value exists in `localStorage` for the given key.
 *   - If a value exists and its expiration timestamp is still valid, it parses and returns the value.
 *   - If no value exists or the expiration timestamp has passed, it returns the `initialValue`.
 * - When the `value` changes:
 *   - The new value is stored in `localStorage` under the given key.
 *   - An expiration timestamp (15 minutes from the current time) is also stored in `localStorage`.
 *
 * ### Example Usage:
 * ```typescript
 * const [data, setData] = useLocalStorage('user', { name: 'John Doe' });
 *
 * // Update the value
 * setData({ name: 'Jane Doe' });
 * ```
 *
 * ### Notes:
 * - The expiration mechanism ensures that the stored data is only valid for 15 minutes.
 * - If the `value` is `undefined`, it will not be stored in `localStorage`.
 * - This hook is useful for managing temporary data that needs to persist across page reloads
 *   but should expire after a certain period.
 */
const useLocalStorage = (key: string, initialValue: unknown) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    const expiration = localStorage.getItem(`${key}_expiration`);
    if (saved && expiration && parseInt(expiration) > Date.now()) {
      return JSON.parse(saved);
    }
    return initialValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
      localStorage.setItem(`${key}_expiration`, (Date.now() + 15 * 60 * 1000).toString());
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
