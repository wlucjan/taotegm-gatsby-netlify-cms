import React from "react";
import BlogRoll from "../../components/BlogRoll";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `https://res.cloudinary.com/taotegm/image/upload/v1588540594/taotegm/brown-wooden-dock-surrounded-with-green-grass-near-mountain-808465_mewzem.jpg`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #000, -0.5rem 0 0 #000",
              backgroundColor: "#000",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
