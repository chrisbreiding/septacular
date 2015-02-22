require('./stations.styl');

const React = require('react');
const Reflux = require('reflux');
const _ = require('lodash');
const stationsStore = require('./stations-store');

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
        return RD.li({ key: station.id }, station.name);
      }));
    }

    return RD.div({ className: 'stations' }, content);
  }

});
