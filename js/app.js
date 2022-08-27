$(document).ready(function(){
    
    // main dynamic content
    $(".main-dynamic").load("card-dynamic/welcome.html")


    $(".nav-link").click(function(){
        $(".nav-link ").removeClass("current");
        $(this).addClass("current");
        var page=$(this).attr("data-page");
        $(".main-dynamic").load(page)
    })
    // main dynamic content






   
    // productitem



  })
