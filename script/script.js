$(document).ready(function(){
    var ww = $(window).width();
    media();
    function media(){
        if(ww >= 1799){
            new fullpage('#wrap',{
                anchors: ['anchor1', 'anchor2', 'anchor3','anchor4','anchor5'],
                scrollBar:true,
                // autoScrolling:true,
                normalScrollElements: '.footer,.sec-3',
                // 지정한 섹션에서는 풀페이지 막아주기 
                fitToSection: false,
                // 높이값이 풀페이지가 아닌경우 풀페이지 상단 영역으로 올라가는 것 막아주기
            });
        }else{}
        if(ww > 936){
            $('.sub-1').click(function(){
                $(window).scrollTop('1108');
            });
            $('.sub-2').click(function(){
                $(window).scrollTop('2020');
            });
            $('.sub-3').click(function(){
                $(window).scrollTop('4062');
            });
            $('.sub-4').click(function(){
                $(window).scrollTop('4962');
            });
            $('.sub-5').click(function(){
                $(window).scrollTop('6262');
            });
            $('.sub-6').click(function(){
                $(window).scrollTop('7162');
            });
            $('.sub-7').click(function(){
                $(window).scrollTop('8097');
            });
        
        }else if(ww <= 500){
            $('.sub-1').click(function(){
                $(window).scrollTop('1108');
            });
            $('.sub-2').click(function(){
                $(window).scrollTop('2020');
            });
            $('.sub-3').click(function(){
                $(window).scrollTop('2615');
            });
            $('.sub-4').click(function(){
                $(window).scrollTop('3808');
            });
            $('.sub-5').click(function(){
                $(window).scrollTop('3828');
            });
            $('.sub-6').click(function(){
                $(window).scrollTop('4180');
            });
            $('.sub-7').click(function(){
                $(window).scrollTop('4544');
            });
        }

    }
    
    // 햄버거버튼
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.slide-menu').toggleClass('active');
        $('.slide-menu .hamburger').toggleClass('on');
    });
    // 배너
    //메뉴호버
    $('.catagory li').mouseenter(function(){
        $('.catagory a img').addClass('active');
        $(this).siblings().find('img').removeClass('active');
    });
    $('.catagory li').mouseleave(function(){
        $('.catagory a img').removeClass('active');
    });

    $('.r-box .op-cl-l .close').mouseenter(function(){
        $('.r-box .op-cl-l .close').addClass('active');
        $('.r-box .op-cl-l .open').addClass('active');
    });
    // $('.op-cl-l .close').mouseleave(function(){
    //     $(this).removeClass('active');
    //     $('.op-cl-l .open').removeClass('active');
    // });
    
    $('.op-cl-r .close').mouseenter(function(){
        $(this).addClass('active');
        $('.op-cl-r .open').addClass('active');
    });
    $('.op-cl-r .close').mouseleave(function(){
        $(this).removeClass('active');
        $('.op-cl-r .open').removeClass('active');
    });

    // sec-1
    //조명호버
    $('.color-lamp').mouseenter(function(){
        $(this).siblings('.light').addClass('on');
        $(this).siblings('.ani').addClass('on');
    });
    $('.color-lamp').mouseleave(function(){
        $(this).siblings('.light').removeClass('on');
        $(this).siblings('.ani').removeClass('on');
    });

    $('.light-2 .lamp-2').mouseenter(function(){
        $('.glass-lamp').siblings('.light').addClass('on');
        $('.glass-lamp').siblings('.ani').addClass('on');
    });
    $('.light-2 .lamp-2').mouseleave(function(){
        $('.glass-lamp').siblings('.light').removeClass('on');
        $('.glass-lamp').siblings('.ani').removeClass('on');
    });

    $('.sec-2 .light').mouseenter(function(){
        $('.light-over').addClass('active');
    });
    $('.sec-2 .light').mouseleave(function(){
        $('.light-over').removeClass('active');
    });






    $('.sec-2 .door').mouseenter(function(){
        $(this).addClass('active');
        $('.door-op').addClass('active');
        $('.knock').addClass('active');
        $('.clock').addClass('active');
    });
    
    $('.sec-2 .door').mouseleave(function(){
        $(this).removeClass('active');
        $('.door-op').removeClass('active');
        $('.knock').removeClass('active');
        $('.clock').removeClass('active');
    });



    $('.con').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.font').addClass('active');
        $(this).siblings().find('.font').removeClass('active')
    });
    $('.con').mouseleave(function(){
        $(this).removeClass('active');
        $('.font').removeClass('active');
    });
    
    $(window).scroll(function(){
    const sct =$(window).scrollTop();
    console.log(sct);
    if(sct >= 804){
        $('.header').addClass('active');
        
    }else{
        $('.header').removeClass('active');  
    }


    // $('.sub-1').click(function(){
    //     $(window).scrollTop('1108');
    // });
    // $('.sub-2').click(function(){
    //     $(window).scrollTop('2020');
    // });
    // $('.sub-3').click(function(){
    //     $(window).scrollTop('4062');
    // });
    // $('.sub-4').click(function(){
    //     $(window).scrollTop('4962');
    // });
    // $('.sub-5').click(function(){
    //     $(window).scrollTop('6262');
    // });
    // $('.sub-6').click(function(){
    //     $(window).scrollTop('7162');
    // });
    // $('.sub-7').click(function(){
    //     $(window).scrollTop('8097');
    // });
    });

    

    
});