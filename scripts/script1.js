$(window).on("load", function() {
    $('body').addClass('loaded');
});

$( document ).ready(function() {
  var infoTabOpen = false;
  var mobile;

  //DECLARING ALL THE elements
  $header = $("#header");
  $body = $('body');
  $rightButton = $("#rightButton");
  $leftButton = $('#leftButton');

  $tabChanger = $("#tabChanger");
  $infoTab = $("#infoTab");
  $tabChangerText = $("#tabChangerText");

  $logoSmall = $("#logoSmall");
  $smallMenu = $("#smallMenu");
  $closeMenu = $('#closeMenu');

  $content = $("#content");

  $smallMenu_li = $('#smallMenu li');


  $menuItem1 = $('.menuItem1');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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


  var backgroundIndex = 1;
  var slideInterval= null;

  var backgroundImages = new Array();
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      backgroundImages[i] = new Image()
      backgroundImages[i].src = preload.arguments[i]
    }
  }
  preload(
    "images/gallery/2011_skidakare_940x360.jpg",
"images/gallery/beachrunner_940x360.jpg",
"images/gallery/crosscountry_940x360.jpg",
"images/gallery/disabled_wakeboarder_940x360.jpg",
"images/gallery/dreamstimefree_1194717_940x360.jpg",
"images/gallery/dreamstimefree_13698028_940x360.jpg",
"images/gallery/dreamstimefree_3060391_940x360.jpg",
"images/gallery/dreamstime_m_11669256_940x360.jpg",
"images/gallery/dreamstime_m_12007178_940x360.jpg",
"images/gallery/dreamstime_m_17623103_940x360.jpg",
"images/gallery/dreamstime_m_19185095_940x360.jpg",
"images/gallery/dreamstime_m_21190194_940x360_2.jpg",
"images/gallery/dreamstime_m_2752681_940x360.jpg",
"images/gallery/dreamstime_m_2894541_940x360_flipped.jpg",
"images/gallery/dreamstime_m_3615626_940x360.jpg",
"images/gallery/dreamstime_m_6006541_940x360.jpg",
"images/gallery/dreamstime_m_8198572_940x360.jpg",
"images/gallery/goalie_940x360.jpg",
"images/gallery/handymen_940x360.jpg",
"images/gallery/istock_000009463049medium.jpg",
"images/gallery/istock_000014115583xxxmedium.jpg",
"images/gallery/mechanic_fist_940x360.jpg",
"images/gallery/motocross_jump_2_940x360.jpg",
"images/gallery/motocross_jump_940x360.jpg",
"images/gallery/old_couple_940x360_flipped.jpg",
"images/gallery/old_couple_skiing_940x360.jpg",
"images/gallery/old_couple_stretching_940x360.jpg",
"images/gallery/old_lady_940x360.jpg",
"images/gallery/snowmobile_940x360.jpg"

  );
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


shuffle(backgroundImages);


slideInterval = setInterval(slide,4000);

  function slide()
  {
if(!infoTabOpen){
    $header.finish().fadeTo(400, 0, function()
    {
      $(this).css('background-image', 'url(' + backgroundImages[backgroundIndex].src + ')');

    }).fadeTo(1000, 1);


    if(backgroundIndex == backgroundImages.length -1){

      backgroundIndex = 0;
    }else{
      backgroundIndex += 1;
    }
}
  }

  function manualSlide()
  {

    $header.finish().fadeTo(400, 0, function()
    {
      $(this).css('background-image', 'url(' + backgroundImages[backgroundIndex].src + ')');

    }).fadeTo(1000, 1);

  }



  function slideForward() {
    if(backgroundIndex == backgroundImages.length -1){

      backgroundIndex = 0;
    }else{
      backgroundIndex += 1;
    }

    clearInterval(slideInterval);
    manualSlide();
    slideInterval = setInterval(slide,4000);
  }
  function slideBackward() {
    if(backgroundIndex == 0){

      backgroundIndex = backgroundImages.length -1;
    }else{
      backgroundIndex -= 1;
    }

    clearInterval(slideInterval);
    manualSlide();
    slideInterval = setInterval(slide,4000);
  }

  $rightButton.click(function(e) {

    slideForward();

  });
  $leftButton.click(function(e) {

    slideBackward();

  });


  $('.buffImage').not('#garanti').resizeToParent();
  $('#garanti').resizeToParentLess();

$(window).resize(function() {
  if(Modernizr.mq('(max-width: 992px)')){
$body.addClass('small');
  }else{
    $body.removeClass('small');
  }
  });
  /*
  $(window).scroll(function(){
      var aTop = $('#menu').height();
      if($(this).scrollTop()>=aTop){

          // instead of alert you can use to show your ad
          // something like $('#footAd').slideup();
      }
    });*/

    $tabChanger.click(function(e) {
     $infoTab.toggleClass("extended");
     $tabChanger.toggleClass("extended");
     if($tabChanger.hasClass('extended')){
       infoTabOpen = true;
        $tabChangerText.text('Stäng');
    } else {
      infoTabOpen = false;
        $tabChangerText.text('Om oss');
    }
   });

   $menuItem1.click(function(e) {
     if(!$infoTab.hasClass("extended")){
       $infoTab.addClass("extended")
     }
     if(!$tabChanger.hasClass("extended")){
       infoTabOpen = true;
       $tabChangerText.text('Stäng');
       $tabChanger.addClass("extended")
     }


  });

   $logoSmall.click(function(e) {


      $smallMenu.toggleClass("extended");
      $smallMenu.toggleClass("notExtended");
      $content.toggleClass("menuExtended");

    });

    $closeMenu.click(function(e) {


       $smallMenu.toggleClass("extended");
       $smallMenu.toggleClass("notExtended");
       $content.toggleClass("menuExtended");

     });

     $smallMenu_li.click(function(e) {


        $smallMenu.toggleClass("extended");
        $smallMenu.toggleClass("notExtended");
        $content.toggleClass("menuExtended");

      });

      $(".scroll").click(function(event){
      event.preventDefault();
      //calculate destination place
      var dest=0;
      if($(this.hash).offset().top > $(document).height()-$(window).height()){
        dest=$(document).height()-$(window).height();
      }else{
        dest=$(this.hash).offset().top;
      }
      //go to destination
      $('html,body').stop().animate({scrollTop:dest}, 1000,'easeInOutExpo');
    });


    

});
