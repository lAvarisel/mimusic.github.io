import $ from 'jquery';
// import 'slick-carousel';

// $(document).ready(function(){
//     $('.page-news__slider').slick({
//         arrows: false,
//         dots: true,
//         vertical: true,
//         verticalSwiping: true,
//         dotsClass:  'page-news__list'
//         // customPaging : function(slider, i) {
//         //     var thumb = $(slider.$slides[i]).data('thumb');
//         // return '<div class="dot-play"><p class="play-title">У меня в этот момент три очка сжалось</p><div class="descr-play-dot"><p>Рассмеши комика</p><p>08:49</p></div>';
// //         // }
//     });
// });

$(".page-news__item").on("click", function (event) {
    if(this.id){
        event.preventDefault();
        $(".page-news__item--active").removeClass('page-news__item--active')
        $(this).addClass('page-news__item--active')
    }
});

$("#page-news__item_1").click(function () {
    $("#page-news__sliderItem_1").addClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_2").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_3").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_4").removeClass("page-news__sliderItem--active");
})
$("#page-news__item_2").click(function () {
    $("#page-news__sliderItem_1").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_2").addClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_3").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_4").removeClass("page-news__sliderItem--active");
})
$("#page-news__item_3").click(function () {
    $("#page-news__sliderItem_1").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_2").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_3").addClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_4").removeClass("page-news__sliderItem--active");
})
$("#page-news__item_4").click(function () {
    $("#page-news__sliderItem_1").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_2").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_3").removeClass("page-news__sliderItem--active");
	$("#page-news__sliderItem_4").addClass("page-news__sliderItem--active");
})