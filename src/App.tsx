import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CompetencePage from './pages/CompetencePage';
import EducationPage from './pages/EducationPage';
import OtherPage from './pages/OtherPage';
import {Loading}  from './pages/LoadingPage';
import './App.css'

function App() {
// ---> Error pages
const NotFoundPage = lazy(() => import('./pages/ErrorPage'));

const helmetContext = {};
  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>React TS Boilerplate</title>
          <link
            rel="canonical"
            href="https://reactts-boilerplate.netlify.app/"
          />
        </Helmet>

        {/* <MainLayout> */}
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Static pages routes */}
              <Route path={"/"} Component={HomePage} />
              <Route path={"/Competence"} Component={CompetencePage} />
              <Route path={"Contact"} Component={ContactPage} />
              <Route path={"Edcation"} Component={EducationPage} />
              <Route path={"Other"} Component={OtherPage} />

              {/* Auth routes
              <Route exact path={PATH.LOGIN} component={LoginPage} />
              <Route exact path={PATH.REGISTER} component={RegisterPage} />
              <PrivateRoute exact path={PATH.PROFILE} component={ProfilePage} /> */}

              {/* Products routes */}
              {/* <PrivateRoute
                exact
                path={PATH.PRODUCTS}
                component={ProductListPage}
              />
              <PrivateRoute
                exact
                path={PATH.PRODUCT_NEW}
                component={ProductNewPage}
              />
              <PrivateRoute
                exact
                path={PATH.PRODUCT_SHOW}
                component={ProductItemPage}
              />
              <PrivateRoute
                exact
                path={PATH.PRODUCT_EDIT}
                component={ProductEditPage}
              /> */}

              {/* Error routes */}
              <Route Component={NotFoundPage} />
            </Routes>
          </Suspense>
        {/* </MainLayout> */}
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
