const SwapiAPI = require('./swapiAPI');

class FilmsAPI extends SwapiAPI {
  constructor() {
    super('/films');
  }
}

module.exports = new FilmsAPI();
