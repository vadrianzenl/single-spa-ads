import singleSpaSvelte from 'single-spa-svelte';
import Exchanges from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
    component: Exchanges,
    domElementGetter: () => document.getElementById('exchanges'),
    data: {}
  });
  
  export const bootstrap = [
    svelteLifecycles.bootstrap,
  ];
  
  export const mount = [
    svelteLifecycles.mount,
  ];
  
  export const unmount = [
    svelteLifecycles.unmount,
  ];