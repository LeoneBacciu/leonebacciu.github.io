import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as WaveEmoji } from "../../images/emojis/wave_hand_u1f44b.svg"
import presentationData from "../../data/presentation"
import AccentUnderline from "../../components/AccentUnderline"
import ArrowDown from "./components/ArrowDown"
import devices from "../../core/devices"

const WaveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(20deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px 20px 10vh;
  color: ${props => props.theme.colors.label};

  @media (min-width: ${devices.tablet}) {
    padding: 120px 120px 0;
    height: 100vh;
  }
`

const HeaderText = styled.div`
  flex-grow: 1;
`

const HeaderArrowContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const HeaderGreeting = styled.h1`
  font-size: 3rem;
  padding-bottom: 1.8rem;
`

const HeaderName = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.7rem;

  @media (min-width: ${devices.tablet}) {
    font-size: 2.5rem;
  }
`

const HeaderSubtitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (min-width: ${devices.tablet}) {
    font-size: 1.7rem;
  }
`

const WaveHandEmoji = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  margin-left: 1rem;
  animation: ${WaveAnimation} 2s ease-in-out;
  animation-iteration-count: 1;
  transform-origin: bottom right;
`

const HeaderList = styled.ul`
  margin-left: 2ch;
`

const HeaderParagraph = styled.li`
  font-size: 1.4rem;
  padding-top: 1.5rem;

  @media (min-width: ${devices.tablet}) {
    font-size: 2rem;
  }
`

const HomeHeader = ({ pageDownCallback }) => (
  <HeaderContainer>
    <HeaderText>
      <HeaderGreeting>
        {presentationData.greeting}!
        <WaveHandEmoji>
          <WaveEmoji />
        </WaveHandEmoji>
      </HeaderGreeting>
      <HeaderName>
        I&#39;m <AccentUnderline>Leone Bacciu</AccentUnderline>,
      </HeaderName>
      <HeaderSubtitle>{presentationData.subtitle}</HeaderSubtitle>
      <HeaderList>
        {presentationData.paragraphs.map(p => (
          <HeaderParagraph key={p.substring(0, 4)}>{p}</HeaderParagraph>
        ))}
      </HeaderList>
    </HeaderText>
    <HeaderArrowContainer>
      <ArrowDown pageDownCallback={pageDownCallback} />
    </HeaderArrowContainer>
  </HeaderContainer>
)

HomeHeader.propTypes = {
  pageDownCallback: PropTypes.func.isRequired,
}

export default HomeHeader
