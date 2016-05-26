angular.module('site')
.controller('mainController',[ '$scope', '$mdSidenav', function($scope,$mdSidenav) {
    var vm = this;

    vm.toggleOffCanvas = function toggleOffCanvas(navID) {
      $mdSidenav(navID).toggle();
    }
}]);