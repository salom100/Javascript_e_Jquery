$(function(){
    $('#l1').click(function(){
        $('#i1').fadeIn(2000);
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    })

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').fadeIn(2000);
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').fadeIn(2000);
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').fadeIn(2000);
    });
})