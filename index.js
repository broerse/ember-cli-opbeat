/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-opbeat',

  isDevelopingAddon: function() {
    return false;
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/opbeat-js/opbeat.js');
  }
};
