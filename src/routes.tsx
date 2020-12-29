import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Spinner } from "./Components/Spinner";

const SearchingUser = lazy(() => import("./Pages/SearchingUser"));
const UserInformations = lazy(() => import("./Pages/UserInformations"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={SearchingUser} />
        <Route path='/user-informations' component={UserInformations} />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
