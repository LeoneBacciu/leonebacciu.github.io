import { useEffect, useLayoutEffect, useState } from "react"
import { isMobileOnly } from "react-device-detect"

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

export const useClient = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(
      !!(
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement
      )
    )
  }, [])
  return isClient
}

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(isMobileOnly)
  }, [])
  return isMobile
}
