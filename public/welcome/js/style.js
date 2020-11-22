$(document).ready(function(){
    vnTRUST.goTopStart();
    $(".vnt-search .vs_title").click(function(event) {
        if(! $(this).parents(".vnt-search").hasClass('show')){
            $(this).parents(".vnt-search").addClass('show');
        }else{
            $(this).parents(".vnt-search").removeClass('show');
        }
    });
    $(window).bind('click', function(event) {
        var $clicked = $(event.target);
        if(! $clicked.parents().hasClass('vnt-search')){
            $(".vnt-search").removeClass('show');
        }
    });
    var $width = $(window).innerWidth();
    $(".info-link .node .node-title").click(function(){
        if($width <= 1024){
            if(! $(this).parents(".node").hasClass("active")){
                $(this).parents(".node").addClass("active");
                $(this).parents(".node").find(".node-content").stop().slideToggle(700);
                $(this).parents(".node").siblings().each(function(){
                    if($(this).hasClass("active")){
                        $(this).removeClass("active");
                        $(this).find(".node-content").stop().slideToggle(700);
                    }
                });
            }else{
                $(this).parents(".node").removeClass("active");
                $(this).parents(".node").find(".node-content").stop().slideToggle(700);
            }
        }
    });
    $(window).resize(function(){
        if($(window).innerWidth() > 1024){
            if($width <= 1024){
                $(".info-link .node").removeClass("active").find(".node-content").css({'display':'block'});
            }
        }else{
            if($width > 1024){
                $(".info-link .node .node-content").css({'display':'none'});
            }
        }
        $width = $(window).innerWidth();
    });
    $("#slider_img").slick({
        dots: false,
        speed: 800,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        //pauseOnHover: true,
        autoplaySpeed: 8000
    });
    $("#slider_img").addClass("active");
    $(".menu-category .label-title").click(function(e){
        if(! $(this).parents(".menu-category").hasClass("active")){
            $(this).parents(".menu-category").addClass("active");
        }else{
            $(this).parents(".menu-category").removeClass("active");
        }
    });
    $(window).bind("click",function(e){
        var $clicked = $(e.target);
        if(! $clicked.parents().hasClass("menu-category")){
            $(".menu-category").removeClass("active");
        }
    });
});
$(document).ready(function(){
    $(".mmMenu ul li").each(function(){
        var countsize = $(this).find("ul li").size();
        if(countsize > 0){
            $(this).find("a:first").wrap("<div class='m-sub'></div>");
            $(this).find(".m-sub:first").append("<div class='button-submenu'></div>")
        }
    });
    $(".mmMenu ul li ul").css({'display':'none'});
    $(".mmMenu ul li .button-submenu").click(function(){
        if(! $(this).hasClass("show")){
            $(this).parent().parent().find("ul:first").stop().slideToggle(700);
            $(this).addClass("show");
            $(this).parent().parent().siblings().each(function(){
                if($(this).find(".m-sub:first").find(".button-submenu").hasClass("show")){
                    $(this).find("ul:first").stop().slideToggle(700);
                    $(this).find(".m-sub:first").find(".button-submenu").removeClass("show");
                }
            });
        }else{
            $(this).parent().parent().find("ul:first").stop().slideToggle(700);
            $(this).removeClass("show");
        }
    });
    $(".menu_mobile .icon_menu").click(function(event) {
        if(! $(".menu_mobile").hasClass("showmenu")){
            $(".menu_mobile").find(".divmm").addClass('show');
            $('.menu_mobile').addClass("showmenu");
            $('html').addClass("openmenu");
            $('body').css({});
        }else{
            $(".menu_mobile").find(".divmm").removeClass('show');
            $('.menu_mobile').removeClass("showmenu");
            $('html').removeClass("openmenu");
        }
    });
    $(".menu_mobile .divmm .divmmbg , .menu_mobile .divmm .mmContent .close-mmenu").click(function(event) {
        $(this).parents(".menu_mobile").find(".divmm").removeClass('show');
        setTimeout(function() {
            $('.menu_mobile').removeClass("showmenu");
            $('html').removeClass("openmenu");
        }, 500);
    });
    $(window).resize(function(){
        if($(window).innerWidth() > 1024){
            $(".menu_mobile").find(".divmm").removeClass('show');
            $('.menu_mobile').removeClass("showmenu");
            $('html').removeClass("openmenu");
        }
    });
});