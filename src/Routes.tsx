import CustomProgress from "components/Common/CustomProgress";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const Layout = lazy(() => import("./components/Common/Layout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Routes = () => (
  <Router>
    <Suspense fallback={<CustomProgress />}>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/" component={Layout} />
        <Route exact={true} path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
