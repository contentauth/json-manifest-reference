---
title: CAI manifest store reference with tooltips
permalink: test-reference
toc: false
---

<div class="tooltip">Hover over me!
  <span class="tooltiptext">Tooltip text</span>
</div>

<br/>

<div class="tooltip">Hover over me too!
  <span class="tooltiptext">Tooltip text number 2</span>
</div>

{% assign schema = site.data.ManifestStore_schema_edited %}

{% for property in schema.properties %}
- ManifestStore.{{property.first}}: {{property.last.description}}
{% endfor %}



----

{% include_relative manifest-diagram.md %}
{% include_relative reference.md edits="true" %}

