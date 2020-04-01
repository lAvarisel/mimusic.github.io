import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.page-slides__inner').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        // dotsClass:  'page-news__list'
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
        return `<div class="page-slides__dot">${[i+1]}</div>`;
        }
    });
});