import { algoliaIndexWrite } from '@/config/algolia';

function clearContent(content: string | object) {
  if (typeof content === 'string') {
    const newContent = content.replace('<Spacer y={2} />', '');
    return newContent.replace(/\s+/g, '\n \n').trim();
  }
  return content;
}

export async function saveAlgoliaObject(id: string, _content: any) {
  const content = clearContent(_content);

  try {
    await algoliaIndexWrite.partialUpdateObject(
      {
        objectID: id,
        content: content
      },
      {
        createIfNotExists: true
      }
    );
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
