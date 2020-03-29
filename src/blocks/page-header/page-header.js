import $ from 'jquery';

// const $ = require('jquery');
// $( document ).ready(function() {});





$( () => {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('#header').addClass('page-header__inner--navShadow') : $('#header').removeClass('page-header__inner--navShadow');
	});
});


// $("#navToggle").click(function() {
//   $('#nav').toggleClass("main-nav--overlay");
//   $('.social').toggleClass("social--mobile");
//   $(this).toggleClass("main-nav__toggler--active");
//   $(".page-header__nav").toggleClass("page-header__nav--overlay");
//   // this line ▼ prevents content scroll-behind
//   $("body").toggleClass("locked");
// });
$("#navToggle").click(function() {
	$('#nav').toggleClass("main-nav--overlay");
	$('.main-nav__list').toggleClass("main-nav__list--overlay");
	$('.social').toggleClass("social--mobile");
	$(this).toggleClass("main-nav__toggler--active");
	$(".page-header__nav").toggleClass("page-header__nav--overlay");
	// this line ▼ prevents content scroll-behind
	$("body").toggleClass("locked");
  });