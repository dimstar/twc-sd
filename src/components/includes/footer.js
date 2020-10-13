// TODO: port to react component 
<footer>
  <div class="contain">
    <img
      alt=""
      role="presentation"
      aria-hidden="true"
      class="marg-b-2"
      height="40"
      src="/assets/img/logo.svg"
      width="40"
    />
    <ul class="d:flex flex-wrap d:flex-row list-style-none">
      {% for link in site.links %}
        <li class="d:c-1/3 marg-b-3 d:marg-r-3">
          {% if link.newTab %}
            <a
              class="black-important"
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
          {% else %}
            <a
              class="black-important"
              href="{{ link.url }}">
              {{ link.text }}
            </a>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
</footer>
