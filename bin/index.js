#! node
const clear = require('clear');
const { logTitle, logWarning } = require('../util/log.js');
const program = require('commander');
const initApp = require('../commands/initApp');

clear();
logTitle('my-cli');

program
  .version('1.0.0', '-v --version')
  .command('init <appName>')
  .description('新建一个vue项目：[项目名称]')
  .action((name) => {
    console.log(name);
    initApp(name);
  });

  program.parse(process.argv);

  console.log('----------------------');