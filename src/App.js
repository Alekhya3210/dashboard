import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from './app.module.scss';

const loading = () => <div className={styles.fadeIn}>Loading...</div>;

// Containers
const MainLayout = lazy(() => import('./containers/MainLayout'));

// Pages
// const Login = lazy(() => import('./views/Pages/Login'));
// const Register = lazy(() => import('./views/Pages/Register'));
// const Page404 = lazy(() => import('./views/Pages/Page404'));
// const Page500 = lazy(() => import('./views/Pages/Page500'));

const App = () => (
  <BrowserRouter>
      <Suspense fallback={loading()}>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          <Route path="/" name="Home" render={props => <MainLayout {...props}/>} />
        </Switch>
      </Suspense>
  </BrowserRouter>
);

export default App;
