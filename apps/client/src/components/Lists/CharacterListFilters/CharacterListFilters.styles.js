import styled from 'styled-components';

const CharacterListFiltersStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xs} 0;

  .field {
    margin-right: ${props => props.theme.spacing.xs};

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacing.md}
    padding: ${props => props.theme.spacing.xs};

    .field {
      margin-bottom: ${props => props.theme.spacing.xs};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export { CharacterListFiltersStyles };
