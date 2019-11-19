const SwapiAPI = require('./swapiAPI');

class SpeciesAPI extends SwapiAPI {
  constructor() {
    super('/species');
  }
}

module.exports = new SpeciesAPI();
