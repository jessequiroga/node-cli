#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _commands = require('./commands');

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).description(_package2.default.description);

_commander2.default.command('hello').description('Hello world').action(_commands.hello);

_commander2.default.parse(process.argv);

if (!process.argv.slice(2).length) {
  _commander2.default.outputHelp();
}