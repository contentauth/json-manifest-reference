{% case include.schema %}
  {% when "annotated" %}
    {% assign schema = site.data.ManifestStore_schema_annotated %}

  {% when "edited" %}
    {% assign schema = site.data.ManifestStore_schema_edited %}

  {% when "ManifestDefintion" %}
    {% assign schema = site.data.ManifestDefinition_schema %}

  {% when "ManifestStore" %}
    {% assign schema = site.data.ManifestStore_schema %}

  {% when "builder" %}
    {% assign schema = site.data.Builder_schema %}

  {% when "reader" %}
    {% assign schema = site.data.Reader_schema %}

  {% when "settings" %}
    {% assign schema = site.data.Settings_schema %}

  {% else %}
    ERROR - UNKNOWN SCHEMA {{include.schema}}

{% endcase %}

## {{schema.title}}

{% include description.html str=schema.description %}

### Properties

<table class="manifest-ref-table">
<thead><tr>
<th class="manifest-ref-table">Property</th>
<th class="manifest-ref-table">Type</th>
<th class="manifest-ref-table">Description</th>
<th class="manifest-ref-table">Required?</th>
<th class="manifest-ref-table">Default Value</th>
</tr></thead>

<tbody>
{% for property in schema.properties %}
{% assign required_properties = schema.required %}
<tr>
<td class="manifest-ref-table">{{property.first}}</td>
<!-- Type -->
<td class="manifest-ref-table">
{% if property.last.type=="object" %} 
  Object 
{% else %}
  {% include type.html prop_info=property.last %}
{% endif %}
</td>

<!-- Description -->
<td class="manifest-ref-table">{{property.last.description|markdownify}}
{% if property.last.additionalProperties %}
  {% assign href=property.last.additionalProperties.first[1] %}
  <br/>See {% include ref-to-link.html ref=href %}
{% endif %}
</td>

<td class="manifest-ref-table"> <!-- Required? -->
{% include required.html prop=property.first required_list=required_properties %}
</td>

<td class="manifest-ref-table"> <!-- Default Value -->
{% include default-value.html val=property.last.default %}
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
{% assign i = forloop.index0|modulo: 8 %}
<a href="{{term.first | slugify | prepend: "#"}}">{{term.first}}</a>  <br/>
{% if i == 7 and forloop.last == false %}
</td>
<td style="border: 0; vertical-align: top;">
{% endif %}
{% endfor %}
</td>
</tr></tbody></table>

<!-- Definitions reference -->
{% for term in schema.definitions %}

{% if include.layout=="cai" %}
<a class="top-scroll-btn" title="Go to Definitions" href="#definitions">Definitions</a>
{% endif %}

### {{term.first}}

{% assign entity = term.last %}

{% if entity.oneOf %}

{{entity.description}}

<table class="manifest-ref-table" style="margin-top: 10px;">
<thead><tr>
<th class="manifest-ref-table">{{term.first}}</th>
<th class="manifest-ref-table">Type</th>
<th class="manifest-ref-table">Description</th>
</tr></thead>

<tbody>
{% for things in entity.oneOf %}
<tr>
<td class="manifest-ref-table">{% for i in things.enum %} {{things.enum}}  {% endfor %}</td>
<td class="manifest-ref-table">{{things.type}}</td>
<td class="manifest-ref-table">{% include description.html str=things.description %} </td>
</tr>
{%- endfor -%}
</tbody></table>

{% endif %} <!-- end of oneOf entity -->

{% if entity.type=="object" and entity.properties -%}

<p class="prop_desc" markdown="1">{{term.last.description}}</p>

<table class="manifest-ref-table" style="margin-top: 10px;">
<thead><tr>
<th class="manifest-ref-table">Property</th>
<th class="manifest-ref-table">Type</th>
<th class="manifest-ref-table">Description</th>
<th class="manifest-ref-table">Required?</th>
<th class="manifest-ref-table">Default Value</th>
</tr></thead>

<tbody>
{% for property in entity.properties %}
<tr>
<td class="manifest-ref-table">{{property.first}}</td>

<!-- Type  -->
<td class="manifest-ref-table"> 
{% include type.html prop_info=property.last %} 
</td>

<!-- Description -->
<td class="manifest-ref-table">{%- include description.html str=property.last.description -%}</td>

<!-- Required?  -->
<td class="manifest-ref-table"> 
{% include required.html prop=property.first required_list=entity.required %}
</td>

<!-- Default Value -->
<td class="manifest-ref-table">
{% include default-value.html val=property.last.default %}
</td>

</tr>
{% endfor %}
</tbody></table>

{% if entity.additionalProperties %}
NOTE: This object can have any number of additional user-defined properties. 
{% endif %}

<!-- Not an object but an enum -->
{% elsif entity.enum %} 
A {{entity.type}} that is one of the following:
{% for type in entity.enum %}
- "{{type}}"
{%- endfor -%}

<!-- Not an object or enum, but a string -->
{% elsif entity.type=='string' %} 
A string.

{{term.last.description}}

<!-- Not an object, enum, or string, but 'anyOf' -->
{%- elsif entity.anyOf -%} 

{% include description.html str=entity.description %}

{%- if entity.type -%}A {{entity.type}} that is any of:

{% else %} 
<p>Any of the following:</p>
{% endif %} 

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
