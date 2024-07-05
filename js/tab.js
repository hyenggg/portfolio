$(document).ready(function(){

  $(".btn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active"); 

    let result = $(this).attr("data-alt");
    $(".list_all div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

});