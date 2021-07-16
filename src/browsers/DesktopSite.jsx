import React, { useEffect, useRef, useState } from "react"
import FullPageSnap from "react-full-page-snap"
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
    >
      <HomeHeader
        pageDownCallback={() => {
          if (ref.current) ref.current.goToPage(1, 750)
        }}
      />
      <IconsCloud expanded={isSecondPage} size={300} />
      {projects.edges.map(p => (
        <Project key={p.node.title} {...p.node} />
      ))}
    </FullPageSnap>
  )
}

DesktopSite.propTypes = allProjectsType

export default DesktopSite
