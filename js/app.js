





$( document ).ready(function() {
  var $body = $("body");
  var $hero = $("#hero");
  var $scrollWrapper = $("#scroll-wrapper");


  $(function() {
    FastClick.attach(document.body);
  });

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
    $body.addClass('mobile');

  }else{
    mobile = false;
  }

if(!mobile){

  $scrollWrapper.mCustomScrollbar({

    scrollInertia: 200,
    mouseWheel:{ scrollAmount: 150 }

  });
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

  $hero.css("height",$scrollWrapper.height());
  console.log($scrollWrapper.height());
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

(function($){
  $.fn.disableSelection = function(){
    return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
      ".disableSelection", function( event ) {
      event.preventDefault();
      });
  };

  $.fn.enableSelection = function(){
    return this.unbind('.disableSelection');
  };
})(jQuery);


$('.notSelectable').disableSelection();


});
