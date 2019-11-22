const chalk = require('chalk'); // 为console输出的内容添加颜色
const figlet = require('figlet');// 使用字符拼成的的字作为console输出

const log = console.log,
      titleChalk = chalk.keyword('blue'),
      warningChalk = chalk.keyword('red'),
      infoChalk = chalk.keyword('orange');

const logTitle = (msg) => {
  log(titleChalk(figlet.textSync(msg, {
    horizontalLayout: 'default'
  })));
}

const logWarning = (...msg) => {
  log(warningChalk('[warn]', ...msg));
}

const logInfo = (...msg) => {
  log(infoChalk('[info]', ...msg))
}

module.exports = {
  logTitle,
  logWarning,
  logInfo
}