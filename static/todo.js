$(document).ready(function () {
    //for adding line-through  
    $("tr").on('click','td',function(e){
        $(this).parent().toggleClass("listtext");
    });


    // //when span(delete icon) is pressed delete the list
    // $('.trash').on('click',function(e){
    //     $(this).parent().parent().fadeOut(500,function(){
    //         $(this).remove();
    //     });
    //     e.stopPropagation();
    // });

    $('.fa-edit').on('click',function(){
        $(this).parent().parent().removeClass("listtext");
    )};


    //for controlling create new todo
    $('.fa-plus').on('click', function(){
        $('.floating').toggleClass("inputview");
        $('input').toggleClass("inputview");
        $(this).toggleClass("fa-times");
        $(this).toggleClass("fa-plus");
        
        });

    //fadout warning sign
    setTimeout(function(){
        $(".fademessage").fadeOut(400,function(){
            $(this).remove();
        });
    },3000)


    //sign coloring manager
    $("td.sign").each(function (index,element){
        if($(this).text() == '+')
        {
            $(this).text("");
            $(this).addClass("plussign");
        }
        if($(this).text() == '-'){
            $(this).text("");
            $(this).addClass("minussign");
        }
    });

    //balance green for more income and red for expense     

});