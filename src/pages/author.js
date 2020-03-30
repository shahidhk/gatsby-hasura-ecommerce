import { graphql, Link } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/packages/gatsby-source-graphql/">
        Using gatsby-source-graphql
      </a>
    </p>
    <div>
      {data.hasura.author.map((author, index) => (
        <div key={index}>
          <h2>{author.name}</h2>
        </div>
      ))}
    </div>
  </div>
)

export const query = graphql`
query {
  hasura {
    author {
      id
      name
    }
  }
}
`
