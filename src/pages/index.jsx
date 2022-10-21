import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Site from "../browsers/Site"
import { useClient } from "../core/hooks"

const darkTheme = {
  colors: {
    primary: "#fff",
    accent: "#f55600",

    label: "#fff",
    secondaryLabel: "#171717",

    systemBackground: "#212121",
  },
}

const LazyFab = React.lazy(() => import("../components/LazyFab"))

export const Head = () => (
  <>
    <title>Leone Bacciu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Leone Bacciu | My Personal website" />
    <meta name="theme-color" content={darkTheme.colors.accent} />
    <link rel="canonical" href="https://leonebacciu.github.io" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap"
      rel="stylesheet"
    />
  </>
)

const IndexPage = () => {
  const isClient = useClient()

  const { allProjectsYaml } = useStaticQuery(graphql`
    query ProjectsData {
      allProjectsYaml(sort: { fields: order }) {
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
      <Site projects={allProjectsYaml} />
      {isClient && (
        <React.Suspense>
          <LazyFab theme={darkTheme} />
        </React.Suspense>
      )}
    </ThemeProvider>
  )
}

export default IndexPage
