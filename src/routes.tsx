import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchUsers from './Pages/SearchUsers';
import UserInformations from './Pages/UserInformations';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SearchUsers} />
      <Route path="/user-informations" component={UserInformations} />
    </BrowserRouter>
  );
};

export default Routes;
