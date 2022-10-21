import React, { useEffect, useRef, useState } from "react"
import FullPageSnap from "react-scroll-snap"
import { isMobileOnly } from "react-device-detect"
import HomeHeader from "../views/home/HomeHeader"
import { allProjectsType } from "../core/queries"
import { useClient } from "../core/hooks"
import IconsCloud from "../views/skills/IconsCloud"

const Project = React.lazy(() => import("../views/projects/Project"))

const Site = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isSecondPage, setIsSecondPage] = useState(false)
  const isClient = useClient()

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
      enabled={isClient && !isMobileOnly}
    >
      <HomeHeader
        pageDownCallback={() => {
          if (ref.current) ref.current.goToPage(1, 750)
        }}
      />
      <IconsCloud expanded={isSecondPage} />
      {isClient &&
        projects.edges.map(p => (
          <React.Suspense key={p.node.title}>
            <Project mobile={isMobileOnly} {...p.node} />
          </React.Suspense>
        ))}
    </FullPageSnap>
  )
}

Site.propTypes = allProjectsType

export default Site
