import React, { useEffect } from "react"
import downloadFile from "../data/LeoneBacciuCV.pdf"

const Cv = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.open(downloadFile, "_self")
    }
  }, [])
  return <div />
}

export default Cv
