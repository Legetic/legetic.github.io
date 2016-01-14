

$(window).on("load", function() {
    $('body').addClass('loaded');
});

$( document ).ready(function() {
  var infoTabOpen = false;
  var mobile;

  $(function() {
      FastClick.attach(document.body);
  });
  //DECLARING ALL THE elements
  $header = $("#header");
  $body = $('body');
  $bodyID = $('#body');
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
  $scroll = $('.scroll');

  $menuItem1 = $('.menuItem1');

  $(document).ready(function() {
      $('#content').fadeIn();
  });

  window.mobileAndTabletcheck = function() {

    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return mobile;
  }
  if(mobile) {

    $body.addClass('mobile');
  }else{

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
  if(!mobile){
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
}
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

if(!mobile){
slideInterval = setInterval(slide,4000);
}
  function slide()
  {
if(!infoTabOpen && !mobile){
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
      $bodyID.toggleClass("menuExtended");

    });

    $closeMenu.click(function(e) {


       $smallMenu.toggleClass("extended");
       $smallMenu.toggleClass("notExtended");
       $bodyID.toggleClass("menuExtended");

     });

     $smallMenu_li.click(function(e) {


        $smallMenu.toggleClass("extended");
        $smallMenu.toggleClass("notExtended");
        $bodyID.toggleClass("menuExtended");

      });

      $scroll.click(function(event){
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
