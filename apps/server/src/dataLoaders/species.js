const { BASE_URL } = require('../constants');
const dataSources = require('../dataSources');

exports.getSpecies = speciesUrlList => {
  const speciesIdList = speciesUrlList.map(speciesUrl =>
    dataSources.species.getIdFromUrl(speciesUrl)
  );

  return Promise.all(
    speciesIdList.map(speciesId => dataSources.species.getOne(speciesId))
  );
};
