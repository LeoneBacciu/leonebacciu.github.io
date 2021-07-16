import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import Tooltip from "react-tooltip-lite"
import GoToButton from "./components/GoToButton"
import devices from "../../core/devices"

import { ReactComponent as PermaLinkIcon } from "../../images/icons/link.svg"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: ${props => props.theme.colors.label};
`

const ProjectImgPreview = styled.div`
  margin: auto 0;
  width: 90vw;
  height: 250px;

  @media (min-width: ${devices.tablet}) {
    width: 50vw;
    height: 50vh;
  }
`

const ProjectCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 300px;
  min-height: 500px;
`

const CaptionText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: fit-content;
`

const CaptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 5px 0;

  @media (min-width: ${devices.tablet}) {
    font-size: 1.7rem;
  }
`

const CaptionPermalink = styled.div`
  height: 25px;
  width: 25px;
  padding: 1px 0;
  cursor: pointer;

  & > svg {
    transition: all 500ms;
    fill: ${props => props.theme.colors.primary};
  }

  & > svg:hover {
    fill: ${props => props.theme.colors.accent};
    transform: scale(1.1);
  }
`

const CaptionFlagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`

const CaptionFlag = styled.div`
  padding: 4px 6px;
  margin: 4px;
  border: ${props => props.theme.colors.accent} 1px solid;
  border-radius: 5px;
  color: ${props => props.theme.colors.accent};
  font-size: 15px;
`

const Description = styled.div`
  font-size: 1.1rem;

  @media (min-width: ${devices.tablet}) {
    font-size: 1.3rem;
  }
`

const Project = ({ preview, title, flags, description, url, mobile }) => {
  const link = title.replace(" ", "").toLowerCase()

  const themeContext = useContext(ThemeContext)

  const fallbackCopyTextToClipboard = text => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
  }

  const onLinkClick = () => {
    const text = `${window.location.protocol}//${window.location.host}/#${link}`
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text)
    } else {
      navigator.clipboard.writeText(text).then()
    }
  }

  return (
    <ProjectContainer id={link}>
      <ProjectImgPreview>
        <GatsbyImage
          image={
            mobile
              ? preview.childImageSharp.vertical
              : preview.childImageSharp.horizontal
          }
          alt={`${title}image`}
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "contain" }}
        />
      </ProjectImgPreview>
      <ProjectCaption>
        <CaptionText>
          <CaptionTitle>
            {title}
            <Tooltip
              color={themeContext.colors.primary}
              background={themeContext.colors.secondaryLabel}
              content={<span>Copy link</span>}
            >
              <CaptionPermalink onClick={onLinkClick}>
                <PermaLinkIcon />
              </CaptionPermalink>
            </Tooltip>
          </CaptionTitle>
          <CaptionFlagsContainer>
            {flags.map(p => (
              <CaptionFlag key={p.substring(0, 4)}>{p}</CaptionFlag>
            ))}
          </CaptionFlagsContainer>
          <Description>{description}</Description>
          {url !== "" && <GoToButton url={url} />}
        </CaptionText>
      </ProjectCaption>
    </ProjectContainer>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  flags: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  preview: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
}

Project.defaultProps = {
  mobile: false,
}

export default Project
