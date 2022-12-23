const path = require("path")
const { copyLibFiles } = require("@builder.io/partytown/utils")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query packages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/pricing/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/packageDetails.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"))
}
