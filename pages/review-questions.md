---
title: Review questions and comments
permalink: review-questions
layout: page
---

### Punctuation

Many of the descriptions need a period at the end. Some have other minor spelling/punctuation issues; for example, the first word of the description should always be capitalized.

### Reference-style links

Some descriptions have [reference-style links](https://www.markdownguide.org/basic-syntax/#reference-style-links) like this:
```
... the active [`Manifest`].\n\n[`Manifest`]: crate::Manifest
```

The first part of this is the reference-style link, and the second is the shortlink URL.
The doc post-processes these to link to the corresponding doc section instead of the Rust crate docs.  But the markdown still needs to be formatted properly for the link to work at all.

Some descriptions have reference-style links without corresponding shortlink URLs. These are indicated in the annotated JSON schema with:

> Reference-style link missing shortlink. 

Some descriptions have reference-style links that need to be on separate lines but are not. These are indicated in the annotated JSON schema with:

> Reference-style link needs to be on separate line. 




