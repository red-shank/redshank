export function removeFromLast<T>(path: string, key: string): string | T {
  const i = path.lastIndexOf(key);

  return i === -1 ? path : path.substring(0, i);
}

export function debounce<T extends (...args: any[]) => any>(cb: T, wait = 20) {
  let timeoutId: NodeJS.Timeout | undefined;
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => cb(...args), wait);
  } as (...args: Parameters<T>) => ReturnType<T>;
}

export function clearTitleAlgolia(title: string): string {
  return title.replace(/-/g, ' ');
}
