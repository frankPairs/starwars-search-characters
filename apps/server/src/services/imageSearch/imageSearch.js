const charactersImages = require('./charactersImages.json');

const imageSearch = {
  search(characterName) {
    return charactersImages[characterName] || null;
  },
};

module.exports = imageSearch;
