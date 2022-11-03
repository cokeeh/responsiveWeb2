//*햄버거 메뉴*//
    $(document).ready(function(){
            $(".ham").click(function(){
                $(".a").slideToggle();
            });

           $(window).resize(function(){
                if(window.innerWidth<=1000){
                    $(".a").hide();
                }

                if(window.innerWidth>=1001){
                    $(".a").show();
                }
            });
        });