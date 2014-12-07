Package.describe({
  name: 'fish:ffmpeg',
  summary: 'ffmpeg packaged for meteor. Uses fluent-ffmpeg',
  version: '0.1.0',
  git: 'https://github.com/fishdude/meteor-ffmpeg.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('fish:ffmpeg.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fish:ffmpeg');
  api.addFiles('fish:ffmpeg-tests.js');
});

Npm.depends({
	"fluent-ffmpeg": "2.0.0-rc3"
});
