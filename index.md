---
title: CAI manifest store reference
toc: false
---

This is a reference for the [Content Authenticity Initiative (CAI)](https://contentauthenticity.org/) manifest store JSON structure.  It is based on the definition of the manifest store in the [C2PA technical pecification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html), but is not exactly the same.  The C2PA defines a binary structure, but the below references is for a JSON structure that can be used to create a C2PA manifest.

This is an experimental site. It is an incomplete work in progress and may not be accurate.
{: .warning}

{% include toc.html %}

## Properties

{% assign schema=site.data.ManifestStore_schema %}
{{schema.description}}.

<table>
<thead><tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Required?</th>
<th>Default Value</th>
</tr></thead>

<tbody>
{% for property in schema.properties %}
<tr>
<td>{{property.first}}</td>

<!-- Type -->
<td>{% include type.html type=property.last.type items=property.last.items %}
{% if property.last.anyOf %}
Any of:
{% include array-of-objs.html a=property.last.anyOf %}
{% elsif property.last.allOf %}
All of:
{% include array-of-objs.html a=property.last.allOf %}
{% endif %}
</td>

<td>{{property.last.description}}.
{% if property.last.additionalProperties %}
  {% assign href=property.last.additionalProperties.first[1] %}
  See {% include ref-to-link.html ref=href %}.
{% endif %}
</td>

<td> <!-- Required? -->
{% assign isreq=false %}
{% if property.last.required %}
{% for x in property.last.required %}
  {% if property.first == x %}
    {% assign isreq=true %}
  {% endif %}
{% endfor %}
{% if isreq %} YES {% else %} NO {% endif %}
{% else %}
NO
{% endif %}
</td>

<td> N/A </td>
</tr>
{% endfor %}

</tbody></table>

<!---------------------------------------------------------------------->

## Definitions

{% for term in schema.definitions %}

### {{term.first}}

{{term.last.description}}

{% assign entity = term.last %}

{% if entity.additionalProperties %}
NOTE: `additionalProperties` = `{{entity.additionalProperties}}`
{% endif %}

{% if entity.type=="object" and entity.properties -%}

<table style="margin-top: 10px;">
<thead><tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Required?</th>
<th>Default Value</th>
</tr></thead>

<tbody>
{% for property in entity.properties %}
<tr>
<td>{{property.first}}</td>

<!-- Type -->
<td>{% include type.html type=property.last.type items=property.last.items %}
{% if property.last.anyOf %}
Any of:
{% include array-of-objs.html a=property.last.anyOf %}
{% elsif property.last.allOf %}
All of:
{% include array-of-objs.html a=property.last.allOf %}
{% endif %}
</td>

<!-- Description -->
<td>
{% include description.html str=property.last.description %}
</td>

<td> <!-- Required? -->
{% assign isreq=false %}
{% if entity.required %}
{% for x in entity.required %}
  {% if property.first == x %}
    {% assign isreq=true %}
  {% endif %}
{% endfor %}
{% if isreq %} YES {% else %} NO {% endif %}
{% else %}
NO
{% endif %}
</td>

<td> <!-- Default Value -->
{% if property.last.default %} {{property.last.default}} {% else %} N/A {%endif%}
</td>
</tr>
{% endfor %}
</tbody></table>

{% elsif entity.enum %} <!-- Not an object but an enum -->

A {{entity.type}} that is one of the following:
{% for type in entity.enum %}
- "{{type}}"
{%- endfor -%}

{% elsif entity.type=='string' %} <!-- Not an object or enum, but a string -->

A string.

{% include description.html str=term.last.description %}

{%- elsif entity.anyOf -%} <!-- Not an object, enum, or string, but 'anyOf' -->

{% include description.html str=entity.last.description %}

{%- if entity.type -%}A {{entity.type}} that is any {%- else -%} Any {% endif %} of the following:

<ul>{% for i in entity.anyOf %}

  {% if i.first and i.type=='array' %}  <!-- i is an object or array -->
    <li>{% for item in i.items %}
      {{item.first}}: {{item.last}} {%- unless forloop.last -%}, {%- endunless -%}
    {% endfor %}</li>

  {% else %} <!-- i is a simple type -->
    <li>  
    {% if i['$ref'] %}
      {% assign url=i['$ref'] %}
      {% include ref-to-link.html ref=url %}
    {% else %}
      {{i}}
    {% endif %}
    </li>
  {% endif %}

{% endfor %}
</ul>

{%- elsif entity.allOf -%} <!-- Not an object, enum, string, or 'anyOf', but `allOf` (not in schema) -->
All of:
- allOf = {{entity.allOf}}
{% endif %}

{% endfor %} <!-- end iteration over site.data.ManifestStore_schema.definitions obj -->
