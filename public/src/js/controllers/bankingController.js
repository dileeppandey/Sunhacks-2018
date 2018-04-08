/**
 * Master Controller
 */

angular.module('RDash')
    .controller('BankingController', ['$scope', '$cookieStore', '$http', BankingController]);

function BankingController($scope, $cookieStore, $http) {

    // Call backend API here
    $http.get("APIURL/savings").then(function(res){
	// Now you need to know the API RESPONSE STRUCTURE
	// REMEMBER this res.data is just an example. You need to see
	// what the backend is sending
	// To check the response, you can console.log(res) to see json structure
	// coming from the server
	$scope.savingsData = res.data
    }).catch(function(err){
	console.log(err)
    })
        // Call checkingbackend API here
    $http.get("APIURL/checking").then(function(res){
	// Now you need to know the API RESPONSE STRUCTURE
	// REMEMBER this res.data is just an example. You need to see
	// what the backend is sending
	// To check the response, you can console.log(res) to see json structure
	// coming from the server
	$scope.checkingData = res.data
    }).catch(function(err){
	console.log(err)
    })
    // Remove later
    $scope.checkingData = [
	{
	    name:"BoFa",
	    ROI : "10%"
	}
    ]
    
    
}
