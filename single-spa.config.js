import { registerApplication, start } from 'single-spa';

registerApplication(
  'login', 
  () => import('./src/login/login.app.js'), 
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/login')
);

registerApplication('navBar', () => import('./src/navBar/navBar.app.js').then(module => module.navBar), () => true);

registerApplication(
  'home', 
  () => import('./src/home/home.app.js'),
  pathPrefix('/home')
);

registerApplication(
  'transactions', 
  () => import('./src/transactions/transactions.app.js'),
  pathPrefix('/transactions')
);

registerApplication(
  'exchanges', 
  () => import('./src/exchanges/exchanges.app.js'),
  pathPrefix('/exchanges')
);

registerApplication(
  'profile', 
  () => import ('./src/profile/profile.app.js'), 
  pathPrefix('/profile')
);

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

start();