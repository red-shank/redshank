export * from './colors';

export const getTextForAvatar = (
  text: string = '',
  countText: number | 'all' = 2
) => {
  if (!text) {
    return '';
  }
  if (countText === 'all') {
    return text;
  }

  const arrayText = text.trim().split(' ');
  let count = 1;
  let out = '';

  arrayText.forEach((word) => {
    if (count > countText) {
      return;
    }
    out += `${word?.[0]?.toUpperCase?.() ?? ''}`;
    count++;
  });

  return out;
};

export const getRandomId = (prefix = 'idx') => {
  const random = Date.now() + Math.random().toString().replace('.', '-');
  return `${prefix}-${random}`;
};

export function resolveAssetUrl(dynamicPath: string) {
  const assets = {
    social: {
      'facebook.png': require('../@assets/social/facebook.png'),
      'google.png': require('../@assets/social/google.png'),
      'twitter.png': require('../@assets/social/twitter.png'),
      'apple-dark.png': require('../@assets/social/apple-dark.png'),
      'apple-light.png': require('../@assets/social/apple-light.png')
    }
  };

  const splitPath = dynamicPath.split('/');

  return splitPath.reduce((acc, path) => {
    if (!path) {
      return acc;
    }
    return acc[path];
  }, assets);
}
