import { declareChildApplication, start } from 'single-spa';

declareChildApplication(
  'login', 
  () => import('./src/login/login.app.js'), 
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/login')
);

declareChildApplication('navBar', () => import('./src/navBar/navBar.app.js').then(module => module.navBar), () => true);

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

start();