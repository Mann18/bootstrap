$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else {

            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });

    $("#loginid").click(function(){
        $("#loginModal").modal("show");

    });
    $(".close").click(function(){
        $("#loginModal").modal("hide");
    });
    $(".cncl").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#tablebtn").click(function(){
        $("#TableModal").modal("show");

    });
    $(".close").click(function(){
        $("#TableModal").modal("hide");
    });
    $(".cncl").click(function(){
        $("#TableModal").modal("hide");
    });

});
