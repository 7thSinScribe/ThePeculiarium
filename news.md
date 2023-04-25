---
layout: post
title: News
---

<body>
  <div class="rule-meta">
    {% if page.author %}
      <div itemprop="author">{{ page.author }}</div>
    {% endif %}
    <time class="rule-date dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">{{ page.date | date: "%B %-d, %Y" }}</time>
  </div>

  <ul class="news-list">
    {% for news in site.news %}
      {% include news-list-item.html %}
    {% endfor %}
  </ul>
</body>