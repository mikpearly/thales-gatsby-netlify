import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/andrew-seaman--m88z7ily-w-unsplash.jpg')`,
            backgroundPosition: 'center',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:  '#f09b0d 0.5rem 0px 0px, #f09b0d -0.5rem 0px 0px',
              backgroundColor: '#f09b0d',
              color: 'white',
              padding: '1rem',
            }}
          >
            News & stories
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
    )
  }
}
