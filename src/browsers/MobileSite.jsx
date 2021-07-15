import React from "react"
import animateScrollTo from "animated-scroll-to"
import HomeHeader from "../views/home/HomeHeader"
import IconsCloud from "../views/skills/IconsCloud"
import Project from "../views/projects/Project"
import { allProjectsType } from "../core/queries"

const MobileSite = ({ projects }) => (
  <main>
    <HomeHeader
      pageDownCallback={() =>
        animateScrollTo(window.innerHeight, { speed: 2000 })
      }
    />
    <IconsCloud expanded size={125} mobile />
    {projects.edges.map(p => (
      <Project key={p.node.title} mobile {...p.node} />
    ))}
  </main>
)

MobileSite.propTypes = allProjectsType

export default MobileSite
