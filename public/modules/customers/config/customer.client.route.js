'use strict';

//setting up the route for the customers

angular.module('customers').config(['$stateProvider', function ($stateProvider){
  $stateProvider
  .state('listCustomers',{
    url:'/customers',
    templateUrl: '/modules/customers/views/list.customer.view.html'
  })
  .state('createCustomer', {
    url: '/customers/create',
    templateUrl: '/modules/customers/views/create.customer.view.html'
  })
  .state('viewCustomer', {
    url:'/customers/:customerId',
    templateUrl: 'modules.customers/views/view.customer.view.html'
  })
  .state('editCustomer', {
    url: '/customers/:customerId/edit',
    templateUrl: 'modules/customers/views/edit.customer.view.html'
  });
  
}
]);