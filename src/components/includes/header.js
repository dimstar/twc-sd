// TODO: Port into react comopnents
<header class="header flex flex-row fixed w-full" role="banner">
  <div class="contain flex flex-row ai-ctr justify-between">
    <div class="flex flex-row ai-ctr">
      <img
        alt=""
        aria-hidden="true"
        role="presentation"
        class="marg-r-2 m:hide"
        height="30"
        src="/assets/img/logo.svg"
        width="30"
      />
      <h1 class="title">
        <a href="/">
          Tech <span class="black">Workers</span> Coalition
        </a>
      </h1>
    </div>

    <div class='flex flex-row ai-ctr'>

      <div class="flex flex-row ai-ctr rel marg-r-2">
        <button class="flex flex-row ai-ctr" id="langBtn" role="button">
          <img
            alt="Click to choose a language"
            height="16"
            class="marg-r-1"
            src="/assets/img/globe.svg"
            width="16"
          />
          {{ site.lang }}
        </button>
        <ul id="langNav" class="navOverlay abs hide list-style-none">
          {% for lang in site.languages %}
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
          {% endfor %}
        </ul>
      </div>

      <div class="flex flex-row ai-ctr rel marg-r-2">
        <button class="flex" id="chapterBtn" role="button">
          <img
            alt="Click to render chapter navigation"
            height="18"
            src="/assets/img/local.svg"
            width="13"
          />
        </button>
        <ul
          id="chapterNav"
          role="navigation"
          class="navOverlay abs hide list-style-none">
          <li class="p-2 border-b-1">
            Join a Chapter
          </li>
          {% for link in site.chapters %}
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
          {% endfor %}
        </ul>
      </div>

      <div class="flex flex-row ai-ctr rel">
        <button class="flex" id="navBtn" role="button">
          <img
            alt="Click to render sub-page navigation"
            height="20"
            src="/assets/img/ham.svg"
            width="20"
          />
        </button>
        <ul id="nav" class="navOverlay abs hide list-style-none" role="navigation">
          {% for link in site.links %}
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
          {% endfor %}
        </ul>
      </div>

    </div>

  </div>
</header>
