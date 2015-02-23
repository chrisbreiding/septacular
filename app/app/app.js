require('./app.styl');

import React from 'react';
import StationPickerComponent from '../station-picker/station-picker';

const StationPicker = React.createFactory(StationPickerComponent);
const RD = React.DOM;

export default React.createClass({
  render () {
    return StationPicker();
  }
});
