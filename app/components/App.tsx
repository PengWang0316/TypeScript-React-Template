import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import importedComponent from 'react-imported-component';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import { HOME_PAGE_URL } from '../config';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4A6572',
      main: '#344955',
      dark: '#232F34',
      contrastText: '#fff',
    },
    secondary: {
      light: '#497ca4',
      main: '#105075',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

/* istanbul ignore next */
// const HomePage = importedComponent(() => import(/* webpackChunkName: "HomePageContainer" *//* webpackPrefetch: true */ './containers/HomePageContainer').catch(err => console.log(err)));
const HomePage = lazy(() => import(/* webpackChunkName: "HomePageContainer" *//* webpackPrefetch: true */ './containers/HomePageContainer'));


/**
 * The root component that contains the theme, routers, navbar, and login dialog
 */
export const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <CssBaseline />
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={HOME_PAGE_URL} component={HomePage} />
              <Route render={() => <p>Not Fount!</p>} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  </MuiThemeProvider>
);
export default App;
