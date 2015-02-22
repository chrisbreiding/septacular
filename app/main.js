const React = require('react');
const Router = require('react-router');
const App = React.createFactory(require('./app/app'));

const Route = React.createFactory(Router.Route);

const routes = Route({ handler: App, path: '/' });

Router.run(routes, (Handler)=> {
  React.render(React.createFactory(Handler)(), document.body);
});
