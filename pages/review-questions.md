---
title: Review questions and comments
permalink: review-questions
layout: page
---

### Schema manual edits

The schema in `ManifestStore_schema_edited.json` has the following manual edits:
- `ResourceStore` object definition removed.
- Properties of type `ResourceStore` are removed: `Ingredient.resources` and `Manifest.resources`.
- Removed `Manifest.claim_generator_hints` property.
- Removed `DateT` object and modified the one property that referred to it, `Metadata.dateTime` to specify a date/time string with ISO 8601 format.
- Edited `ReviewRating` description to use regular markdown link rather than shortlink, which doesn't render properly within fenced HTML paragraph.
- Corrected issues with missing or mis-formatted shortlinks in descriptions.
- Updated links to C2PA spec to version 1.4 from version 1.0.

### Punctuation

Many of the descriptions need a period at the end. Some have other minor spelling/punctuation issues; for example, the first word of the description should always be capitalized.

### Reference-style links

I manually fixed these issues in `_data/ManifestStore_schema_edited.json`, which is currently used to generated the [manifest reference](/manifest-reference).
{: .note}

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




