import styled, { keyframes } from 'styled-components';

const offset = 130;

const dash = keyframes`
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -${offset};
  }  
`;

const LoadingStyles = styled.svg`
  transform: rotate(-90deg);
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
  fill: none;

  circle {
    stroke-dasharray: ${offset};
    stroke-dashoffset: ${offset};
    animation: ${dash} 1.5s infinite;
  }
`;

export { LoadingStyles };
