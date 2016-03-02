





$( document ).ready(function() {
  var $body = $("body");


  $(function() {
    FastClick.attach(document.body);
  });

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
    $body.addClass('mobile');
  }else{
    mobile = false;
  }

  /*if(!mobile){
  $("#box").mousemove(function(event){
  var relX = event.pageX - $(this).offset().left;
  var relY = event.pageY - $(this).offset().top;
  var relBoxCoords = "(" + relX + "," + relY + ")";
  $(".mouse-cords").text(relBoxCoords);
});
}*/
if(Modernizr.mq('(max-width: 992px)')){
  $body.addClass('small');
}else{
  $body.removeClass('small');
}

$(window).resize(function() {
  if(Modernizr.mq('(max-width: 992px)')){
    $body.addClass('small');
  }else{
    $body.removeClass('small');
  }
});


  $(".navButton").on("click", function(){
  /*  e.preventDefault(); KAN BEHÖVAS OM JAG BYTER TILL EN a*/
  $(".navButton").removeClass('active'); // remove first
  $(this).addClass('active');

  });
/*
swal({   title: "Error!",
text: "Here's my error message!",
type: "error",
confirmButtonText: "Cool" });


$( "#center-box" ).on( "click", function() {
console.log( "rip" );
});
*/


});
