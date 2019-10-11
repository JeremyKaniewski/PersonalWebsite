import React from 'react';
import ProjectsStyle from './projects.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Projects = () => {
    const data = useStaticQuery(graphql `
        query {
            allContentfulProjects (
                sort:{
                    fields:date,
                    order:DESC
                }  
                limit: 3
            ) {
            edges {
                node {
                title
                slug
                date(formatString:"MMMM Do, YYYY")
                }
            }
            }
        } 
    `)

    var viewMore

    if (data.allContentfulProjects.edges.length >= 3) {
        viewMore = <button className={ProjectsStyle.loadMore}>View more</button>
    } else {
        viewMore = null
    }

    return (
        <div className={ProjectsStyle.wrapper}>
            <h1 className={ProjectsStyle.title}>Projects</h1>
            <div className={ProjectsStyle.ProjectsContainer}>
                <ol className={ProjectsStyle.projects}>
                    {data.allContentfulProjects.edges.map((edge) => {
                        return (
                            <li className={ProjectsStyle.project}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
                { viewMore } 
            </div>
        </div>
    )
}

export default Projects