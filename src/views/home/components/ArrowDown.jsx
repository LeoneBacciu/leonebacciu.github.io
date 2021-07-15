import React, { useContext } from "react"
import styled, { keyframes, ThemeContext } from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as ArrowSVG } from "../../../images/icons/arrow_down.svg"

const animationDelay = 5000

const backgroundAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  35% {
    transform: translateY(-50px);
  }

  80% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
`

const iconAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(12px);
  }

  100% {
    transform: translateY(0);
  }
`

const ArrowBackground = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.primary};
  animation: ${backgroundAnimation} 1s ease-in-out;
  animation-iteration-count: 1;
  animation-delay: ${animationDelay}ms;
  cursor: pointer;
`

const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${iconAnimation} 500ms;
  animation-iteration-count: 1;
  animation-delay: ${animationDelay + 725}ms;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.2);
  }
`

const ArrowDown = ({ pageDownCallback }) => {
  const themeContext = useContext(ThemeContext)
  return (
    <ArrowBackground onClick={pageDownCallback}>
      <ArrowIcon>
        <ArrowSVG
          fill={themeContext.colors.accent}
          height="35"
          width="35"
          viewBox="0 0 24 24"
        />
      </ArrowIcon>
    </ArrowBackground>
  )
}

ArrowDown.propTypes = {
  pageDownCallback: PropTypes.func.isRequired,
}

export default ArrowDown
