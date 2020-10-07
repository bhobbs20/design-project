import React from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Slider from '../components/Slider';
import Survery from "../components/Survey";



const IndexPage = ({data}) => {
  const{allAirtable: {nodes:projects}} = data;
  return (
      <Layout>
        <SEO title="Home" />
        <Hero  projects={projects} />
        <About />
        <Projects projects={projects} title="Latest Projects" />
        <Survery />
        <Slider  />
      </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
