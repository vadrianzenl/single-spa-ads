import angular from 'angular';
import './root.component.js';
angular
.module('profile-app')
.config(($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
  $stateProvider
    .state('root', {
      url: '/profile',
      template: '<root />',
    })
});