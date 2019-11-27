const util = require('util');
const path = require('path');
const os = require('os');
const fs = require('fs');
const ora = require('ora');
const inquirer = require('inquirer');
const exec = util.promisify(require('child_process').exec);

const {isExistDirectory }  = require('../util/files');
const templateUrls = require('../config/templateUrl');
const { download } = require('../util/download');
const { logInfo, logWarning } = require('../util/log');

let spinner = null;

const initApp = async (name) => {
  let processPath = process.cwd();
  let createDir = path.resolve(processPath, name);
  try {
    let isExistDir = await isExistDirectory(createDir);
    // 判断项目名称是否被占用
    if (isExistDir) {
      logWarning(`已存在${name}项目`);
      process.exit(1);
    }
    logInfo('开始创建新的应用');
    // 选择模板
    inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: '请选择模板',
        choices: Object.keys(templateUrls)
      }
    ])
    .then(answer => {
      let type = answer['template'];
      let templateUrl = templateUrls[type];
      spinner = ora(`正在下载模板，地址：${templateUrl}`);
      spinner.start();
      return download(name, templateUrl);
    })
    .then(() => {
      spinner.succeed('模板下载成功');
      spinner.stop();
      return setPackageJson(createDir, name);
    });
  } catch(e) {
    logWarning('创建终止');
    process.exit(1);
  }
}

// 配置package.json 名称 name 版本 version 描述 description  作者 author
function setPackageJson(dir, name) {
  return new Promise((resolve, reject) => {
    const userInfo = os.userInfo();
    const pkgPath = path.resolve(dir, 'package.json');
    const pkg = require(pkgPath);
    inquirer.prompt([
      {
        name: 'name',
        message: '请输入项目名称',
        default: name
      },
      {
        name: 'version',
        message: '请输入版本号',
        default: '1.0.0'
      },
      {
        name: 'description',
        message: '请输入描述',
        default: ''
      },
      {
        name: 'author',
        message: '请输入作者名字',
        default: userInfo.username || ''
      }
    ]).then(answer => {
      let mergePkg = Object.assign(pkg, answer);
      console.log(mergePkg);
      fs.writeFileSync(pkgPath, JSON.stringify(mergePkg, null, ' '));
    });
  });
}

module.exports = initApp;