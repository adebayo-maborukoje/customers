'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.alerts = [
      {
        icon: ' glyphicon-user',
        colour: 'btn-success',
        total: '20,448',
        description: 'Total Customers'
      },
      {
        icon: ' glyphicon-calendar',
        colour: 'btn-primary',
        total: '8,345',
        description: 'Upcoming Events'
      },
      {
        icon: ' glyphicon-edit',
        colour: 'btn-danger',
        total: '500',
        description: 'Latest Developer'
      },
      {
        icon: ' glyphicon-record',
        colour: 'btn-info',
        total: '85,000',
        description: 'Emails Sent'
      },
       {
        icon: ' glyphicon-eye-open',
        colour: 'btn-warning',
        total: '203',
        description: 'Follow Up Required'
      },
      {
        icon: ' glyphicon-flag',
        colour: 'btn-danger',
        total: '348',
        description: 'Refarrals'
      }
    ];
  } 
]);