(function() {
  'use strict';

  angular
    .module('vaskohandmade')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
