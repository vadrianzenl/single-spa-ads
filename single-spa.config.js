import { registerApplication, start } from 'single-spa';

registerApplication(
  'login', 
  () => import('./src/components/login/login.app.js'),
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/login')
);

registerApplication(
  'navBar',
  () => import('./src/components/navBar/navBar.app.js').then(module => module.navBar),
  (location) => location.pathname === "/home"
    || location.pathname === "/transactions"
    || location.pathname === "/exchanges"
    || location.pathname === "/profile"
);

registerApplication(
  'home', 
  () => import('./src/components/home/home.app.js'),
  pathPrefix('/home')
);

registerApplication(
  'transactions', 
  () => import('./src/components/transactions/transactions.app.js'),
  pathPrefix('/transactions')
);

registerApplication(
  'exchanges', 
  () => import('./src/components/exchanges/exchanges.app.js'),
  pathPrefix('/exchanges')
);

registerApplication(
  'profile', 
  () => import ('./src/components/profile/profile.app.js'),
  pathPrefix('/profile')
);

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

start();