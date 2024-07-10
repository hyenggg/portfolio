$(document).ready(function(){

  let slideContainer = $('.slide'),
      slideWidth = slideContainer.width(),
      slideHeight = slideContainer.height(),
      slideCount = $('.slide_items li').length,
      slideItemsWidth = slideWidth * slideCount,
      slidePrev = slideContainer.find(".side-btn .prev"),
      slideNext = slideContainer.find(".side-btn .next3");

  // 슬라이드의 기본 위치
  $('.slide_item').css({'width': slideWidth, 'height': slideHeight});
  $('.slide_items').css({'width': slideItemsWidth, 'height': slideHeight});
  $('.slide_item:last-child').prependTo($('.slide_items'));
  $('.slide_items').css({'margin-left': -slideWidth});

  function slideLeft(){
    $('.slide_items').stop().animate({'left':-slideWidth},500,function(){
      $('.slide_items').css({'left':0});
      $('.slide_item:first-child').appendTo('.slide_items');
    });
  };
  
  function slideRight(){
    $('.slide_items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide_items').css({'left': 0});
      $('.slide_item:last-child').prependTo('.slide_items');
    });
  }

  slidePrev.click(function(e){
    e.preventDefault();
    slideRight();
  });

  slideNext.click(function(e){
    e.preventDefault();
    slideLeft();
  });

  
});