import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

const SearchingUser = lazy(() => import("./pages/SearchingUser"));
const UserInformations = lazy(() => import("./pages/UserData"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path={"/"} component={SearchingUser} />
        <Route path={"/user-informations"} component={UserInformations} />
      </Suspense>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
