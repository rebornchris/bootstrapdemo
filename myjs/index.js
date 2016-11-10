/**
 * Created by 89529 on 2016/10/31.
 */

//动画效果
//1.文字标题部分flipInY
$(function(){
   $(document).scroll(function(){
       if($(document).scrollTop()>=$('#twopage').offset().top){
            $('#navigation-sticky-wrapper').addClass('navbar-fixed-top');
       }
       if($(document).scrollTop()<$('#twopage').offset().top){
               $('#navigation-sticky-wrapper').removeClass('navbar-fixed-top');
               //console.log($(document).scrollTop());
               //console.log($('#navigation-sticky-wrapper').offset().top);

       }

       if($(document).scrollTop()>=$('#threepage .page-header').offset().top-1100){
           $('#threepage').animate({opacity:'1'},1000);
           $('#threepage .page-header').addClass('flipInY');
           //alert(1111);
       }
       if($(document).scrollTop()>=$('#fourpage .page-header').offset().top-1000){
           $('#fourpage').animate({opacity:'1'},1000);
           $('#fourpage .page-header').addClass('flipInY');
           $('#left').addClass('fadeInLeft');
           $('#up1').addClass('fadeInUp');
           $('#up2').addClass('fadeInUp');
           $('#right').addClass('fadeInRight');
       }


       if($(document).scrollTop()>=$('#wupage .page-header').offset().top-800){
           $('#wupage').animate({opacity:'1'},1000);
           $('#wupage .page-header').addClass('flipInY');
           $('#wupage #owl-demo').addClass('bounceInUp');
       }

       if($(document).scrollTop()>=$('#sixpage .page-header').offset().top-800){
           $('#sixpage').animate({opacity:'1'},1000);
           $('#sixpage .page-header').addClass('flipInY');
           $('#sixpage .marginbot-80').addClass('bounceInUp');
       }

   });

    $('.navbar-nav li a').bind('click',function(event){
        var $nav = $(this).attr('href');
        $('html body').stop().animate({
            scrollTop:$($nav).offset().top
        },1500);
    });

    $('.totop').click(function(){
        $('html body').stop().animate({
            scrollTop:'0'
        },1500);
    });

});
