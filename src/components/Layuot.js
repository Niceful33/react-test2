import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Коллекция</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
