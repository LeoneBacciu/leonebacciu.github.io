import React from "react"

import { Action, Fab } from "react-tiny-fab"
import { isMobile } from "react-device-detect"
import { withTheme } from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as SendIcon } from "../images/icons/send.svg"
import { ReactComponent as EmailIcon } from "../images/icons/email.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as DocumentIcon } from "../images/icons/document.svg"
import downloadFile from "../data/Leone Bacciu CV.pdf"

const openLink = link => window.open(link, "_blank")

const LazyFab = ({ theme }) => (
  <Fab
    mainButtonStyles={{ backgroundColor: theme.colors.accent }}
    icon={<SendIcon fill={theme.colors.primary} />}
    event={isMobile ? "click" : "hover"}
  >
    <Action text="Resume" onClick={() => openLink(downloadFile)}>
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
)

LazyFab.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.any,
}

export default withTheme(LazyFab)
