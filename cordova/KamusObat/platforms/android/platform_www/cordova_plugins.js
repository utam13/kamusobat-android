cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-exit.exit",
      "file": "plugins/cordova-plugin-exit/www/exit.js",
      "pluginId": "cordova-plugin-exit",
      "clobbers": [
        "cordova.plugins.exit"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-exit": "1.0.3"
  };
});