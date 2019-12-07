import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import './app.module.js';
import './routes.js';

const domElementGetter = () => document.getElementById('profile');
const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'profile-app',
  uiRouter: true,
  preserveGlobal: false,
})
export const bootstrap = [
  angularLifecycles.bootstrap,
];
export const mount = [
  angularLifecycles.mount,
];
export const unmount = [
  angularLifecycles.unmount,
];