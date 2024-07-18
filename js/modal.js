$(document).ready(function(){
	
  $(".list_gp>li>.thum").click(function(){

    g_pop=$(this).index();

    $(".g_page em:nth-child(1)").text(g_pop+1);
    $("html").css({"overflow-y":"hidden"});
    $(".modal_content>li").eq(g_pop).fadeIn();
    $(".modal").stop().fadeIn();
    wheel = false;
  });

  $(".pre").click(function(){
    if(g_pop>0){
      $(".modal_content>li").eq(g_pop).stop().fadeOut(); 
      g_pop--;
      $(".g_page em:nth-child(1)").text(g_pop+1);
			$(".modal_content>li").eq(g_pop).stop().fadeIn();
    };
  });

  $(".next").click(function(){
    if(g_pop<7){
      $(".modal_content>li").eq(g_pop).stop().fadeOut(); 
      g_pop++;
      $(".g_page em:nth-child(1)").text(g_pop+1);
			$(".modal_content>li").eq(g_pop).stop().show();
    };
  });

  $(".close").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal").stop().fadeOut();
		$(".modal_content>li").stop().hide();
    wheel = true;
  });

  

});