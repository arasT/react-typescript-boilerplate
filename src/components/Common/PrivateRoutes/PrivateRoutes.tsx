import React, { ComponentProps } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import services from "services/authServices";

type Props = {
  component: ComponentProps<any>;
};

const PrivateRoutes: React.FC<Props & RouteProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        services.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoutes;
