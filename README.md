# c2pa-manifest-reference

This is a reference for the [Content Authenticity Initiative (CAI)](https://contentauthenticity.org/) manifest store JSON structure.  It is based on the definition of the manifest store in the [C2PA technical specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html), but is not exactly the same.  The C2PA specification defines a binary structure, but [this reference](reference) is for the JSON structure that the [CAI open source SDKs](https://opensource.contentauthenticity.org/docs/introduction) use to work with manifests.

See <https://crandmck.github.io/c2pa-manifest-reference/>.

##

## Post-processing

`crate::Manifest` -> `https://docs.rs/c2pa/latest/c2pa/struct.Manifest.html`

`crate::ManifestStore` -> `https://docs.rs/c2pa/latest/c2pa/struct.ManifestStore.html`


## Issues

`Ingredient.metadata` property description references `Metadata` but provides link for `crate::Manifest`: 

```
Any additional [`Metadata`] as defined in the C2PA spec.\n\n[`Manifest`]: crate::Manifest
```
