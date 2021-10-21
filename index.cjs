const { dirname } = require("path")

const thisProjectDir = __dirname

exports.projectDir = dirname(dirname(dirname(thisProjectDir)))
