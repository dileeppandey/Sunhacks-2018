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
    var coords = {};

    function getState(position) {

        var geocoder = new google.maps.Geocoder();
        var latlng = {
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
        };
        geocoder.geocode({
            'location': latlng
        }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                console.log(status);
            }
            if (status == google.maps.GeocoderStatus.OK) {
                //console.log(results);
                for (var i = 0; i < results.length; i++) {
                    //console.log(results[i].types);
                    if (results[i].types[0] == "administrative_area_level_1")
                        this.state = results[i].address_components[0].long_name;
                }
                console.log(this.state);
            }
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            return undefined;
        }
    }

    function showPosition(position) {
        getState(position);
        console.log({
            lat: position.coords.latitude,
            long: position.coords.longitude
        })
    }

    if (getLocation() !== undefined) {
        coords = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
    }

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };

    // Call backend API here
    $http.get("APIURL/getSidebarWhateverIStheAPI").then(function (res) {
        // Now you need to know the API RESPONSE STRUCTURE
        // REMEMBER this res.data is just an example. You need to see
        // what the backend is sending
        // To check the response, you can console.log(res) to see json structure
        // coming from the server
        $scope.sideBarOptions = res.data
    }).catch(function (err) {
        console.log(err)
    })
    $scope.sideBarOptions= ["Banking", "Govenment Id","Investments", "Telephonic Carrier"];
}