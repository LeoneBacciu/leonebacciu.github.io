import React, { useMemo } from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { randomIntInRange, shuffle } from "../../../utils"

const wobbleAnimation = steps => keyframes`
  0% {
    margin-left: ${steps[0][0]}px;
    margin-top: ${steps[0][1]}px;
  }

  33% {
    margin-left: ${steps[1][0]}px;
    margin-top: ${steps[1][1]}px;
  }

  66% {
    margin-left: ${steps[2][0]}px;
    margin-top: ${steps[2][1]}px;
  }

  100% {
    margin-left: ${steps[0][0]}px;
    margin-top: ${steps[0][1]}px;
  }
`

const BaseIconContainer = styled.div`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props =>
    props.color !== undefined ? props.color : "#fff"};
  transition: all 750ms, color 250ms ease-in-out,
    background-color 250ms ease-in-out;
  animation: ${props => wobbleAnimation(props.steps)} 6s ease-in-out infinite;
  animation-delay: ${props => props.animationDelay}ms;

  &:hover {
    animation-play-state: paused;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.systemBackground};
    margin-top: 0;
    padding: 5px 25px;
    width: 200px;
    height: 250px;
    border-radius: 5px;
  }
`

const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  opacity: 0;

  ${BaseIconContainer}:hover & {
    transition: opacity 200ms;
    transition-delay: 650ms;
    opacity: 1;
  }
`

const IconTitle = styled.b`
  padding-bottom: 10px;
`

const PreviewIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  padding: 10px;
  margin: auto;
  background-color: ${props => props.backgroundColor};
`

const FloatingIcon = ({ title, icon, content, color }) => {
  const steps = useMemo(
    () =>
      shuffle([
        [0, 0],
        [-10, -10],
        [10, -10],
      ]),
    []
  )

  const animationDelay = randomIntInRange(-5000, 0)

  return (
    <BaseIconContainer
      color={color}
      steps={steps}
      animationDelay={animationDelay}
    >
      <PreviewIcon backgroundColor={color}>{icon}</PreviewIcon>
      <IconContent>
        <IconTitle>{title}</IconTitle>
        {content}
      </IconContent>
    </BaseIconContainer>
  )
}

FloatingIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default React.memo(FloatingIcon)
