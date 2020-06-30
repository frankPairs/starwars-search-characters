const dataSources = require('../dataSources');

exports.getFilms = filmUrlList => {
  const filmIdList = filmUrlList.map(filmUrl =>
    dataSources.films.getIdFromUrl(filmUrl)
  );

  return Promise.all(
    filmIdList.map(filmId => dataSources.films.getOne(filmId))
  );
};
