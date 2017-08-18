#!/usr/bin/env node

const path = require('path')
const wifiInterface = require(path.join('../index'))

console.log(wifiInterface())
