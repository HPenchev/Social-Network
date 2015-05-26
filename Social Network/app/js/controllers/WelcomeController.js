app.controller('WelcomeController',
    function ($scope, $location, authService, notifyService) {
        $scope.userData = {};
        $scope.loginData = {};
        $scope.register = function(userData) {
            console.log(userData);
            authService.register(userData,
                function success() {
                    notifyService.showInfo("Registration successful");
                    $scope.login(userData);
                },
                function error(err) {
                    notifyService.showInfo(err);
                }
            );
        };
        $scope.login = function(loginData) {
            authService.login(loginData,
                function success() {
                    console.log("login successful");
                    notifyService.showInfo("Login successful")
                    console.log(authService.isLoggedIn());
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("invalid login ", err);
                }
            );
        };
    }
);