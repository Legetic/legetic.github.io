





$( document ).ready(function() {
  var $body = $("body");
  var $hero = $("#hero");
  var $scrollWrapper = $("#scroll-wrapper");
  var $contactForm = $("#contact-form");
  var $contactButton = $("#contact-button");
  var $contact =   $( "#contact" );
  var $message = $("#message");
  var $textareFeedback = $('#textarea_feedback');
  var $navButton = $(".navButton");





  $.cookieCuttr({
  cookieAnalytics: false,
  cookieMessage: 'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',
  cookiePolicyLink: 'terms.html#cookies'
  });


/*
  $(function(){
        $(".player").YTPlayer();
      });*/

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
    mouseWheel:{ scrollAmount: 150 },
    callbacks:{
    whileScrolling:function(){

myCustomFn(this);
    }
}

  });
}

function myCustomFn(el){

    var windscroll = -el.mcs.top;

   if (windscroll >= 100) {
       $('#navigationButtons').addClass('fixed');
       $('#scroll-wrapper section').each(function(i) {
           if ($(this).position().top <= windscroll + 259) {
               $('#navigationButtons div.active').removeClass('active');
               $('#navigationButtons div').eq(i).addClass('active');
           }
       });

   } else {

       $('#navigationButtons').removeClass('fixed');
       $('#navigationButtons a.active').removeClass('active');
       $('#navigationButtons a:first').addClass('active');
   }


   $('.item').each( function(i){

           var bottom_of_object = $(this).position().top;
//+ $(this).outerHeight()
           var bottom_of_window = windscroll + $($scrollWrapper).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object ){

               $(this).animate({'opacity':'1'},500);

           }

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

  //$hero.css("height",parseInt($scrollWrapper.height()) + 15 + "px");






});


  $navButton.on("click", function(){
  /*  e.preventDefault(); KAN BEHÖVAS OM JAG BYTER TILL EN a*/



  var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').position().top;

        $scrollWrapper.mCustomScrollbar("scrollTo",scrollPoint,{
        scrollInertia:900
        });



    return false;

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


    var text_max = parseInt($message.attr("maxlength"));
        $textareFeedback.html(text_max);

        $message.keyup(function() {
            var text_length = $message.val().length;
            var text_remaining = text_max - text_length;

            $textareFeedback.html(text_remaining);
        });





$("#advance").on("click", function(){
/*  e.preventDefault(); KAN BEHÖVAS OM JAG BYTER TILL EN a*/

$scrollWrapper.mCustomScrollbar("scrollTo",$( ".item:first" ),{
scrollInertia:900
});

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
