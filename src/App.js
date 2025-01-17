import React, {Component} from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/writer';

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <GlobalStyleIcon/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}>
              </Route>
              <Route path='/detail' exact component={Detail}>
              </Route>
              <Route path='/login' exact component={Login}>
              </Route>
              <Route path='/write' exact component={Write}>
              </Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;