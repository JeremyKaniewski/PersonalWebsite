import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: {eq: $slug}) {
      title
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
  return (
      <Layout>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.date}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </Layout>
  )
}

export default Blog