import React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/Hero';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Hero />
      <About />


  
  </Layout>
)

export default IndexPage;
