import styled, { keyframes } from "styled-components"
import devices from "../core/devices"

const UnderlineAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`

const AnimatedAccentUnderline = styled.span`
  display: inline-table;
  margin-left: auto;
  margin-right: auto;

  &:after {
    content: "";
    display: block;
    animation: ${UnderlineAnimation} 1.5s;
    animation-iteration-count: 1;

    border-bottom: ${props => props.theme.colors.accent} 2px solid;

    @media (min-width: ${devices.laptop}) {
      border-bottom: ${props => props.theme.colors.accent} 5px solid;
    }
  }
`

export default AnimatedAccentUnderline
