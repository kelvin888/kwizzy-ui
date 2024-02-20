import { useState } from "react";

// Define a type for the value stored in local storage
type LocalStorageValue<T> = T | null;

// Define a type for the setter function
type SetValue<T> = (value: LocalStorageValue<T>) => void;

// Define a generic custom hook for using local storage
export default function useLocalStorage<T>(
  key: string,
  initialValue: LocalStorageValue<T>,
): [LocalStorageValue<T>, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<LocalStorageValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item != null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore: LocalStorageValue<T> =
        // eslint-disable-next-line @typescript-eslint/ban-types
        typeof value === "function" ? (value as Function)(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
