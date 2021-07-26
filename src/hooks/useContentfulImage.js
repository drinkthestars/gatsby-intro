import { graphql, useStaticQuery } from 'gatsby'

/**
 * From https://github.com/contentful/rich-text/issues/61#issuecomment-817196290
 * Utility component that gets the contentful asset using the sys.id as a reference.
 * 
 * @param {string} assetUrl Asset's URL 
 * @returns The associated Asset
 */
export const useContentfulImage = (assetUrl) => {
    const { assets } = useStaticQuery(
        graphql`
            query CONTENTFUL_IMAGE_QUERY {
                assets: allContentfulAsset {
                    edges {
                        node {
                            contentful_id
                            title
                            fluid(maxWidth: 200, quality: 85) {
                                ... GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        `
    )
    return assets.edges.find(({ node }) => node.contentful_id === assetUrl)
}