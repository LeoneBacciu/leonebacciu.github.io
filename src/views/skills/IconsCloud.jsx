import React, { useMemo } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import TagSphere from "react-tag-sphere"
import FloatingIcon from "./components/FloatingIcon"
import skillsData from "../../data/skills"
import AccentUnderline from "../../components/AccentUnderline"
import InfoButton from "./components/InfoButton"
import { useMobile } from "../../core/hooks"

const PageContainer = styled.div`
  position: relative;
  height: ${props => (props.mobile ? "100vh" : "100%")};
  width: 100%;
`

const CloudContainer = styled.div`
  position: absolute;
  top: calc(50% - ${props => props.diameter / 2}px);
  left: calc(50% - ${props => props.diameter / 2}px);
  transition: transform 750ms cubic-bezier(1, 1, 0.5, 0.8);
  transition-delay: 800ms;
  transform: scale(${props => props.scale});
`

const Title = styled.div`
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  text-align: center;
  font-size: 40px;
  color: ${props => props.theme.colors.label};
`

const IconsCloud = ({ expanded }) => {
  const isMobile = useMobile()

  const [diameter, radius] = useMemo(() => {
    const rad = isMobile ? 125 : 300
    return [rad * 2 + 50, rad]
  }, [isMobile])

  return (
    <PageContainer mobile={isMobile}>
      <CloudContainer scale={expanded ? "1" : "0"} diameter={diameter}>
        <TagSphere speed={0.6} maxSpeed={0.7} radius={radius} margin={25}>
          {skillsData.icons.map(d => (
            <FloatingIcon key={d.title} {...d} />
          ))}
        </TagSphere>
      </CloudContainer>

      <InfoButton>
        <p>
          <b>Like what you see?</b>
        </p>
        <p>
          It will soon be a <b>npm</b> package!
        </p>
      </InfoButton>
      <Title>
        My <AccentUnderline>Skills</AccentUnderline>
      </Title>
    </PageContainer>
  )
}

IconsCloud.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

export default React.memo(IconsCloud)
