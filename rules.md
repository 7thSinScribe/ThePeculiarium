---
layout: default
title: Rules
---

{% if site.data.menu %}
  {% include menu.html %}
{% else %}
  {% include back-link.html %}
{% endif %}

<article class="rules" id="main" role="article" aria-label="Content">

  {% if page.title != "" %}
    <h1 class="rules-title divided">
      {{ page.title }}
    </h1>
  {% endif %}

  <div class="rules-content">
    <h2>Table of Contents</h2>
    <ul>
      {% for rule in site.rules %}
        <li>
          <a href="{{ rule.url | prepend: site.baseurl }}">{{ rule.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>

</article>