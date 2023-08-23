  /* Overlay effect for staged prerelease docs in fork */

//console.log("DRAFT OVERLAY")

$(function() {

  function overlay_on() {
    //console.log("called overlay_on")
    document.getElementById("overlay").style.display = "block";
  }

  function overlay_fade_out() {
    //console.log("called overlay_off")
    //document.getElementById("overlay").style.display = "none";
    $("#overlay").fadeOut(2000);
  }

  $("#overlay").click( function() {
    //console.log("called overlay_off")
    document.getElementById("overlay").style.display = "none";
  })

  overlay_on() 
  setTimeout(overlay_fade_out, 1500)

})
