import singleSpaSvelte from 'single-spa-svelte';
import Profile from './root.component.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: Profile,
  domElementGetter: () => document.getElementById('profile'),
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