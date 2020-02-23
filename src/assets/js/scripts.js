function addingBlue(target, cssClass){
    if($(target).hasClass(cssClass) === true ){
        $(target).removeClass(cssClass);
    }else{
        $(target).addClass(cssClass);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {

    $("a#toggle-button").click(function(){
        $("section.side-nav").css("width","320px");
        $(".veil").fadeIn();
    })

    $("a#close-toggle").click(function(){
        $("section.side-nav").css("width","0px");
        $(".veil").fadeOut();
    })

    $(".options-button span").click(function(e){
        var target = e.target;
        addingBlue(target,"selected");
    })

    $("path#d11, path#d15, path#d26, path#d46, path#d36").click(function(e){
        var target = e.target;
        addingBlue(target,"selectedTeeth");
    });

    $(".footer-nav ul li a").click(function(e){
        e.preventDefault();
        $(".footer-nav ul li a").removeClass("tabActive");
        $(this).addClass("tabActive");
    })

});