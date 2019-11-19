import { filterSpeciesByFilm, filterSpeciesByPerson } from 'selectors';

import {
  createRandomFilm,
  createRandomPerson,
  createRandomSpecies,
} from '../mocks';

describe('species selectors', () => {
  describe('filterSpeciesByFilm', () => {
    it('should return the same species when there is not film id', () => {
      const species = [createRandomSpecies(), createRandomSpecies()];
      const result = filterSpeciesByFilm(null, species);

      expect(result).toEqual(species);
    });

    it('should return species filter by film id', () => {
      const species = [
        createRandomSpecies({ films: [createRandomFilm({ id: 2 })] }),
        createRandomSpecies({ films: [createRandomFilm({ id: 2 })] }),
        createRandomSpecies({ films: [createRandomFilm({ id: 2 })] }),
        createRandomSpecies({ films: [createRandomFilm({ id: 1 })] }),
      ];
      const result = filterSpeciesByFilm(2, species);

      expect(result).toEqual([species[0], species[1], species[2]]);
    });
  });

  describe('filterSpeciesByPerson', () => {
    it('should return the same species when there is not person id', () => {
      const species = [createRandomSpecies(), createRandomSpecies()];
      const result = filterSpeciesByPerson(null, species);

      expect(result).toEqual(species);
    });

    it('should return species filter by person id', () => {
      const species = [
        createRandomSpecies({ people: [createRandomPerson({ id: 2 })] }),
        createRandomSpecies({ people: [createRandomPerson({ id: 3 })] }),
        createRandomSpecies({ people: [createRandomPerson({ id: 4 })] }),
        createRandomSpecies({ people: [createRandomPerson({ id: 3 })] }),
      ];
      const result = filterSpeciesByPerson(3, species);

      expect(result).toEqual([species[1], species[3]]);
    });
  });
});
