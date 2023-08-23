
$('#sidebar-list').height($(".nav").height());

$(function() {

  //hide all non-active nav-lists:
  $('.nav-list').not('#sidebar-list').each(function(i, list){
    if(!$(list).parent().is('.active')){
      $(list).hide();
    }
  });

  //add active class to parents of active nav elems
  $("li.active").parentsUntil('#sidebar-list', '.tree-parent')
    .addClass('expanded')
    .children('ul.nav-list').show();


  //add expanded class to active tree parents
  $('.tree-parent.active').addClass('expanded');

  $('a.show-hide').click(function (e) {
    console.log('clicked', this);
    $(this)
      .blur()
      .parent().toggleClass('expanded')
      .children('ul.nav-list').toggle(200);
    return false;
    // $(this).parent().children('ul.nav-list').toggle(200);
  })

  // Scroll-to-top button

  top_scroll_button = document.getElementById("top-scroll-btn");

  // When the user scrolls down 20px from the top of the document, show the button
//  window.onscroll = function() {scrollFunction()}; ...   function scrollFunction() {

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_scroll_button.style.display = "block";
  } else {
    top_scroll_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
$("#top-scroll-btn").click(function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

})
