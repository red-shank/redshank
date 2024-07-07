const fs = require('fs');
const path = require('path');

const rootMonorepo = path.resolve('../../');
const rootLib = path.resolve(rootMonorepo, 'packages', 'native');
const root = process.cwd();

function copyFiles() {
  const pkgDir = `${rootLib}/package.json`;
  const defaultValuesDir = `${rootLib}/src/context/theme/defaultValues.ts`;

  console.log(`Copying the package.json file from ${pkgDir}`);
  fs.copyFile(pkgDir, `${root}/temp/_package.json`, (err) => {
    if (err) {
      console.log('Oops! An Error Occured:', err);
    } else {
      console.log('package.json copied');
    }
  });

  const filePathOutput = `${root}/temp/defaultValues.ts`;

  console.log(`Copying the variants file from ${defaultValuesDir}`);
  fs.readFile(defaultValuesDir, 'utf-8', (err, data) => {
    if (err) {
      console.log('Oops! An Error Occured:', err);
    } else {
      console.log('Content file copied');
      const newContent = data.replace(
        `import { BorderRadiusType } from './types';

`,
        ''
      );

      fs.writeFile(
        filePathOutput,
        newContent.replace(': BorderRadiusType', ''),
        (err) => {
          if (err) {
            console.log('Oops! An Error Occured:', err);
          } else {
            console.log('Content file copied');
          }
        }
      );
    }
  });
}

copyFiles();
