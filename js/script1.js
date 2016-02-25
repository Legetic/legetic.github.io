
$(window).on("load", function() {
  $('body').addClass('loaded');
});


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
    $body.addClass('notMobile');
  }


  if(Modernizr.mq('(max-width: 992px)')){
    $body.addClass('small');
  }else{
    $body.removeClass('small');
  }

  swal({   title: "Error!",
  text: "Here's my error message!",
  type: "error",
  confirmButtonText: "Cool" });


  $( "#center-box" ).on( "click", function() {
    console.log( "rip" );
  });

});
