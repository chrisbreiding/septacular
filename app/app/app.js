require('./app.styl');

const React = require('react');
const StationPicker = React.createFactory(require('../station-picker/station-picker'));
const RD = React.DOM;

export default React.createClass({
  render () {
    return StationPicker();
  }
});
