$(document).ready(function(){
	
  $(".go a:nth-child(2)").click(function(){
    $("html").css({"overflow-y":"hidden"});
    $(".modal3").fadeIn();
  });

  $(".btn_close").click(function(){
    $(".modal3").fadeOut();
    $("html").css({"overflow-y":"scroll"}); 
  });

});