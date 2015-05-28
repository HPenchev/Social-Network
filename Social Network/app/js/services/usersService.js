'use strict';
app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            takeAllUsers: function(userData, success, error) {
                console.log(userData);
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/register',
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            }
        }
    }
);