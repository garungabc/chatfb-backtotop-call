<!-- Back-to-top -->
<div id="back-to-top">
    <a href="javascript:void(0)"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
</div>

<!-- phone-support -->
<div class="hidden-xs phone-support opensan">
    <div class="phone-wrap">
        <a href="tel:<?php echo $instance['phone']; ?>"><i class="fa fa-phone" aria-hidden="true"></i> <?php echo $instance['text-phone'] ?></a>
    </div>
</div>
<div class="phone-support-mobile visible-xs">
    <div class="phone-wrap text-center">
        <a href="tel:<?php echo $instance['phone']; ?>"><i class="fa fa-phone" aria-hidden="true"></i></a>
    </div>
</div>

<!-- facebook-dialog -->
<div class="fb-chatdialog" style="position:relative">
    <button class="btn btn-primary btn-fb-dialog hidden-xs" style="position: fixed; bottom: 0; right: 10px;">Gửi tin nhắn cho chúng tôi</button>
    <button class="btn btn-primary btn-fb-dialog-mobile visible-xs"><i class="fa fa-envelope-open" aria-hidden="true"></i></button>
    <iframe class="fb-iframe" src="https://www.facebook.com/plugins/page.php?href=https:%2F%2Fwww.facebook.com%2Fthoitrangchuyende&tabs=messages&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1696048927319976" width="340" height="300" data-show="none" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
</div>

<!-- preload -->
<div class="preload-handle-payment hide">
    <div class="wrapper-load text-center">
        <i class="fa fa-spinner fa-pulse fa-2x fa-fw spinner-loading"></i> Đang xử lý ...
    </div>
</div>