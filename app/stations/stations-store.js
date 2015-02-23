import Reflux from 'reflux';
import stationsService from '../services/stations';

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
