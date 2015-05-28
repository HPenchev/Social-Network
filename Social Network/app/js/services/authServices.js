'use strict';
app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            register: function(userData, success, error) {
                console.log(userData);
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/register',
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },

            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] !== undefined;
            },

            getCurrentUser: function(success, error) {
                var request = {
                        method: 'GET',
                        url: baseServiceUrl + '/api/me'
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            }
        }
    }
);