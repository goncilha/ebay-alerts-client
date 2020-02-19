import React, { Fragment } from "react";
import AlertForm from "../modules/alerts";
import StoreProvider from "../store";
import AlertList from "../modules/alerts/components/list";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <StoreProvider>
          <Fragment>
            <Switch>
              <Route path="/" exact>
                <AlertForm />
                <AlertList />
              </Route>
              <Route path="/alerts/:id">
                <AlertForm />
              </Route>
            </Switch>
          </Fragment>
        </StoreProvider>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
