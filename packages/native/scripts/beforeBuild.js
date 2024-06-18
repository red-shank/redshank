const fs = require('fs');
const path = require('path');

(() => {
  const _path = path.resolve(__dirname, '..', 'dist');

  fs.rmSync(_path, { force: true, recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`-- Deleted dist folder --`);
  });
})();
