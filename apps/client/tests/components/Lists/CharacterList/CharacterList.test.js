import React from 'react';

import { CharacterList, useCharacterList } from 'components/Lists';

import { renderWithThemeProvider, createRandomPerson } from '../../../mocks';

jest.mock('components/Lists/CharacterList/useCharacterList');

function getWrapper() {
  return renderWithThemeProvider(<CharacterList />);
}

describe('<CharacterList />', () => {
  it('should show the Loading component when list is loading', () => {
    useCharacterList.mockReturnValueOnce({ loading: true });

    const { getByTestId } = getWrapper();

    getByTestId('loading');
  });

  it('it should show an error when character query failed', () => {
    useCharacterList.mockReturnValueOnce({
      loading: false,
      error: new Error('error'),
    });

    const { getByText } = getWrapper();

    getByText(
      'We could not retrieve the Star Wars characters, please try later.'
    );
  });

  it('it should show character information when request was successfully', () => {
    const mockPeople = [createRandomPerson(), createRandomPerson()];

    useCharacterList.mockReturnValueOnce({
      loading: false,
      error: null,
      people: mockPeople,
    });

    const { getByText, getByAltText } = getWrapper();

    getByText(mockPeople[0].name);
    getByText(mockPeople[1].name);
    expect(getByAltText(mockPeople[0].name).src).toBe(mockPeople[0].image);
    expect(getByAltText(mockPeople[1].name).src).toBe(mockPeople[1].image);
  });
});
