const { RESTDataSource } = require('apollo-datasource-rest');
const queryString = require('query-string');
const { flatten } = require('ramda');
const { pathToRegexp } = require('path-to-regexp');

const { BASE_URL } = require('../constants');

class SwapiAPI extends RESTDataSource {
  constructor(endpoint) {
    super();
    this.baseURL = `${BASE_URL}${endpoint}`;
  }

  getIdFromUrl(url) {
    const regexpGetOne = pathToRegexp(`${this.baseURL}/:id/`);
    return regexpGetOne.exec(url)[1];
  }

  async getAll(search = '', pagination = { offset: 1 }) {
    const queryParams = { search, page: pagination.offset };

    const response = await this.get(`/?${queryString.stringify(queryParams)}`);

    if (!response) {
      return [];
    }

    const totalPages = Math.round(response.count / response.results.length);

    let promises = [response];

    for (let i = pagination.offset + 1; i <= totalPages; i++) {
      queryParams.page = i;
      promises.push(this.get(`/?${queryString.stringify(queryParams)}`));
    }

    const responses = await Promise.all(promises);

    return {
      results: flatten(responses.map(response => response.results)),
    };
  }

  async getOne(id) {
    return this.get(`/${id}/`);
  }
}

module.exports = SwapiAPI;
