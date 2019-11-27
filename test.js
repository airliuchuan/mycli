const fs = require('fs');
const os = require('os');
const ora = require('ora');
const inquirer = require('inquirer');
const path = require('path');

fs.writeFileSync('./test.txt', '11111111111111111')

// let path1 = path.join('/a', '/b');
// let path2 = path.resolve('./a', './b');
// let path3 = path.resolve(process.cwd(), 'myApp')
// console.log(path1, path2, path3);
// console.log(os.userInfo());
// inquirer.prompt([
//   {
//     name: 'name',
//     message: '请输入项目名称',
//     default: 'appName'
//   },
//   {
//     name: 'version',
//     message: '请输入项目版本',
//     default: '1.0.0'
//   },
//   {
//     name: 'description',
//     message: '请输入项目描述',
//     default: ''
//   },
//   {
//     name: 'author',
//     message: '请输入作者名称',
//     default: 'userInfo.username'
//   }
// ])
// .then(answers => {
//   console.log(answers);
//   // const userPkg = Object.assign(pkgFile, answers);
//   // fs.writeFileSync(packagePath, JSON.stringify(userPkg, null, '  '));
//   // resolve();
// })
 
const spinner = ora('Loading unicorns');
// spinner.start();
 
setTimeout(() => {
  // spinner.succeed('模板下载成功，开始配置package.json文件');
}, 1000);

fs.stat('package.json', (err, stats) => {
  // console.log(stats.isDirectory());
});