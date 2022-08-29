import { graphql, useStaticQuery } from 'gatsby'

const useLatestNoticia = () => {
  const {
    allContentfulNoticias: { nodes },
  } = useStaticQuery(graphql`
    query latestNoticiasQuery {
      allContentfulNoticias(
        sort: { fields: contentful_id, order: DESC }
        limit: 20
      ) {
        nodes {
          id
          title
          descripcion
          foto {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1600
              height: 1200
            )
          }
        }
      }
    }
  `)
  return nodes
}

export default useLatestNoticia
