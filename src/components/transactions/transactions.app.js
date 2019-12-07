import singleSpaSvelte from 'single-spa-svelte';
import Transactions from './root.component.svelte';

const svelteLifecycles = singleSpaSvelte({
    component: Transactions,
    domElementGetter: () => document.getElementById('transactions'),
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