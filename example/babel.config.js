const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-numeric-separator'],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@redshank/native/dist': path.resolve(
              __dirname,
              '..',
              'packages/native/src'
            ),
          },
        },
      ],
    ],
  };
};
