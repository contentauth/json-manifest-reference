# json-manifest-reference

This is a reference for the [Content Authenticity Initiative (CAI)](https://contentauthenticity.org/) manifest store JSON structure.  It is based on the definition of the manifest store in the [C2PA technical specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html), but is not exactly the same.  The C2PA specification defines a binary structure, but [this reference](reference) is for the JSON structure that the [CAI open source SDKs](https://opensource.contentauthenticity.org/docs/introduction) use to work with manifests.

See the rendered site at <https://contentauth.github.io/json-manifest-reference/manifest-reference>.

## References

- [Understanding JSON schema](https://json-schema.org/understanding-json-schema/index.html): Good explanation of JSON schema.
- [Jekyll documentation](https://jekyllrb.com/docs/): This repo uses Jekyll and Liquid.
- [Liquid template language](https://shopify.github.io/liquid/)


## Implementation

The reference documentation is generated from JSON schema files in the `_data` directory:
- [`/_data/ManifestStore_schema.json`](./_data/ManifestStore_schema.json) is the canonical file generated from the source code in c2pa-rs (see below).
- [`/_data/ManifestStore_schema_annotated.json`](./_data/ManifestStore_schema_annotated.json) is a copy of `ManifestStore_schema.json` with comments addressed to the dev team added to description fields.  This file is used to generate the [annotated manifest store reference](https://contentauth.github.io/json-manifest-reference/annotated-manifest-reference) 
- [`/_data/ManifestStore_schema_edited.json`](./_data/ManifestStore_schema_edited.json) is a temporary copy of `ManifestStore_schema.json` with manual edits to the schema to address some of the issues raised above.  These issues _should_ be addressed in the source code and in the schema generation; but until they are, this file is used to generate the reference doc.  See below for details.

### Generating the schema from the Rust library

In c2pa-rs, run this command to generate the schema file:

```
make schema
```

Or you can do it manually with this command:
```
cargo run --bin export_schema
```

This creates the schema file in `target/schema/ManifestStore.schema.json`.

## GitHub workflow

To trigger the GH action, change `_data/ManifestStore_schema_edited.json`. This will create a PR to update <https://opensource.contentauthenticity.org/docs/manifest/manifest-ref/>.

### How to update the JSON schema

If you don't need to preview (for example if you change is trivial), create and use a branch and then just open a PR.
If you're making more extensive changes and want to preview the rendered changes, create a PR using a fork.  

To update the schema and see a preview:

1. Update [`/_data/ManifestStore_schema.json`](./_data/ManifestStore_schema.json) in your fork.
2. Find the **Pages** settings page for your fork, e.g. `https://github.com/your_username/c2pa-manifest-reference/settings/pages` and enable GitHub Pages.  Set:
    - **Source** to **Deploy from branch**.
    - **Branch** to **main / root**
    - Click **Save**.
3. In a couple minutes you will be able to view your Jekyll site at `https://your_username.github.io/c2pa-manifest-reference/` (the URL depends on the GH org where you forked the repo).

### Checking site status

It's possible to make a change to a page (such as a malformed Liquid directive) that will cause an error, and prevent the site from building.  If this occurs, the existing site will be unaffected, and the site will just show the last working version. However, **none of the changes in your commit/PR will be visible**.  You cannot cause such an error with basic markdown, only with Liquid tags or a data file.

To check site status, go to he **Pages** settings page for your fork. If you see this:

**Your site is live at https://your_username.github.io/json-manifest-reference/**

Then everything's good!

However, if you see a yellow box that says "There is a problem with the site" and an error message, then you need to figure out what's wrong and fix it before _any_ changes to the site will take effect.


## Post-processing notes

JavaScript code converts crate links to anchor links.  For example:

`crate::Manifest` -> `#manifest`

`crate::ManifestStore` -> `#manifeststore`





