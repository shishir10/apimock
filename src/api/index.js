import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

// Concating routes and initializing it.
// PS - This was the bug which was causing the server to crash.
let routes = [];
routes = routes.concat(testRoutes, prodRoutes);

export default routes;