angular
    .module(AppConfig.name)
    .service('restService',['$http', function($http) {
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
        return {
            postRequest: function(host, data, config) {
            return $http.post(host, data);
            },
            getRequest: function(host) {
                return $http.get(host, config);
            },
            putRequest: function(host, data) {
                return $http.put(host, data);
            }
        };
    }]);