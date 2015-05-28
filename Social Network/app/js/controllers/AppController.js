app.controller('AppController',
    function ($scope, authService) {
        $scope.isLoggedIn = function() {
            return authService.isLoggedIn();
        }

        $scope.currentUser = function() {
            var user = authService.getCurrentUser();
            console.log(user);
        }
        $scope.currentUser();

    }


);