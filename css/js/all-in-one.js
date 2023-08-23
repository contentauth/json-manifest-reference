$(function() {

  const rr_regex = /\.\.\/research-readme\/(.*)\.(html|md)/
  const rs_regex = /\.\.\/research-service\/(.*)\.(html|md)/
  const md_regex = /\.(md)/

// Ensure that links in the "all-in-one" pages keep you in the "all-in-one" view
  $('a').each(function(i, e) {
      var current = $(this);
      var theLink = current.attr('href');

      // Replace any links to .md files with corresponding .html file.
      // Jekyll is supposed to do this, but sometimes it doesn't work when using "includes"
      if (md_regex.test(theLink) ) {
        fixedLink = theLink.replace(md_regex, ".html")
        current.attr('href', fixedLink)
      }

      // Research README "all-in-one" page
      if (rr_regex.test(theLink) && document.location.href.includes("research-readme") ) {
        fixedLink = theLink.replace(rr_regex, "all-in-one.html")
        current.attr('href', fixedLink)
        //console.log("For LINK TEXT " + current.text() + "  REPLACING " + theLink + " WITH " + fixedLink)
      }

      // Research service "all-in-one" page
      if (rs_regex.test(theLink) && document.location.href.includes("research-service") ) {
        fixedLink = theLink.replace(rs_regex, "all-in-one.html")
        current.attr('href', fixedLink)
        //console.log("For LINK TEXT " + current.text() + "  REPLACING " + theLink + " WITH " + fixedLink)
      }
  });

  // Hide sidebar nav page by default
  //$("#tg-sb-link").click();

})
