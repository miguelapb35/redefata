import { graphql, useStaticQuery } from 'gatsby'

const useTextoIntroduccion = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulIntroduccion {
        texto
      }
    }
  `)
  return data
}

export default useTextoIntroduccion
