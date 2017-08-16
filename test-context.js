require("babel-polyfill");

var context = require.context('./app', true, /-spec\.js$/);
context.keys().forEach(context);
