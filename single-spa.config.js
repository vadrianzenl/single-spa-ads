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

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

start();