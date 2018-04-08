/**
 * Master Controller
 */

angular.module('RDash')
    .controller('BankingController', ['$scope', '$cookieStore', '$http', BankingController]);

function BankingController($scope, $cookieStore, $http) {

    // Call backend API here
    $http.get("http://localhost:3000/api/getCheckingDetails").then(function(res){
	$scope.checkingData = res.data
    }).catch(function(err){
	console.log(err)
    })
        // Call checkingbackend API here
    $http.get("http://localhost:3000/api/getSavingsDetails").then(function(res){
	$scope.savingsData = res.data
    }).catch(function(err){
	console.log(err)
    })

    
    
}
