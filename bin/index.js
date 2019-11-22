#! node
let clear = require('clear');
let { logTitle, logWarning } = require('../util/log.js')

clear();
logTitle('my-cli');
logWarning(['dddd', 'dddffff'])