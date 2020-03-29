/* global document Element */
import $ from 'jquery';
// const ready = require('../../js/utils/documentReady.js');

// ready(function(){

//   // Добавление/удаление модификаторов при фокусировке на ссылочном элементе
//   var linkClassName = 'main-nav__link';
//   var linkClassNameShowChild = 'main-nav__item--show-child';
//   var findLinkClassName = new RegExp(linkClassName);
//   // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)
//   document.addEventListener('focus', function(event) {
//     // Если событие всплыло от одной из ссылок гл. меню
//     if (findLinkClassName.test(event.target.className)) {
//       // Добавим классы, показывающие списки вложенных уровней, на всех родителей
//       var parents = getParents(event.target, '.main-nav__item');
//       for (var i = 0; i < parents.length; i++) {
//         parents[i].classList.add(linkClassNameShowChild);
//       }
//     }
//   }, true);
//   // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)
//   document.addEventListener('blur', function(event) {
//     // Если событие всплыло от одной из ссылок гл. меню
//     if (findLinkClassName.test(event.target.className)) {
//       // Уберем все классы, показывающие списки 2+ уровней
//       var parents = document.querySelectorAll('.'+linkClassNameShowChild)
//       for (var i = 0; i < parents.length; i++) {
//         parents[i].classList.remove(linkClassNameShowChild);
//       }
//     }
//   }, true);



//   // eslint-disable
//   /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */
//   /**
//    * Get all of an element's parent elements up the DOM tree
//    * @param  {Node}   elem     The element
//    * @param  {String} selector Selector to match against [optional]
//    * @return {Array}           The parent elements
//    */
//   var getParents = function ( elem, selector ) {

//       // Element.matches() polyfill
//       if (!Element.prototype.matches) {
//           Element.prototype.matches =
//               Element.prototype.matchesSelector ||
//               Element.prototype.mozMatchesSelector ||
//               Element.prototype.msMatchesSelector ||
//               Element.prototype.oMatchesSelector ||
//               Element.prototype.webkitMatchesSelector ||
//               function(s) {
//                   var matches = (this.document || this.ownerDocument).querySelectorAll(s),
//                       i = matches.length;
//                   while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line
//                   return i > -1;
//               };
//       }

//       // Setup parents array
//       var parents = [];

//       // Get matching parent elements
//       for ( ; elem && elem !== document; elem = elem.parentNode ) {

//           // Add matching parents to array
//           if ( selector ) {
//               if ( elem.matches( selector ) ) {
//                   parents.push( elem );
//               }
//           } else {
//               parents.push( elem );
//           }

//       }

//       return parents;

//   };

// });

window.onload = $('#nav ul li:first').addClass('main-nav__item--active');

$(window).scroll(function(){
  let $sections = $('section');
  let $footer = $('footer');
  $sections.each(function(i,el){
    let top  = $(el).offset().top-100;
    let bottom = top +$(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr('id');
    switch(id) {
      case 'id_livedates':
        if ( scroll > (top+405) && scroll < bottom) {
          $('li.main-nav__item--active').removeClass('main-nav__item--active');
          $('a[href="#'+id+'"]').parent().addClass('main-nav__item--active');
        }
        break;
      default:
        if ( scroll > top && scroll < bottom) {
          $('li.main-nav__item--active').removeClass('main-nav__item--active');
          $('a[href="#'+id+'"]').parent().addClass('main-nav__item--active');
        }
    }
  })
  $footer.each(function(j,foot){
    let top  = $(foot).offset().top-100;
    let bottom = top +$(foot).height();
    let scroll = $(window).scrollTop();
    let id = $(foot).attr('id');
    if ( scroll > (top+650) && scroll < bottom) {
      $('li.main-nav__item--active').removeClass('main-nav__item--active');
      $('a[href="#'+id+'"]').parent().addClass('main-nav__item--active');
    }
  })
});

$(".main-nav__item").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  switch(id) {
    case '#id_home':
      $('body,html').animate({scrollTop: top}, 800);
      break
    case '#id_livedates':
      $('body,html').animate({scrollTop: top + 400}, 800);
      break
    case '#id_albums':
      $('body,html').animate({scrollTop: top}, 800);
      break
    case '#id_news':
      $('body,html').animate({scrollTop: top + 350}, 800);
      break
    case '#id_about':
      $('body,html').animate({scrollTop: top + 650}, 800);
      break
  }
});
