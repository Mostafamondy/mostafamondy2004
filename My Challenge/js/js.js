  $('.omg').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-select').slideToggle(300);
    });
    $('.omg').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-select').slideUp(300);
    });
    $('.omg .dropdown-select li').click(function () {
        $(this).parents('.omg').find('span').text($(this).text());
 
    });
/*End Dropdown Menu*/
$(function () {
    'use strict';
    $('.pass').on('focusout' ,function (){
        $(this).css('opacity','0')
        if ($(this).val() !='' ) {
            $(this).css('opacity','0');
        } else {
            $(this).css('has-data');
        }
    });
}); 

new WOW().init();