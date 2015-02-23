require('./stations.styl');

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import stationsStore from './stations-store';

const RD = React.DOM;

export default React.createClass({

  mixins: [Reflux.connect(stationsStore, 'stations')],

  render () {
    let content;
    if (!this.state.stations) {
      content = RD.p(null, 'Loading stations...');
    } else if (!this.state.stations.length) {
      content = RD.p(null, 'No stations found');
    } else {
      content = RD.ul(null, _.map(this.state.stations, (station) => {
        let className = '';
        if (this._matchesPicked('start', station.id)) {
          className = 'start';
        } else if (this._matchesPicked('destination', station.id)) {
          className = 'destination';
        }

        return RD.li({
          key: station.id,
          className: className,
          onClick: _.partial(this.props.onSelect, station)
        }, station.name);
      }));
    }

    return RD.div({ className: 'stations' }, content);
  },

  _matchesPicked (type, id) {
    return this.props[type] && this.props[type].id && this.props[type].id === id;
  }

});
