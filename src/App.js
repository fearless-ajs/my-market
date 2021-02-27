import React from 'react';
import Homepage from "./pages/homepage/home.page";
import { Switch, Route } from 'react-router-dom';
import AuthenticationPage from "./pages/authentication/authentication.page";
import Header from "./components/layouts/header/header.component";
import Footer from "./components/layouts/footer/footer.component";


function App() {
  return (
      <div>
          {/*=========================== PAGE HEADER ===========================*/}
          <Header />
          {/*=========================== END OF PAGE HEADER ====================*/}

          <Switch>
              <Route exact={true} path='/' component={Homepage} />
              <Route exact={true} path='/auth' component={AuthenticationPage} />
          </Switch>

          {/*=========================== PAGE FOOTER ===========================*/}
          <Footer />
          {/*=========================== END OF PAGE HEADER ====================*/}
      </div>
  );
}

export default App;
