require('./lib/base.styl');

import React from 'react';
import Router from 'react-router';
import AppComponent from './app/app';

const App = React.createFactory(AppComponent);
const Route = React.createFactory(Router.Route);

const routes = Route({ handler: App, path: '/' });

Router.run(routes, (Handler)=> {
  React.render(React.createFactory(Handler)(), document.body);
});
