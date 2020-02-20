document.addEventListener("DOMContentLoaded", function(event) {
    $("path#d11, path#d15, path#d26, path#d46, path#d36").click(function(){
        if($(this).hasClass("selectedTeeth") === true){
            $(this).removeClass("selectedTeeth");
        }else{
            $(this).addClass("selectedTeeth");
        }
    });
});