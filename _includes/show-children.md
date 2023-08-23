{%- assign pagetree = site.data.sidebar.children -%}
{%- assign slash_url = include.related_url | prepend : "/" %}
<div class="right-nav" {% if include.float %} style="float: {{include.float}};" {% endif %}>
{% if include.related_title %}
  {% if slash_url == page.url %}
    {{include.related_title}}:
  {% else %}
    <a href="../{{include.related_url}}">{{include.related_title}}</a>:
  {% endif %}
{% else %} Related articles: {%endif%}

<ul> <!-- include.related_url is {{include.related_url}} -->
{%- for pt in site.data.sidebar.children -%}
  {%- if include.related_url == pt.url -%}
<!--   pt.url = {{pt.url}} -->
    {% for child in pt.children %}
      {%- assign full_title = child.title -%} <!-- Default in case can't match title in site page -->

      {%- for site_page in site.pages -%} <!-- Find the full title from the site.pages variable -->
      {%- assign child_url_stripped = child.url | remove: "/" -%}
      {%- assign site_page_url_stripped = site_page.url | remove: "/" -%}

        {%- if child_url_stripped == site_page_url_stripped -%}
          {%- assign full_title = site_page.title -%}

        {%- endif -%}
      {%- endfor -%}
      {%- assign slash-child-url = child.url | prepend: "/" -%}
      <!-- slash-child-url is {{slash-child-url}} page.url is {{page.url}} -->
      <li> {% if slash-child-url == page.url %} {{full_title}} {% else %} <a href="{{site.url}}/{{child.url}}">{{full_title}}</a>{% endif %}
      </li>

      {%- if child.children.size >0 -%}
        <ul>
        {% for grandchild in child.children %}
          <li> <a href="{{site.url}}/{{grandchild.url}}">{{grandchild.title}}</a> </li>
        {%- endfor -%}
        </ul>
      {%- endif -%}
    {%- endfor -%}

  {%- endif -%}
{%- endfor -%}
</ul>
</div>
