import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export const AppBarComponent: React.SFC = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="title">Adventure Lookup</Typography>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;