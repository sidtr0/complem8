#!/usr/bin/env node

const hexRgb = require('hex-rgb');
const rgbHex = require('rgb-hex')
const limit = 255;
var args = process.argv.slice(2);

// console.log(hexRgb(args[0]));

const colourToConvert = hexRgb(args[0]);

var red = limit - colourToConvert.red;
var blue = limit - colourToConvert.blue;
var green = limit - colourToConvert.green;

console.log("Complementary:", rgbHex(red, blue, green))