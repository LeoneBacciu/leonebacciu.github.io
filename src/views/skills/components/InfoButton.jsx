import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as ArrowSVG } from "../../../images/icons/help_outline.svg"

const Container = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  transition: all 1s;
  z-index: 15;

  &:hover {
    left: 25px;
    bottom: 25px;
  }
`

const Content = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => props.color};
  opacity: 0.5;
  color: white;
  transition: all 500ms;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > {
    opacity: 1;
    transition: opacity 500ms 1s;
  }

  ${Container}:hover & {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 5px;
    background-color: white;
    opacity: 1;
    padding: 10px;
    color: black;
  }

  ${Container}:hover & > :first-child {
    display: none;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  height: 0;
  transition: opacity 200ms;
  transition-delay: -1s;

  ${Container}:hover & {
    height: initial;
    transition-delay: 500ms;
    opacity: 1;
  }

  & p {
    padding: 5px;
  }
`

const InfoButton = ({ children }) => (
  <Container>
    <Content width={300} height={200} size={50} color="purple">
      <ArrowSVG fill="#fff" />
      <TextContainer>{children}</TextContainer>
    </Content>
  </Container>
)

InfoButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default InfoButton
