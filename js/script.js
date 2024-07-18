$(document).ready(function(){

  let wh = $(window).height();
  $("#gnb").hide();

  $(window).scroll(function(){

    let scrollpos=$(this).scrollTop();
    if(scrollpos>=350){
      $("#gnb").fadeIn();
    }else{
      $("#gnb").fadeOut();
    };
    
  });

  $(window).resize(function(){
    location.reload();
    let wh = $(window).height();
    $("html,body").stop().animate({scrollTop:wh*a},500);
  });


  $("#gnb li").click(function(){
    let num=$(this).index();
      $("html,body").stop().animate({scrollTop:wh*num},500);
  });

  let a = 0;
  let area_n = $(".area").length;
  let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta){
    if (wheel){ 
      e.stopPropagation();
      let n = $(this).index();
      if(delta < 0){
        a = n+0;
      }else{
        a = n-2;
      }

      if( a <= 0){ a = 0;}
      if( a >= area_n-1){ a = area_n-1;}

      $("#tt").text(a);
      $("#dot span").eq(a).addClass("active");
      $("#dot span").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({scrollTop:wh*a},600);
    };
  });

  $(".list_gp>li>.thum, .list_gp2>li>.th_p, .go a:nth-child(2), .go2 a:nth-child(2), .go3 .hana_modal, .go4 .museum_modal, .go5 .dadok_modal").click(function(){
    wheel = false;
  });

  $(".close, .close2, .modal3, .modal4, .modal5, .modal6, .modal7").click(function(){
    wheel = true;
  });
});