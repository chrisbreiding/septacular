require('./app.styl');

const React = require('react');
const Stations = React.createFactory(require('../stations/stations'));
const RD = React.DOM;

export default React.createClass({
  render () {
    return RD.div(null,
      RD.h1(null, 'Septacular'),
      Stations()
    );
  }
});
