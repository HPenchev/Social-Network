app.controller('WelcomeController',
    function ($scope, $location, authService, notifyService) {
        $scope.userData = {};
        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    console.log("Registration successful");
                    //notifyService.showInfo("Registration successful");
                },
                function error(err) {
                    console.log(err);
                    //notifyService.showError("User registration failed", err);
                }
            );
        };
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    console.log("login successful")
                    //notifyService.showInfo("Login successful");
                    //$location.path("/");
                },
                function error(err) {
                    console.log(err);
                    //notifyService.showError("invalid login ", err);
                }
            );
        };
    }
);