const fs = require('fs');

function isExistDirectory (dir) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dir)) {
      fs.stat(dir, (err, stats) => {
        if (err) {
          reject(err.message);
        } else {
          if (stats.isDirectory()) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      })
    } else {
      resolve(false);
    }
  }); 
}

module.exports = {
  isExistDirectory
};