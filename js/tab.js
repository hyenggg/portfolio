$(document).ready(function(){

  $(".btn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active"); 

    let result = $(this).attr("data-alt");
    $(".list_all div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  $(".list_gp2>li>.th_p").click(function(){

    g_pop=$(this).index();

    $(".g_page2 em:nth-child(1)").text(g_pop+1);
    $("html").css({"overflow-y":"hidden"});
    $(".modal_content2>li").eq(g_pop).fadeIn();
    $(".modal2").stop().fadeIn();
  });

  $(document).ready(function(){

    $(".p_btn li").click(function(){
      $(this).addClass("active3");
      $(this).siblings().removeClass("active3"); 
  
      let result = $(this).attr("data-alt");
      $(".plist_all div").removeClass("active2");
      $("#"+result).addClass("active2").hide().fadeIn();  //show()도 가능
    });
  
  });

  $(".pre2").click(function(){
    if(g_pop>0){
      $(".modal_content2>li").eq(g_pop).stop().fadeOut(); 
      g_pop--;
      $(".g_page2 em:nth-child(1)").text(g_pop+1);
			$(".modal_content2>li").eq(g_pop).stop().fadeIn();
    };
  });

  $(".next2").click(function(){
    if(g_pop<4){
      $(".modal_content2>li").eq(g_pop).stop().fadeOut(); 
      g_pop++;
      $(".g_page2 em:nth-child(1)").text(g_pop+1);
			$(".modal_content2>li").eq(g_pop).stop().show();
    };
  });

  $(".close2").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal2").stop().fadeOut();
		$(".modal_content2>li").stop().hide();
    $(".area").on();
  });


});