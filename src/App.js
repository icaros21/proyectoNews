import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from './components/sidebar';
import 'bulma/css/bulma.css';
import ListItems from './components/listItems';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container is-fluid">
          <div className="card">
            <div className="card-content">    
              <div className="columns">
                <div className="column is-3">
                  <section className="section has-background-light">
                    <Sidebar />
                  </section>
                </div>
                <div className="column is-9">
                  <section className="section">
                    <Switch>
                      <Route exact path={'/'} component={ListItems}></Route>
                    </Switch>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
