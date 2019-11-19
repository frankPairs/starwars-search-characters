import {
  filterPeopleByFilm,
  filterPeopleBySpecies,
  filterPeopleById,
} from 'selectors';

import {
  createRandomFilm,
  createRandomPerson,
  createRandomSpecies,
} from '../mocks';

describe('people selectors', () => {
  describe('filterPeopleByFilm', () => {
    it('should return the same people when there is not person id', () => {
      const people = [createRandomPerson(), createRandomPerson()];
      const result = filterPeopleByFilm(null, people);

      expect(result).toEqual(people);
    });

    it('should return people filter by film id', () => {
      const people = [
        createRandomPerson({ films: [createRandomFilm({ id: 2 })] }),
        createRandomPerson({ films: [createRandomFilm({ id: 4 })] }),
        createRandomPerson({ films: [createRandomFilm({ id: 4 })] }),
        createRandomPerson({ films: [createRandomFilm({ id: 2 })] }),
      ];
      const result = filterPeopleByFilm(2, people);

      expect(result).toEqual([people[0], people[3]]);
    });
  });

  describe('filterPeopleBySpecies', () => {
    it('should return the same people when there is not species id', () => {
      const people = [createRandomPerson(), createRandomPerson()];
      const result = filterPeopleByFilm(null, people);

      expect(result).toEqual(people);
    });

    it('should return people filter by species id', () => {
      const people = [
        createRandomPerson({ species: [createRandomSpecies({ id: 1 })] }),
        createRandomPerson({ species: [createRandomSpecies({ id: 1 })] }),
        createRandomPerson({ species: [createRandomSpecies({ id: 3 })] }),
        createRandomPerson({ species: [createRandomSpecies({ id: 4 })] }),
      ];
      const result = filterPeopleBySpecies(1, people);

      expect(result).toEqual([people[0], people[1]]);
    });
  });

  describe('filterPeopleById', () => {
    it('should return the same people when there is not person id', () => {
      const people = [createRandomPerson(), createRandomPerson()];
      const result = filterPeopleById(null, people);

      expect(result).toEqual(people);
    });

    it('should return people filter by species id', () => {
      const people = [
        createRandomPerson({ id: 1 }),
        createRandomPerson({ id: 2 }),
        createRandomPerson({ id: 3 }),
        createRandomPerson({ id: 4 }),
      ];
      const result = filterPeopleById(3, people);

      expect(result).toEqual([people[2]]);
    });
  });
});
