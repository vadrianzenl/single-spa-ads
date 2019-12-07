import angular from 'angular';
import template from './root.template.html';
import AuthService from "services/AuthService";
angular
.module('profile-app')
.component('root', {
  template,
  controllerAs: 'vm',
  controller($http) {
    const vm = this;
    console.log(JSON.stringify(AuthService.getCustomerInfo()))
    vm.customer = AuthService.getCustomerInfo();
  }
});