const reqwest = require('reqwest');

const BASE_URL = 'http://www3.septa.org/hackathon/';

export default function (options) {
  return reqwest({
    url: `${BASE_URL}${options.url}`,
    data: options.props,
    type: 'jsonp'
  }).fail((err) => {
    throw err;
  });
}
