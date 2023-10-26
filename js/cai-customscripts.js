window.onload=function() {

  all_property_desc = document.getElementsByClassName("prop_desc")

  //for (let i = 0; i < all_property_desc.length; i++) {
  for (const prop_desc of all_property_desc) { // Get all description table cells
    var desc_links = prop_desc.getElementsByTagName("a"); // Get all links in the description
    for (const link of desc_links) {
      if (link.hasAttribute("href") ) {
        let linkStr = link.getAttribute("href");
        //console.log("Getting href for " + linkStr)
        if (linkStr.startsWith("crate::") ) {
          link.setAttribute("href", "#"+ linkStr.substring(7).toLowerCase())
        }
      }
    }
  } //for
}
