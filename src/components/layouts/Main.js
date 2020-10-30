import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';

import '../../assets/css/normalize.css';
import '../../assets/css/main.scss';

export default ({ children }) => {
  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <main className="contain">
        {/* <!-- <section> --> */}
        {children}
        {/* <!-- </section> --> */}
      </main>
      <Footer />
    </>
  );
};
