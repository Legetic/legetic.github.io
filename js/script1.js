
$(window).on("load", function() {
    $('body').addClass('loaded');
});


$( document ).ready(function() {
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

});
