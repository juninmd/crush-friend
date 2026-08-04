import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/home/home';
import * as serviceWorker from './serviceWorker';
import * as store from './mobx';
import { Provider } from 'mobx-react';
import CirclesComponent from './containers/circles';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <CirclesComponent>
        <Home home={store.home} />
      </CirclesComponent>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

serviceWorker.unregister();
