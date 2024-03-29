import React, { useEffect, useRef, useState } from "react"
import FullPageSnap from "react-scroll-snap"
import { isMobileOnly } from "react-device-detect"
import animateScrollTo from "animated-scroll-to"
import HomeHeader from "../views/home/HomeHeader"
import IconsCloud from "../views/skills/IconsCloud"
import Project from "../views/projects/Project"
import { allProjectsType } from "../core/queries"

const DesktopSite = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isSecondPage, setIsSecondPage] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    if (!isSecondPage && currentPage === 1) setIsSecondPage(true)
  }, [currentPage])

  return (
    <FullPageSnap
      ref={ref}
      initialPage={p => setCurrentPage(p)}
      beforePageChange={(o, p) => setCurrentPage(p)}
      speedDown={1000}
      speedUp={600}
      enabled={!isMobileOnly}
    >
      <HomeHeader
        pageDownCallback={() => {
          if (!isMobileOnly && ref.current) ref.current.goToPage(1, 750)
          else animateScrollTo(window.innerHeight, { speed: 2000 }).then()
        }}
      />
      <IconsCloud expanded={isSecondPage} size={isMobileOnly ? 125 : 300} />
      {projects.edges.map(p => (
        <Project key={p.node.title} mobile={isMobileOnly} {...p.node} />
      ))}
    </FullPageSnap>
  )
}

DesktopSite.propTypes = allProjectsType

export default DesktopSite
