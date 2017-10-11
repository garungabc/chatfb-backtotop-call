// === facebook-dialog ===
$('.btn-fb-dialog').css({'display' : 'block', 'z-index' : '1000'});
$('.fb-iframe').css({'display' : 'none'});
var height_ifr = $('.fb-iframe').height();
$('.btn-fb-dialog').click(function(){
    var show = $('.fb-iframe').attr('data-show');
    if(show == 'none') {
        $('.fb-iframe').css({'display' : 'block','position': 'fixed', 'z-index' : '1000', 'bottom' : '0', 'right' : '0'});
        $('.btn-fb-dialog').css({'position' : 'fixed', 'bottom' : height_ifr});
        $('.fb-iframe').attr('data-show', 'show');
        $('.btn-fb-dialog').html('Đóng <i class="fa fa-times" aria-hidden="true"></i>');
    } else {
        $('.fb-iframe').attr('data-show', 'none');
        $('.fb-iframe').css({'display' : 'none', 'bottom' : '0'});
        $('.btn-fb-dialog').css({'bottom' : '0'});
        $('.btn-fb-dialog').text('Gửi tin nhắn cho chúng tôi ');
    }
});

$('.btn-fb-dialog-mobile').click(function(){
    var show = $('.fb-iframe').attr('data-show');
    if(show == 'none') {
        $('.fb-iframe').css({'display' : 'block','position': 'fixed', 'z-index' : '1000', 'bottom' : '0', 'right' : '0'});
        $('.btn-fb-dialog-mobile').css({'position' : 'fixed', 'bottom' : height_ifr});
        $('.fb-iframe').attr('data-show', 'show');
        $('.btn-fb-dialog-mobile').html('<i class="fa fa-times" aria-hidden="true"></i>');
    } else {
        $('.fb-iframe').attr('data-show', 'none');
        $('.fb-iframe').css({'display' : 'none', 'bottom' : '0'});
        $('.btn-fb-dialog-mobile').css({'bottom' : '15px'});
        $('.btn-fb-dialog-mobile').html('<i class="fa fa-envelope-open" aria-hidden="true"></i>');
    }
});