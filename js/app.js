





$( document ).ready(function() {
  var $body = $("body");
  var $hero = $("#hero");
  var $scrollWrapper = $("#scroll-wrapper");
  var $contactForm = $("#contact-form");
  var $contactButton = $("#contact-button");
  var $contact =   $( "#contact" );


  $(document).ready(function () {
  $.cookieCuttr({
  cookieAnalytics: false,
  cookieMessage: 'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',
  cookiePolicyLink: 'http://cookiecuttr.com/'
  });
  });

  $(function(){
        $(".player").YTPlayer();
      });

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

jQuery( window ).on( "orientationchange", function( event ) {

      $hero.css("height",parseInt($scrollWrapper.height()) + 15 + "px");


} );


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

  $hero.css("height",parseInt($scrollWrapper.height()) + 15 + "px");






});


  $(".navButton").on("click", function(){
  /*  e.preventDefault(); KAN BEHÖVAS OM JAG BYTER TILL EN a*/
  $(".navButton").removeClass('active'); // remove first
  $(this).addClass('active');

  });



    $contactButton.on("click", function(){
    /*  e.preventDefault(); KAN BEHÖVAS OM JAG BYTER TILL EN a*/
      $contact.toggleClass( "extended" );
      $contactButton.toggleClass("fa-envelope");
      $contactButton.toggleClass("fa-times");

setTimeout(function(){
      $contactForm.toggleClass("extending");
}, 200);

if($contactForm.hasClass("extended")){
  $contactForm.removeClass("extended");
}else{
setTimeout(function(){
      $contactForm.addClass("extended");
}, 1000);
}

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
