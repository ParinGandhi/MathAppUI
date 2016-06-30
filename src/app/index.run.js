(function() {
  'use strict';

  angular
    .module('mathAppUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
