const fs = require('fs');
const path = require('path');

const outputOptions = ['cjs', 'esm'];

const buildPath = path.resolve(__dirname, './lib');
const srcPath = path.resolve(__dirname, './src');

const styleFileName = 'style.css';

outputOptions.map((output) => {
  const outputDir = path.join(buildPath, output);

  fs.copyFileSync(
    path.resolve(srcPath, styleFileName),
    path.join(outputDir, styleFileName)
  );
});
