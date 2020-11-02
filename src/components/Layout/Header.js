import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';
// import external from '../assets/images/external.svg';
import ham from '../../assets/images/ham.svg';
// import globe from '../../assets/images/globe.svg';
import local from '../../assets/images/local.svg';
import external from '../../assets/images/external.svg';

const Header = () => {
  const [showHam, setShowHam] = useState(true);
  return (
    <header className="header flex flex-row fixed w-full" role="banner">
      <div className="contain flex flex-row ai-ctr justify-between">
        <div className="flex flex-row ai-ctr">
          <img
            alt=""
            aria-hidden="true"
            role="presentation"
            className="marg-r-2 m:hide"
            height="30"
            src={logo}
            width="30"
          />
          <h1 className="title">
            <a href="/">
              Tech <span className="black">Workers</span> Coalition
            </a>
          </h1>
        </div>

        <div className="flex flex-row ai-ctr">
          <div className="flex flex-row ai-ctr rel marg-r-2">
            <button className="flex" id="chapterBtn" type="button">
              <img
                alt="Click to render chapter navigation"
                height="18"
                src={local}
                width="13"
              />
            </button>
            <ul
              id="chapterNav"
              role="navigation"
              className="navOverlay abs hide list-style-none"
            >
              <li className="p-2 border-b-1">Join a Chapter</li>
            </ul>
          </div>

          <div className="flex flex-row ai-ctr rel">
            <button
              type="button"
              className="flex"
              id="navBtn"
              onClick={() => setShowHam(prevState => !prevState)}
            >
              <img
                alt="Click to render sub-page navigation"
                height="20"
                src={ham}
                width="20"
              />
            </button>
            <ul
              id="nav"
              className={`navOverlay abs list-style-none ${
                showHam ? 'hide' : ''
              }`}
              role="navigation"
            >
              <li>
                <a href="https://techworkerscoalition.org/subscribe">
                  Join the Slack
                </a>
              </li>
              <li>
                <a href="https://techworkerscoalition.org/community-guide/">
                  Community Guide
                </a>
              </li>
              <li>
                <a href="https://news.techworkerscoalition.org/subscribe/">
                  Newsletter
                </a>
              </li>
              <li className="flex flex-row ai-ctr">
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://sites.google.com/view/tech-workers-coalition/learning-club"
                >
                  Learning Clubs{' '}
                  <img alt="" src={external} width="14" height="14" />
                </a>
              </li>
              <li className="flex flex-row ai-ctr">
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://medium.com/tech-workers-coalition"
                >
                  Medium <img alt="" src={external} width="14" height="14" />
                </a>
              </li>
              <li className="flex flex-row ai-ctr">
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/techworkersco"
                >
                  Twitter <img alt="" src={external} width="14" height="14" />
                </a>
              </li>
              <li className="flex flex-row ai-ctr">
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/TechWorkersCoalition"
                >
                  Facebook <img alt="" src={external} width="14" height="14" />
                </a>
              </li>
              <li className="flex flex-row ai-ctr">
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://collectiveaction.tech/"
                >
                  CollectiveActions.Tech{' '}
                  <img alt="" src={external} width="14" height="14" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
