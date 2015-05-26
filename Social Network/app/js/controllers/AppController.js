app.controller('AppController',
    function ($scope, authService) {
        $scope.isLoggedIn = function() {
            return authService.isLoggedIn();
        }
    }
);