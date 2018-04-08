/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$http', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    // Call backend API here
    $http.get("APIURL/getSidebarWhateverIStheAPI").then(function(res){
	// Now you need to know the API RESPONSE STRUCTURE
	// REMEMBER this res.data is just an example. You need to see
	// what the backend is sending
	// To check the response, you can console.log(res) to see json structure
	// coming from the server
	$scope.sideBarOptions = res.data
    }).catch(function(err){
	console.log(err)
    })
    $scope.sideBarOptions= ["Banking","Investments", "Govenment Id", "Ernst Handel"];

    
}
