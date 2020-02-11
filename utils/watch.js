const { watch } = require('gulp');

exports.watch = function(javascript, css, html) {
  // You can use a single task
  watch("./src/js/**/*.js", javascript);
  watch("./src/css/**/*.css", css);
  watch("./src/template/**/*.html", html);
};