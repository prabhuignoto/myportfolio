import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../layouts/index.css';
import '../layouts/index.scss';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500' },
          ]}
        />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.any,
};

export default Layout;
