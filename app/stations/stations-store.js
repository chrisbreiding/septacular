const Reflux = require('reflux');
const stationsService = require('../services/stations');

export default Reflux.createStore({

  init () {
    stationsService.getStations().then((stations) => {
      this.trigger(stations);
    });
  },

  getInitialState () {
    return { stations: null };
  }

});
