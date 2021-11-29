import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Homepage = lazy(() => import("./pages/FirstPage"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
