import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import '../../assets/css/normalize.css';
import '../../assets/css/main.scss';

export default ({ children }) => {
  return (
    <>
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
