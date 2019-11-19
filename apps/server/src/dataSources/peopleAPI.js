const SwapiAPI = require('./swapiAPI');

class PeopleAPI extends SwapiAPI {
  constructor() {
    super('/people');
  }
}

module.exports = new PeopleAPI();
