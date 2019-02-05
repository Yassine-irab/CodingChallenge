$(function () {
	"use strict";
	$("#header-section").load("header.html");
});

$(function () {
	"use strict";
	$("#header-sectionContent").load("headerContent.html");
});

$(document).ready(function(){

	var  menuDataURLS = "http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7";
	var contentDataURLS = "http://femme.nextmedia.ma/api/get_recent_posts/";

	$.getJSON(menuDataURLS, function(data) {
		var menuData = '';
		var count = 0;
		$.each(data, function(key, value){
			if( count < data.count) {
				menuData += '<a href="#"><span class="nav-item">'
				menuData += data.menu.output[count++].label;
				menuData += '</span></a>'
			}
			else {
				return false;
			}
		});

		$('#menuData').append(menuData);

	});

	$.getJSON(contentDataURLS, function(data) {
		var contentData = '',
			count = 0;
		$.each(data, function(key, value){
			if( count < data.count) {
				contentData += '<li class="card">'
				contentData += '<a class="card-image" href="#">'
				contentData += '<img src="'+ data.posts[++count].attachments[0].url +'" alt="" />'
				contentData += '</a>'
				contentData += '<a class="card-description" href="#" title="">'
				contentData += '<h2>'
				contentData += data.posts[count++].title;
				contentData += '</h2>'
				contentData += '<p>'
				// contentData += data.posts[count++].date.toString();
				contentData += '</p>'
				contentData += '</a>'
				contentData += '</li>'
			}
			else {
				return false;
			}
		});

		$('#contentData').append(contentData);

	});

	$.getJSON(contentDataURLS, function(data) {
		var contentData = '';
		var count = 0;
		$.each(data, function(key, value){
			if( count < data.count) {

				contentData += '<div class="swiper-slide">'
				contentData += '<div class="grid-news">'
				contentData += '<ul class="card-list">'
				contentData += '<li class="card">'
				contentData += '<a class="card-image" href="#">'
				// contentData += '<img src="'+ data.posts[++count].attachments[0].url +'" alt="" />'
				contentData += '</a>'
				contentData += '<a class="card-description" href="#" title="">'
				contentData += '<h2>'
				contentData += data.posts[++count].title;				
				contentData += '</h2>'
				contentData += '<p>'
				// contentData += data.posts[count++].date.toString();
				contentData += '</p>'
				contentData += '</a>'
				contentData += '<div class="socialShare"><div class="fa-shareBTN"><a href="#"><i class="fab fa-facebook-f"></i><span>(23) &nbsp; شارك</span></a></div>'
				contentData += '<div class="tw-shareBTN"><a href="#"><i class="fab fa-twitter"></i>(23) &nbsp; غرد</a></div></div>'
				contentData += '<div class="clear"></div>'
				contentData += '<div class="contentMedia">'
				contentData += '<p class="introContent">'
				contentData += data.posts[count++].content;
				contentData += '<p>'
				contentData += '</div>'
				contentData += '<div class="socialShare"><div class="fa-shareBTN"><a href="#"><i class="fab fa-facebook-f"></i><span>(23) &nbsp; شارك</span></a></div>'
				contentData += '<div class="tw-shareBTN"><a href="#"><i class="fab fa-twitter"></i>(23) &nbsp; غرد</a></div></div>'				
				contentData += '</li>'
				contentData += '</ul>'
				contentData += '</div>'
				contentData += '</div>'

			}
			else {
				return false;
			}
		});

		$('.swiper-wrapper').append(contentData);

	});

});

var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1,
	paginationClickable: true,
	loop: false,
	autoHeight: true,
	   paginationBulletRender: function (index, className) {
		var tabsName = ['Apps', 'Tricks', 'News', 'Games'];
		if ( index === (tabsName.length - 1) ) {
				  return	'<span class="' + className + '">'
						  + tabsName[index] + '</span>'
						  + '<div class="active-mark "></div>';
		}
		return '<span class="' + className + '">' + tabsName[index] + '</span>';
		}            
});   