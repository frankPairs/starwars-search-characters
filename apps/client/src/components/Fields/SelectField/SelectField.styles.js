import styled from 'styled-components';

const SelectFieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;

  label {
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.xxs};
  }

  select {
    border-radius: 0.3em;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    appearance: none;
    height: 40px;
    font-size: ${props => props.theme.fontSize.xs};
    padding: 0 ${props => props.theme.spacing.xxs};
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    label {
      font-size: ${props => props.theme.fontSize.xs};
    }

    select {
      max-width: 300px;
    }
  }
`;

export { SelectFieldStyles };
