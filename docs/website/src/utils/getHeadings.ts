export interface Heading {
  text: string;
  id: string;
}

export function getHeadings(): Heading[] {
  const headings = document.getElementsByClassName(
    'linked-heading'
  ) as HTMLCollection;

  return Array.from(headings).map((e: any) => {
    return {
      id: e.id,
      text: e.getAttribute('data-name')
    };
  }) as Heading[];
}
