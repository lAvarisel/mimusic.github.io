import $ from 'jquery';

// const $ = require('jquery');
// $( document ).ready(function() {});





$( () => {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('#header').addClass('page-header__inner--navShadow') : $('#header').removeClass('page-header__inner--navShadow');
	});
});