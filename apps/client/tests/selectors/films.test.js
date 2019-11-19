import { filterFilmsByCharacter, filterFilmsBySpecies } from 'selectors';

import {
  createRandomFilm,
  createRandomPerson,
  createRandomSpecies,
} from '../mocks';

describe('films selectors', () => {
  describe('filterFilmsByCharacter', () => {
    it('should return the same films when there is not person id', () => {
      const films = [createRandomFilm(), createRandomFilm()];
      const result = filterFilmsByCharacter(null, films);

      expect(result).toEqual(films);
    });

    it('should return films filter by character id', () => {
      const films = [
        createRandomFilm({ characters: [createRandomPerson({ id: 2 })] }),
        createRandomFilm({ characters: [createRandomPerson({ id: 2 })] }),
        createRandomFilm({ characters: [createRandomPerson({ id: 2 })] }),
        createRandomFilm({ characters: [createRandomPerson({ id: 1 })] }),
      ];
      const result = filterFilmsByCharacter(2, films);

      expect(result).toEqual([films[0], films[1], films[2]]);
    });
  });

  describe('filterFilmsBySpecies', () => {
    it('should return the same films when there is not species id', () => {
      const films = [createRandomFilm(), createRandomFilm()];
      const result = filterFilmsBySpecies(null, films);

      expect(result).toEqual(films);
    });

    it('should return films filter by species id', () => {
      const films = [
        createRandomFilm({ species: [createRandomPerson({ id: 2 })] }),
        createRandomFilm({ species: [createRandomPerson({ id: 3 })] }),
        createRandomFilm({ species: [createRandomPerson({ id: 4 })] }),
        createRandomFilm({ species: [createRandomPerson({ id: 3 })] }),
      ];
      const result = filterFilmsBySpecies(3, films);

      expect(result).toEqual([films[1], films[3]]);
    });
  });
});
