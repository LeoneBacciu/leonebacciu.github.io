import React from "react"
import { ThemeProvider } from "styled-components"
import { isMobile, isMobileOnly } from "react-device-detect"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { Action, Fab } from "react-tiny-fab"
import MobileSite from "../browsers/MobileSite"
import DesktopSite from "../browsers/DesktopSite"
import { ReactComponent as SendIcon } from "../images/icons/send.svg"
import { ReactComponent as EmailIcon } from "../images/icons/email.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as DocumentIcon } from "../images/icons/document.svg"
import downloadFile from "../data/Leone Bacciu CV.pdf"

const darkTheme = {
  colors: {
    primary: "#fff",
    accent: "#f55600",

    label: "#fff",
    secondaryLabel: "#171717",

    systemBackground: "#212121",
  },
}

const openLink = link => window.open(link, "_blank")

const IndexPage = () => {
  const { allProjectsYaml } = useStaticQuery(graphql`
    query ProjectsData {
      allProjectsYaml {
        edges {
          node {
            title
            flags
            url
            preview {
              childImageSharp {
                horizontal: gatsbyImageData(
                  width: 800
                  layout: CONSTRAINED
                  placeholder: NONE
                )
                vertical: gatsbyImageData(
                  width: 400
                  layout: CONSTRAINED
                  placeholder: NONE
                )
              }
            }
            description
          }
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={darkTheme}>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Leone Bacciu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Leone Bacciu | My Personal website" />
        <meta name="theme-color" content={darkTheme.colors.accent} />
      </Helmet>
      {!isMobileOnly ? (
        <DesktopSite projects={allProjectsYaml} />
      ) : (
        <MobileSite projects={allProjectsYaml} />
      )}
      <Fab
        mainButtonStyles={{ backgroundColor: darkTheme.colors.accent }}
        icon={<SendIcon fill={darkTheme.colors.primary} />}
        event={isMobile ? "click" : "hover"}
      >
        <Action text="CV" onClick={() => openLink(downloadFile)}>
          <DocumentIcon />
        </Action>
        <Action
          text="Email"
          onClick={() => openLink("mailto:leonebacciu@gmail.com")}
        >
          <EmailIcon />
        </Action>
        <Action
          text="GitHub"
          onClick={() => openLink("https://github.com/LeoneBacciu")}
        >
          <GitHubIcon />
        </Action>
      </Fab>
    </ThemeProvider>
  )
}

export default IndexPage
