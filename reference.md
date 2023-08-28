## Properties

{% assign schema=site.data.ManifestStore_schema_processed %}
{{schema.description}}.

<table>
<thead><tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Required?</th>
</tr></thead>

<tbody>
{% for property in schema.properties %}
{% assign required_properties = schema.required %}
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
{% include required.html prop=property.first required_list=required_properties %}
</td>

</tr>
{% endfor %}

</tbody></table>

<!---------------------------------------------------------------------->

## Definitions

<!-- TOC-like links -->

<table style="border: 0;" width="900">
<tbody>
<tr>
<td style="border: 0; vertical-align: top;">
{%- for term in schema.definitions -%}
{% assign i = forloop.index0|modulo: 5 %}
<a href="{{term.first | slugify | prepend: "#"}}">{{term.first}}</a>  <br/>
{% if i == 4 %}
</td>
{% unless forloop.last %}
<td style="border: 0; vertical-align: top;">
{% endunless %}
{% endif %}
{% endfor %}
</td>
</tr></tbody></table>

<!-- Definitions reference -->
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
{% include required.html prop=property.first required_list=entity.required %}
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
