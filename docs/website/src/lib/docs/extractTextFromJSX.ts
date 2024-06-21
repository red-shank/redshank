import { Children, isValidElement, ReactElement, ReactNode } from 'react';

/**
 * Extract all text from JSX.
 */
export default function extractTextFromJSX(
  element: ReactElement | ReactNode
): string {
  if (typeof window !== 'undefined' && !element) {
    return '';
  }
  if (typeof element === 'string' || typeof element === 'number') {
    return element.toString();
  }

  if (isValidElement(element)) {
    const children = Children.toArray(element.props.children);
    return children.map(extractTextFromJSX).join('\n ');
  }

  return '';
}
