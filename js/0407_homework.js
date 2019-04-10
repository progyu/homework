var subSubtitle = $('.sub_title');
var subSubitem = $('.sub_menu');
var subA = $('.last_list, .language li:last-child');
var allSub = $('.sub_title, .sub_menu');
var language = $('.language');

subSubtitle.on('mouseover focusin', function(){
    subSubitem.removeClass('block_act')
    subSubitem.addClass('background');
    $(this).children().addClass('block_act');
  });

subSubtitle.on('mouseout', function(){
    subSubitem.removeClass('block_act');
});

subA.on('focusout', function(){
    subSubitem.removeClass('block_act');
    $('.language').removeClass('block_act');
});

$('.select_language').on(`click focusin`,function(){
    language.addClass('block_act');
});

language.on('click',function(){
    language.removeClass('block_act');
});
