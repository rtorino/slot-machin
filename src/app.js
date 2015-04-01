'use strict';

require('./directives/machine');

angular.element(document).ready(function() {
  var deps = [];

  angular.module('app', deps)
    .config([
      '$stateProvider',
      '$urlRouterProvider', 
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('machine', {
            url: '/',
            template: '<slot-machine></slot-machine>'
          });
      }
    ]);

  angular.bootstrap(document, ['app']);
});