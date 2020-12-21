import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const SearchingUser = lazy(() => import("./Pages/SearchingUser"));
const UserInformations = lazy(() => import("./Pages/UserInformations"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={SearchingUser} />
        <Route path='/user-informations' component={UserInformations} />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
