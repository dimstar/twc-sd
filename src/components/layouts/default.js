import React from 'react';

export default ({ children }) => {
  const header = '';
  const footer = '';

  return (
    <>
      {header}
      <main className="contain">
        {/* <!-- <section> --> */}
        {children}
        {/* <!-- </section> --> */}
      </main>
      {footer}
    </>
  );
};
