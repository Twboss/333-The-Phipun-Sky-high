$(document).ready(function(){
    //If the window is scrolled, call this function
    $(window).scroll(function(){
        let currentScrollTop = $(this).scrollTop();
        console.log(currentScrollTop);

        let topFactor = 0.5;
        let widthFactor = 0.2;

        $("#logo--00").css("top", 10 + currentScrollTop*topFactor + "px")
        $("#logo--01").css("top", 2000 - currentScrollTop*topFactor + "px")
        $("#logo--02").css("top", 1000 + currentScrollTop*topFactor + "px")
        $("#logo--03").css("top", 5000 - currentScrollTop*topFactor + "px")
        $("#logo--04").css("top", 2200 + currentScrollTop*topFactor + "px")

        $("#main-img").css("width", 50 + currentScrollTop*widthFactor +"%");
        $("#main-img").css("height", 50 + currentScrollTop*widthFactor +"%");
        if((currentScrollTop*widthFactor > 50)){
            $("#main-img").css("border-radius", "0%");
        }
        else{
             $("#main-img").css("border-radius", 50 - currentScrollTop*widthFactor +"%");

        }
    });
});