$(document).ready(function(){
	
  $(".go a:nth-child(2)").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal3").fadeIn();
    $(".modal3").scrollTop(0);
  });

  $(".btn_close").click(function(){
    $(".modal3").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".go2 a:nth-child(2)").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal4").fadeIn();
    $(".modal4").scrollTop(0);
  });

  $(".btn_close2").click(function(){
    $(".modal4").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".go3 .hana_modal").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal5").fadeIn();
    $(".modal5").scrollTop(0);
  });

  $(".btn_close3").click(function(){
    $(".modal5").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".go4 .museum_modal").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal6").fadeIn();
    $(".modal6").scrollTop(0);
  });

  $(".btn_close4").click(function(){
    $(".modal6").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".go5 .dadok_modal").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal7").fadeIn();
    $(".modal7").scrollTop(0);
  });

  $(".btn_close5").click(function(){
    $(".modal7").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

});