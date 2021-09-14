$(document).ready(function(){
    $('#imgDes').click(function(){     
        $('#imgDes').hide();
        $('#txtDes').show();
    });
    $('#txtDes').click(function(){
        $('#imgDes').show();
        $('#txtDes').hide();
    });
    $('#imgDev').click(function(){
        $('#imgDev').hide();
        $('#txtDev').show();
    });
    $('#txtDev').click(function(){
        $('#imgDev').show();
        $('#txtDev').hide();
    });
    $('#imgPM').click(function(){
        $('#imgPM').hide();
        $('#txtPM').show();
    });
    $('#txtPM').click(function(){
        $('#imgPM').show();
        $('#txtPM').hide();
    });     
});

$(function () {
    $(document).tooltip();
});

$(document).mousemove(function (event) {
    $(document).tooltip("option", "position", {
        my: "left+3 bottom-3",
        of: event
    });
});