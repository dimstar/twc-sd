import React from 'react';

import logo from '../../assets/images/logo.svg';
// import external from '../assets/images/external.svg';
import ham from '../../assets/images/ham.svg';
import globe from '../../assets/images/globe.svg';
import local from '../../assets/images/local.svg';

const Header = () => {
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
            <button className="flex flex-row ai-ctr" id="langBtn" type="button">
              <img
                alt="Click to choose a language"
                height="16"
                className="marg-r-1"
                src={globe}
                width="16"
              />
              en
            </button>
            <ul id="langNav" className="navOverlay abs hide list-style-none">
              {/* {% for lang in site.languages %}
                <li>
                  {% if site.lang == lang %}
                    <div class="p-2 border-b-1">
                      {% t langs.{{ lang }} %}
                    </div>
                  {% else %}
                    <a href="{% tl {{ page.namespace }} {{ lang }} %}">
                      {% t langs.{{ lang }} %}
                    </a>
                  {% endif %}
                </li>
              {% endfor %} */}
            </ul>
          </div>

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
              {/* {% for link in site.chapters %}
                {% if link.newTab %}
                  <li class="flex flex-row ai-ctr">
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href="{{ link.url }}">
                      {{ link.text }} <img
                        alt=""
                        src="/assets/img/external.svg"
                        height="14"
                        width="14"
                      />
                    </a>
                  </li>
                  {% else %}
                    <li>
                      <a href="{{ link.url }}">{{ link.text }}</a>
                    </li>
                  {% endif %}
                </li>
              {% endfor %} */}
            </ul>
          </div>

          <div className="flex flex-row ai-ctr rel">
            <button type="button" className="flex" id="navBtn">
              <img
                alt="Click to render sub-page navigation"
                height="20"
                src={ham}
                width="20"
              />
            </button>
            <ul
              id="nav"
              className="navOverlay abs hide list-style-none"
              role="navigation"
            >
              {/* {% for link in site.links %}
                {% if link.newTab %}
                  <li class="flex flex-row ai-ctr">
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href="{{ link.url }}">
                      {{ link.text }} <img
                        alt=""
                        src="/assets/img/external.svg"
                        height="14"
                        width="14"
                      />
                    </a>
                  </li>
                  {% else %}
                    <li>
                      <a href="{{ link.url }}">{{ link.text }}</a>
                    </li>
                  {% endif %}
                </li>
              {% endfor %} */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
