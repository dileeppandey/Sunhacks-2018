'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
	    .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
	    .state('Banking', {
                url: '/Bank Account',
                templateUrl: 'templates/banking.html',
		controller : 'BankingController'
            })
	    .state('government_id', {
                url: '/Government Id',
                templateUrl: 'templates/govt.html',
		controller : 'GovtController'
            })
	    .state('investment', {
                url: '/Investment',
                templateUrl: 'templates/investment.html',
		controller : 'GovtController'
            })
	
    }
]);
