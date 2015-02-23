import _ from 'lodash';
import septaApi from './septa-api';

const STATIONS_URL = 'locations/get_locations.php';
const PROPS = {
  lat: '40.0047527',
  lon: '-75.1180329',
  type: 'rail_stations',
  radius: 100
}

export default {

  getStations () {
    return septaApi({ url: STATIONS_URL, props: PROPS }).then((stations) => {
      return _.sortBy(_.map(stations, this._stationDetails), 'name');
    });
  },

  _stationDetails (station) {
    return {
      id: station.location_id,
      name: station.location_name
    };
  }

};
