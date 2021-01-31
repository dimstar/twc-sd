import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

// import '../../assets/css/normalize.css';
// import '../../assets/css/main.scss';

export default ({ children }) => {
  return (
    <>
      <Helmet
        title="Tech Workers Coalition - San Diego Chapter"
        meta={[
          {
            name: 'description',
            content: 'Welcome to the TWC San Diego Chapter.'
          },
          {
            name: 'keywords',
            content: "Tech Worker's Coalition, Tech, Worker Solidarity"
          }
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
