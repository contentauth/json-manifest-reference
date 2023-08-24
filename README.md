# c2pa-manifest-reference

Experimental site for CAI JSON manifest reference.

This is a Jekyll site to generate reference doc from the JSON schema for ManifestStore.

The `index.md` page contains the code that generates the doc from the file `/_data/ManifestStore_schema.json`.  

## How to update the JSON schema

If you don't need to preview (for example if you change is trivial), create and use a branch and then just open a PR.

If you're making more extensive changes and want to preview the rendered changes, create and use a fork.  

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

**Your site is live at https://your_username.github.io/c2pa-manifest-reference/**

Then everything's good!

However, if you see a yellow box that says "There is a problem with the site" and an error message, then you need to figure out what's wrong and fix it before _any_ changes to the site will take effect.


