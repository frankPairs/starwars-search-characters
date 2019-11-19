import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useCharacterList, CharacterListContext } from 'components/Lists';
import { usePeopleListQuery } from 'queries';
import {
  createRandomPerson,
  createRandomFilm,
  createRandomSpecies,
} from '../../../mocks';

jest.mock('queries');

const getWrapper = overrideValues => ({ children }) => (
  <CharacterListContext.Provider
    value={{
      filters: {
        person: null,
        film: null,
        species: null,
      },
      updateFilter: jest.fn(),
      ...overrideValues,
    }}
  >
    {children}
  </CharacterListContext.Provider>
);

describe('useCharacterList', () => {
  it('should filter people by film id', () => {
    const film = '1';
    const mockPeople = [
      createRandomPerson({ films: [createRandomFilm({ id: '2' })] }),
      createRandomPerson({ films: [createRandomFilm({ id: '1' })] }),
      createRandomPerson({ films: [createRandomFilm({ id: '1' })] }),
    ];
    const wrapper = getWrapper({ filters: { film } });

    usePeopleListQuery.mockReturnValueOnce({ data: { people: mockPeople } });
    const { result } = renderHook(() => useCharacterList(), { wrapper });

    expect(result.current.people).toEqual([mockPeople[1], mockPeople[2]]);
  });

  it('should filter people by species id', () => {
    const species = '4';
    const mockPeople = [
      createRandomPerson({ species: [createRandomSpecies({ id: '2' })] }),
      createRandomPerson({ species: [createRandomSpecies({ id: '4' })] }),
      createRandomPerson({ species: [createRandomSpecies({ id: '8' })] }),
    ];
    const wrapper = getWrapper({ filters: { species } });

    usePeopleListQuery.mockReturnValueOnce({ data: { people: mockPeople } });
    const { result } = renderHook(() => useCharacterList(), { wrapper });

    expect(result.current.people).toEqual([mockPeople[1]]);
  });

  it('should filter people by person id', () => {
    const person = '3';
    const mockPeople = [
      createRandomPerson({ id: '1' }),
      createRandomPerson({ id: '2' }),
      createRandomPerson({ id: '3' }),
    ];
    const wrapper = getWrapper({ filters: { person } });

    usePeopleListQuery.mockReturnValueOnce({ data: { people: mockPeople } });
    const { result } = renderHook(() => useCharacterList(), { wrapper });

    expect(result.current.people).toEqual([mockPeople[2]]);
  });

  it('should filter people by person, film and species', () => {
    const filters = { person: '2', species: '4', film: '2' };
    const mockPeople = [
      createRandomPerson({
        id: '1',
        films: [createRandomFilm({ id: '2' })],
        species: [createRandomSpecies({ id: '1' })],
      }),
      createRandomPerson({
        id: '2',
        films: [createRandomFilm({ id: '2' })],
        species: [createRandomSpecies({ id: '4' })],
      }),
      createRandomPerson({
        id: '3',
        films: [createRandomFilm({ id: '3' })],
        species: [createRandomSpecies({ id: '5' })],
      }),
    ];
    const wrapper = getWrapper({ filters });

    usePeopleListQuery.mockReturnValueOnce({ data: { people: mockPeople } });
    const { result } = renderHook(() => useCharacterList(), { wrapper });

    expect(result.current.people).toEqual([mockPeople[1]]);
  });

  it('should return an empty array when no filter matches', () => {
    const filters = { person: '4', species: '4', film: '2' };
    const mockPeople = [
      createRandomPerson({
        id: '1',
        films: [createRandomFilm({ id: '2' })],
        species: [createRandomSpecies({ id: '1' })],
      }),
      createRandomPerson({
        id: '2',
        films: [createRandomFilm({ id: '4' })],
        species: [createRandomSpecies({ id: '2' })],
      }),
      createRandomPerson({
        id: '3',
        films: [createRandomFilm({ id: '3' })],
        species: [createRandomSpecies({ id: '5' })],
      }),
    ];
    const wrapper = getWrapper({ filters });

    usePeopleListQuery.mockReturnValueOnce({ data: { people: mockPeople } });
    const { result } = renderHook(() => useCharacterList(), { wrapper });

    expect(result.current.people).toEqual([]);
  });
});
