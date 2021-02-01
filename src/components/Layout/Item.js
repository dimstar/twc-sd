import React from 'react';

import externalIcon from '../../assets/images/external.svg';

/**
 * Item for the Menu that renders a link
 * @param {children, href, blank} props
 */
const Item = ({ children, href, blank }) => {
  // if blank true, set other props
  const blankProps = blank
    ? { rel: 'nofollow noopener noreferrer', target: '_blank' }
    : {};
  return (
    <a
      href={href}
      className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...blankProps}
    >
      {children}
      {!blank || (
        <img
          className="inline-block mx-2 text-white"
          alt="External Link"
          src={externalIcon}
          width="14"
          height="14"
        />
      )}
    </a>
  );
};

export default Item;
