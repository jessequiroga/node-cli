#!/usr/bin/env node

import program from 'commander'

import {hello} from './commands'

import pkg from '../package.json'

program.version(pkg.version).description(pkg.description)

program
  .command('hello')
  .description('Hello world')
  .action(hello)

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
