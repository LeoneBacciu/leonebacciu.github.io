import PropTypes from "prop-types"

export const horizontalShape = PropTypes.shape({
  height: PropTypes.number.isRequired,
  images: PropTypes.shape({
    fallback: PropTypes.shape({
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }).isRequired,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        sizes: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
})

export const allProjectsType = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          description: PropTypes.string.isRequired,
          flags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          preview: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              horizontal: horizontalShape.isRequired,
              vertical: horizontalShape.isRequired,
            }).isRequired,
          }).isRequired,
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}
