window.onload=function() {

  // Scroll-to-top button
  const top_scroll_buttons = document.getElementsByClassName("top-scroll-btn");
  for (let i = 0; i < top_scroll_buttons.length; i++) {
    // When the user clicks on the button, scroll to the top of the document
    top_scroll_buttons[i].addEventListener("click", function() {
      console.log("top_scroll_button clicked!")
      window.scrollTo(0, 0);
    });
  }

  all_property_desc = document.getElementsByClassName("prop_desc")

  //for (let i = 0; i < all_property_desc.length; i++) {
  for (const prop_desc of all_property_desc) { // Get all description table cells
    var desc_links = prop_desc.getElementsByTagName("a"); // Get all links in the description
    for (const link of desc_links) {
      if (link.hasAttribute("href") ) {
        let linkStr = link.getAttribute("href");
        if (linkStr.startsWith("crate::") ) {
          link.setAttribute("href", "#"+ linkStr.substring(7).toLowerCase())
        }
      }
    }
  } //for
}