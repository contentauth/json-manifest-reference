---
title: TEST
permalink: test.html
toc: false
---

{% for desc_string in site.data.test.crates %}

### {{forloop.index}}

Input string:
```
{{desc_string}}
```

{% include crate-links.md str=desc_string %}

{% endfor %}
