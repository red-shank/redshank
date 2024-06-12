const fs = require('fs');
const path = require('path');

const BASE_DIR = process.cwd();

const suiMonoPath = path.resolve(BASE_DIR, 'node_modules', '@s-ui', 'mono');

const suiMonoReleasePath = path.resolve(suiMonoPath, 'bin', 'sui-mono-release.js');
const sourceRelease = path.resolve(
  BASE_DIR,
  'scripts',
  'postinstall',
  'sui-mono-release.js'
);

const suiMonoConfigPath = path.resolve(suiMonoPath, 'src', 'config.js');
const sourceConfig = path.resolve(
  BASE_DIR,
  'scripts',
  'postinstall',
  'config.js'
);

(() => {
  // replace file content
  fs.unlink(suiMonoReleasePath, (err) => {
    if (err) {
      console.error(`Error the eliminate ${suiMonoReleasePath}`, err);
      return;
    }
    console.log(`${suiMonoReleasePath} deleted successfully!`);
  });
  fs.unlink(suiMonoConfigPath, (err) => {
    if (err) {
      console.error(`Error the eliminate ${suiMonoConfigPath}`, err);
      return;
    }
    console.log(`${suiMonoConfigPath} deleted successfully!`);
  });

  // move file to the right path
  fs.copyFile(sourceRelease, suiMonoReleasePath, (err) => {
    if (err) {
      console.error('Error al copiar el archivo:', err);
      return;
    }
    console.log('Archivo copiado exitosamente');
  });
  fs.copyFile(sourceConfig, suiMonoConfigPath, (err) => {
    if (err) {
      console.error('Error al copiar el archivo:', err);
      return;
    }
    console.log('Archivo copiado exitosamente');
  });
})();
