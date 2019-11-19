const Dataloader = require('dataloader');

const { getFilms } = require('./films');
const { getSpecies } = require('./species');
const { getPeople } = require('./people');

module.exports = () => ({
  getFilms: new Dataloader(getFilms),
  getSpecies: new Dataloader(getSpecies),
  getPeople: new Dataloader(getPeople),
});
