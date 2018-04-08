/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$http', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http) {
    /**
     * Sidebar Toggle & Cookie Control
     */
         var that = this;
       function getLocation() {
        console.log('inside getlocation');
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            return undefined;
        }
    }

    getLocation();

    function showPosition(position) {
        // getState(position);
        console.log('inside showposition');
        console.log({
            lat: position.coords.latitude,
            long: position.coords.longitude
        })
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&location_type=ROOFTOP&key=AIzaSyDitdbIu--H19tT3oIv8YnfrQ1b-eJ5Xrk';
        console.log(url);
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            results = response.data.results[0];
            address_components = results['address_components'];
            console.log('results', results);
            console.log('address_components', address_components);
            if (results !== undefined) {
                for (var i = 0; i < address_components.length; i++) {
                    //console.log(results[i].types);
                    if (address_components[i].types[0] == "administrative_area_level_1")
                        state = address_components[i].long_name;
                }
            }
            console.log(state);
            that.state = state;
        }, function errorCallback(response) {
            console.log('Error in getting location');
        });
    }
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
