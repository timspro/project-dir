"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectDir = projectDir;

var _path = require("path");

var _url = require("url");

function projectDir(path) {
  return (0, _path.dirname)((0, _url.fileURLToPath)(path));
}