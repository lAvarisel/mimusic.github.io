import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.page-news__slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        dotsClass: 'page-news__list'
        // customPaging : function(slider, i) {
        //     var thumb = $(slider.$slides[i]).data('thumb');
        // return '<div class="dot-play"><p class="play-title">У меня в этот момент три очка сжалось</p><div class="descr-play-dot"><p>Рассмеши комика</p><p>08:49</p></div>';
//         // }
    });
});

$(".page-news__item").on("click", function (event) {
    event.preventDefault();
    $(".page-news__item--active").removeClass('page-news__item--active')
    $(this).addClass('page-news__item--active')
});