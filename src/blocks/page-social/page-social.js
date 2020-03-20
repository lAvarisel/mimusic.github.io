const $ = require('../../js/jquery-3.4.1.min.js');
// const ase = require('../../js/slick/slick.min.js');
// ../../js/jquery-3.4.1.min.js

// $(document).ready(function(){
//   $('.page-news__inner').addClass('page-social__item--hidden');
//   // $('.page-news__inner').addClass('работает');

// });

// $(".page-news__inner").addClass('работает')

$(".page-social__listLink").on("click", function (event) {
    event.preventDefault();
    $(".page-social__listLink--active").removeClass('page-social__listLink--active')
    $(this).addClass('page-social__listLink--active')
    switch (this.innerHTML) {
        case 'facebook':
            $(".page-social__item--youtube").addClass('page-social__item--hidden')
            $(".page-social__item--twitter").addClass('page-social__item--hidden');
            $(".page-social__item--facebook").removeClass('page-social__item--hidden')
          break;
        case 'twitter':
            $(".page-social__item--facebook").addClass('page-social__item--hidden')
            $(".page-social__item--youtube").addClass('page-social__item--hidden');
            $(".page-social__item--twitter").removeClass('page-social__item--hidden');
          break;
        case 'youtube':     
            $(".page-social__item--facebook").addClass('page-social__item--hidden')
            $(".page-social__item--twitter").addClass('page-social__item--hidden');
            $(".page-social__item--youtube").removeClass('page-social__item--hidden');
            // $(".page-social__inner").addClass('page-social__inner--template1')
          break;
        case 'all':     
            $(".page-social__item--facebook").removeClass('page-social__item--hidden')
            $(".page-social__item--twitter").removeClass('page-social__item--hidden');
            $(".page-social__item--youtube").removeClass('page-social__item--hidden');
            break;
        default:
            $(".page-social__item--facebook").addClass('page-social__item--hidden')
            $(".page-social__item--youtube").addClass('page-social__item--hidden');
            $(".page-social__item--twitter").addClass('page-social__item--hidden');
          break;
      }
});

 