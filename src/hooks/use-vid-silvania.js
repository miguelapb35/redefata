import { graphql, useStaticQuery } from 'gatsby'

const useVidSilvania = () => {
  const {
    allContentfulVideo: { nodes },
  } = useStaticQuery(graphql`
    query VideoSilvaniaQuery {
      allContentfulVideo(
        filter: { contentful_id: { eq: "5n5cuwK796NoiDLsfHDfQg" } }
      ) {
        nodes {
          video {
            file {
              url
            }
          }
          videoTitle
          id
          contentful_id
        }
      }
    }
  `)
  return nodes
}

export default useVidSilvania
