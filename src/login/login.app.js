import preact from 'preact';
import singleSpaPreact from 'single-spa-preact';
import Login from './root.component.js';

function domElementGetter() {
    return document.getElementById("login")
  }

const preactLifecycles = singleSpaPreact({
  preact,
  rootComponent: Login,
  domElementGetter
});

export const bootstrap = [
  preactLifecycles.bootstrap,
];

export const mount = [
  preactLifecycles.mount,
];

export const unmount = [
  preactLifecycles.unmount,
];