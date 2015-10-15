var base = 'http://192.168.0.157';

angular.module('area51.factories', [])

.factory('TaskFactory', ['$http', function($http) {

	var perPage = 30;

	var API = {
		get: function(page) {
			return $http.get(base+'/services/user/time/get-time-and-bookings/58');
		}
	};

	return API;
}]);

