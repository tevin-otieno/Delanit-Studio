$( ".toggleDes" ).click(function() {     
    if($('.txtDes:visible')){
        $('.imgDes').hide();
        $('.txtDes').show();
    }else{
        $('.imgDes').show();
        $('.txtDes').hide();

}});
$( ".toggleDev" ).click(function() {     
    if($('.txtDev:visible')){
        $('.imgDev').hide();
        $('.txtDev').show();
    }else{
        $('.imgDev').show();
        $('.txtDev').hide();       
}});
$( ".togglePM" ).click(function() {     
    if($('.txtPM:visible')){
        $('.imgPM').hide();
        $('.txtPM').show();
    }else{
        $('.imgPM').show();
        $('.txtPM').hide();        
}});