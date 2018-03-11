import Dashboard from '../views/Dashboard';
import UserProfile from '../views/UserProfile';
import NotFound from '../views/NotFound';
import Login from '../views/Login';

const indexRouter = [
  {path: '/', name: "Homepage", component: Dashboard, exact: true},
  {path: '/dashboard', name: "Dashboard", component: Dashboard},
  {path: '/profile', name: "Profile", component: UserProfile},
  {name: "404 - Error", component: NotFound}
];

export default indexRouter;