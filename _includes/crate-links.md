{% assign the_array = include.str | split: " crate::" %}

Input string =
```
{{include.str}}
```

{% for i in the_array offset:1 %}<!-- i = input string split by "crate::" -->
{% assign len_less_one = i | size | minus: 1 %}

{% assign last_char = i  | slice: len_less_one, 1 %}

{% if last_char==':' %}

{% assign obj = i.first | split: "[`" | rstrip %}

{% else %}
{% assign obj = i %}

{% endif %}

{$ assign url = obj | prepend : "https://docs.rs/c2pa/latest/c2pa/struct."  %}

{% assign rep_str = "crate::" | append: obj %}

```
obj = {{obj}}
url = {{url}}
result = {{include.str | replace_first: rep_str, url }}
```

{% endfor %}
