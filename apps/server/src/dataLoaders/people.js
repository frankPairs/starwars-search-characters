const dataSources = require('../dataSources');

exports.getPeople = peopleUrlList => {
  const peopleIdList = peopleUrlList.map(peopleUrl =>
    dataSources.people.getIdFromUrl(peopleUrl)
  );

  return Promise.all(
    peopleIdList.map(personId => dataSources.people.getOne(personId))
  );
};
