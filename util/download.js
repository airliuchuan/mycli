const util = require('util');
const exec = util.promisify(require('child_process').exec);

const download = (dir, url) => {
  return new Promise(async (resolve, reject) => {
    let gitCmd = `git clone ${url} ${dir}`;
    let {err, stderr} = await exec(gitCmd);
    if (err) {
      reject({
        msg: '下载git模板出错了',
        stack: stderr
      });
    } else {
      resolve();
    }
  });
};

module.exports = {
  download
};