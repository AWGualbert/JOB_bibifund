$(document).ready(function(){
    $(".view_all_projects").click(function(){
       $(".list_project").slideToggle("slow");
    });
    
//    Menu responsive

    $(".btn_menu").click(function(){
        $(".main_nav").toggleClass("active_menu")
    });
});