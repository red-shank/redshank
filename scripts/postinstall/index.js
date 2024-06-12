const fs = require('fs');
const path = require('path');

const BASE_DIR = process.cwd()

const suiMonoBinPath = path.resolve(BASE_DIR, 'node_modules', '@s-ui', 'mono', 'bin');
const suiMonoReleasePath = path.resolve(suiMonoBinPath, 'sui-mono-release.js');
const source = path.resolve(BASE_DIR, 'scripts', 'postinstall', 'sui-mono-release.js');

(() => {
  // replace file content
  fs.unlink(suiMonoReleasePath, (err) => {
    if (err) {
      console.error(`Error the eliminate ${suiMonoReleasePath}`, err);
      return;
    }
    console.log(`${suiMonoReleasePath} deleted successfully!`);
  });

  // move file to the right path
  fs.copyFile(source, suiMonoReleasePath, (err) => {
    if (err) {
      console.error('Error al copiar el archivo:', err);
      return;
    }
    console.log('Archivo copiado exitosamente');
  })
})()

