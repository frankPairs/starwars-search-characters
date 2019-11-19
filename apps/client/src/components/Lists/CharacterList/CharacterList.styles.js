import styled from 'styled-components';

const CharacterListStyles = styled.div`
  display: grid;
  width: 100%;
  grid-column-gap: ${props => props.theme.spacing.sm};
  grid-row-gap: ${props => props.theme.spacing.sm};
  grid-template-columns: repeat(4, 1fr);

  .card {
    position: relative;

    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
    }

    .overlap {
      background: ${props => props.theme.colors.secondary};
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      opacity: 0;
      transition: opacity 600ms ease-in-out;

      p {
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.fontSize.md};
        text-align: center;
        margin-top: ${props => props.theme.spacing.md};
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ErrorStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xxl};

  p {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.sm};
    text-align: center;
  }
`;

const LoadingStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xxl};
`;

export { CharacterListStyles, ErrorStyles, LoadingStyles };
