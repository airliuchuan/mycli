const util = require('util');
const exec = util.promisify(require('child_process').exec);

const download = (dir, url) => {
  return new Promise(async (resolve, reject) => {
    let gitCmd = `git clone ${url} ${dir}`;
    try {
      await exec(gitCmd);
      resolve();
    } catch(e) {
      reject({
        msg: '下载git模板出错', 
        stack: e.message
      });
    }
  });
};

module.exports = {
  download
};