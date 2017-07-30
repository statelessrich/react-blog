import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home/home';
import Post from './components/new-post/new-post';
import App from './components/app/app';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/post" component={Post}></Route>
    </Route>
);
