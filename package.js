Package.describe({
  summary: 'The most advanced, yet intuitive, grid system available for Sass or Stylus'
});

Package.on_test(function (api) {
  api.use(['tinytest', 'stylus', 'scss', 'jeet', 'test-helpers', 'templating']);
  api.add_files([
    'jeet-tests.html',
    'jeet-tests.styl',
    'jeet-tests.scss',
    'jeet-tests.js'
  ],'client');
});
