
$(document).ready(function(){
    $(function(){
        $("#head").load("./includes/meta.html");
        $("#Global-Header").load("./includes/header.html");
        $("#Global-Footer").load("./includes/footer.html");
        $("#featuredStore").load("./includes/featured.html");
    });

    
    function sizer() {
        if($(document).scrollTop() > 100) {
            $('#Global-Header').stop().animate({
                height:'100px'
            },600);
            $('#Logo-Text').css('display','none');
        } else {
            $('#Global-Header').stop().animate({
                height:'130px'
            },50);
            $('#Logo-Text').css('display','block');
        }
    }

    $(window).scroll(function(){
        sizer();
    });
    
    //Makes sure the header adjusts properly on reload
    sizer();


    //Next 3 hover functions change which img is displayed in the big frame (and deal with hover styling for the small images)
    $(".smallImg:nth-child(1)").hover(
        function(){
            $(".smallImg:not(:nth-child(1))").css('border','1px solid #C0C78C');
            $(this).css('border','3px solid #C0C78C');
            $(this).css('opacity','0.7');
            $(".bigImg:not(:nth-child(1))").css('display','none');
            $(".bigImg:nth-child(1)").css('display','block');
        },
        function(){
            $(this).css('opacity','1');
        }
    );

    $(".smallImg:nth-child(2)").hover(
        function(){
            $(".smallImg:not(:nth-child(2))").css('border','1px solid #C0C78C');
            $(this).css('border','3px solid #C0C78C');
            $(this).css('opacity','0.7');
            $(".bigImg:not(:nth-child(2))").css('display','none');
            $(".bigImg:nth-child(2)").css('display','block');
        },
        function(){
            $(this).css('opacity','1');
        }
    );

    $(".smallImg:nth-child(3)").hover(
        function(){
            $(".smallImg:not(:nth-child(3))").css('border','1px solid #C0C78C');
            $(this).css('border','3px solid #C0C78C');
            $(this).css('opacity','0.7');
            $(".bigImg:not(:nth-child(3))").css('display','none');
            $(".bigImg:nth-child(3)").css('display','block');
        },
        function(){
            $(this).css('opacity','1');
        }
    );

    $(".ShopImg").hover(
        function(){
            $(this).css('opacity','0.7');
        },
        function(){
            $(this).css('opacity','1');
        }
    )


});

