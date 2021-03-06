require('./station-picker.styl');

import React from 'react';
import StationsComponent from '../stations/stations';

const Stations = React.createFactory(StationsComponent);
const RD = React.DOM;

export default React.createClass({

  getInitialState () {
    return {
      start: null,
      destination: null
    }
  },

  render () {
    const start = this.state.start;
    let directive;
    let className = 'station-picker';
    if (start) {
      directive = 'Pick Destination';
      className += ' picking-destination'
    } else {
      directive = 'Pick Start';
      className += ' picking-start';
    }
    return RD.div({ className: className },
      RD.h2(null, directive),
      Stations({
        start: start,
        destination: this.state.destination,
        onSelect: (station) => {
          if (start) {
            if (start.id === station.id) return;
            this.setState({ destination: station });
          } else {
            this.setState({ start: station });
          }
        }
      })
    );
  }

});
