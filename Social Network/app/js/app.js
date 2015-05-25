var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);
app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
//app.constant('pageSize', 2);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeController'
    });

    //$routeProvider.otherwise(
    //    { redirectTo: '/' }
    //);
});

//app.run(function ($rootScope, $location, authService) {
//    $rootScope.$on('$locationChangeStart', function (event) {
//        if (!authService.isLoggedIn()) {
//            // Authorization check: anonymous site visitors cannot access user routes
//            $location.path("/");
//        }
//    });
//});