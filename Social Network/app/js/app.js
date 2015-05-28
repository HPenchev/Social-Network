var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);
app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);
app.config(function ($routeProvider) {
    if (sessionStorage['currentUser'] === undefined) {
        $routeProvider.when('/', {
            templateUrl: 'templates/welcome.html',
            controller: 'WelcomeController'
        });
    } else {
        $routeProvider.when('/', {
            templateUrl: 'templates/userHomePage.html'
           // controller: 'WelcomeController'
        });
    }

    $routeProvider.when('/profile', {
        templateUrl: 'templates/editUserProfile.html'
        //controller: 'WelcomeContr'
    })
});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if (!authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});
