$(document).ready(function(){
$("#phototheme").change(function(){
  location.href=jQuery(this).val();  
    
});


$(".contactBox").load("https://mervgibsonimages.com/contactus.sc");

$("#slr").click(function(){
    $(".tips").hide();
    $(".slr").show();
});

$("#cp").click(function(){
    $(".tips").hide();
    $(".cp").show();
});

$("#ps").click(function(){
    $(".tips").hide();
    $(".ps").show();
});
    

});


