import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as ArrowEast } from "../../../images/icons/arrow_east.svg"

const GoToContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const GoToText = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: 25px;
  padding: 4px 10px 3px;
  box-shadow: inset 0 -3px 0 ${props => props.theme.colors.accent};
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: inset 0 -50px 0 ${props => props.theme.colors.accent};
  }
`

const GoToArrow = styled.span`
  padding-top: 3px;
  padding-left: 10px;
`

const GoToButton = ({ url }) => (
  <GoToContainer>
    <GoToText rel="noreferrer" href={url} target="_blank">
      Go To Project
      <GoToArrow>
        <ArrowEast
          fill="white"
          height="25px"
          width="25px"
          viewBox="0 0 24 24"
        />
      </GoToArrow>
    </GoToText>
  </GoToContainer>
)

GoToButton.propTypes = {
  url: PropTypes.string.isRequired,
}

export default GoToButton
