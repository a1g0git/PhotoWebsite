$(document).ready(function(){
$("#phototheme").change(function(){
  location.href=jQuery(this).val();  
    
});


$(".contactBox").load("https://mervgibsonimages.com/contactus.sc");

$("#slr").click(function(){
    $(".tips").hide();
    $(".slr").show();
});

$("#cP").click(function(){
    $(".tips").hide();
    $(".cP").show();
});

$("#pS").click(function(){
    $(".tips").hide();
    $(".pS").show();
});
    

});


