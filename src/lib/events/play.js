'use strict';

var listenToPlayerEvents = require('../helpers/listenToPlayerEvents');
require('../helpers/detectPlayersFromPage');

module.exports = function(settings, trigger) {
  listenToPlayerEvents.registerListener({
    state: 'PLAYING',
    settings: settings,
    callback: trigger
  });
};
