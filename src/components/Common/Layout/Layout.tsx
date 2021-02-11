import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Home from "pages/Home";
import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoutes from "../PrivateRoutes";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer from "./CustomDrawer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
      />
      <CustomDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
          <Switch>
            <PrivateRoutes exact={true} path="/" component={Home} />
          </Switch>
        </Box>
      </main>
    </div>
  );
};

export default Layout;
