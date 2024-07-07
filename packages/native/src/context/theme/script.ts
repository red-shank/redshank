import fs from 'fs';
import path from 'path';
import { colorsLight } from './defaultValues';

const COLOR_TYPE_PATH = path.resolve(__dirname, 'color.type.ts');

function flattenObject(obj: object, parentKey = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, key: string) => {
    const nestedKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      const nestedFlattened = flattenObject(obj[key] as object, nestedKey);
      return { ...acc, ...nestedFlattened };
    } else {
      return { ...acc, [nestedKey]: nestedKey };
    }
  }, {});
}

export default function createColorName(colors = colorsLight) {
  const typeDefinition = flattenObject(colors);
  const typeContent = `// @ts-nocheck

export type ColorKeys = ${JSON.stringify(typeDefinition, null, 2)}

export type ColorName = keyof ColorKeys | string;

const Colors = ${JSON.stringify(colors, null, 2)};

export type ColorSchema = typeof Colors;`;

  fs.writeFileSync(COLOR_TYPE_PATH, typeContent, {
    encoding: 'utf8',
    flag: 'w'
  });

  console.log('Type color generated successfully!');

  return typeContent;
}

if (require.main === module) {
  console.log('Generating color type from script...');
  console.log(createColorName());
}
