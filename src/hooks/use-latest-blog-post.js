import { graphql, useStaticQuery } from 'gatsby'

const useLatestPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query latestBlogLinksQiery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 20) {
        nodes {
          id
          title
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
          imagen {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 424
              height: 212
            )
          }
        }
      }
    }
  `)
  return nodes
}

export default useLatestPost
