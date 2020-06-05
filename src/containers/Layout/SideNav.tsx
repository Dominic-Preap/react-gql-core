import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from 'common/context';
import { RoutePath } from 'common/utils';

const SideNav = () => {
  const auth = useAuthContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to={RoutePath.dashboard}>Dashboard</Link>
        </li>
        <li>
          <Link to={RoutePath.users}>Users</Link>
        </li>
        <li>
          <Link to="#" onClick={() => auth.logout()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
