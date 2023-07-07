const fs = require('fs');
const path = require('path');

(() => {
  const from = path.resolve(__dirname, 'src', '@assets');
  const to = path.resolve(__dirname, 'dist', '@assets');

  console.log(`-- Copying assets to dist --`);
  console.log(`FROM: ${from}`);
  console.log(`TO: ${to}`);

  fs.cp(
    from,
    to,
    { recursive: true },
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
})();
