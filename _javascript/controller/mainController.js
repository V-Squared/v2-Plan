angular.module('site')
.controller('mainController',[ '$scope', '$mdSidenav', function($scope,$mdSidenav) {
    var vm = this;

    vm.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
}]);