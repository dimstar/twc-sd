import React from 'react';
import logo from '../../assets/images/logo.svg';

const MastHead = () => (
  <div className="flex-shrink-0">
    <img
      alt=""
      aria-hidden="true"
      role="presentation"
      height="30"
      src={logo}
      width="30"
    />
    <h1>
      <a href="/">
        Tech <span>Workers</span> Coalition{' '}
        <span style={{ display: 'inline-block' }}>San Diego</span>
      </a>
    </h1>
  </div>
);

export default MastHead;
