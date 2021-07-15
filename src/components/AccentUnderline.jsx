import styled from "styled-components"
import devices from "../core/devices"

const AccentUnderline = styled.span`
  border-bottom: ${props => props.theme.colors.accent} 2px solid;

  @media (min-width: ${devices.laptop}) {
    border-bottom: ${props => props.theme.colors.accent} 5px solid;
  }
`

export default AccentUnderline
