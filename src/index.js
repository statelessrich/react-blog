import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
// import * as postActions from './actions/posts-actions';
import configureStore from './store/configureStore';

const store = configureStore();
//store.dispatch(postActions.getPosts());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
