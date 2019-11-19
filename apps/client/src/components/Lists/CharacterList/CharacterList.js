import React from 'react';

import { peopleList } from 'selectors';
import { Loading } from 'components/Icons';
import { useCharacterList } from './useCharacterList';
import {
  CharacterListStyles,
  ErrorStyles,
  LoadingStyles,
} from './CharacterList.styles';

function CharacterList() {
  const { people, loading, error } = useCharacterList();

  if (error) {
    return (
      <ErrorStyles>
        <p>We could not retrieve the Star Wars characters, please try later.</p>
      </ErrorStyles>
    );
  }

  if (loading) {
    return (
      <LoadingStyles>
        <Loading />
      </LoadingStyles>
    );
  }

  return (
    <CharacterListStyles>
      {people.map(person => (
        <div className="card" data-testid="character-card" key={person.id}>
          <div className="overlap">
            <p>{person.name} </p>
          </div>
          <img loading="lazy" src={person.image} alt={person.name} />
        </div>
      ))}
    </CharacterListStyles>
  );
}

export { CharacterList };
