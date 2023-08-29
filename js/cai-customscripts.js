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

  for (let i = 0; i < all_property_desc.length; i++) {
    var text = all_property_desc[i].innerHTML

    if (text.includes("crate::") ) {
      console.log("YES -- Process this!")
      console.log("Property desc = ", text)
      const regex = /Dog/g;
      console.log( text.replace(regex, "crate::") )
    }
  } //for

}
