$(function () {
	"use strict";
	$("#header-section").load("header.html");
});

$(function () {
	"use strict";
	$("#header-sectionContent").load("headerContent.html");
});

        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
			slidesPerView: 1,
			paginationClickable: true,
			loop: false,
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

$(document).ready(function(){

	var  menuDataURLS = "http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7";
	var contentDataURLS = "http://femme.nextmedia.ma/api/get_recent_posts/";

	$.getJSON(menuDataURLS).then(function(data) {
		var menuData = '';
		var count = 0;
		$.each(data, function(key, value){
			if( count < 4) {
				menuData += '<a href="#"><span class="nav-item">'
				menuData += data.menu.output[count++].label;
				menuData += '</span></a>'
			}
			else {
				return false;
			}
		});

		$('#menuData').append(menuData);

	})
	.fail(function() {
		// ...didn't work, handle it
	});

	$.getJSON(contentDataURLS).then(function(data) {
		var contentData = '',
			count = 0;
		$.each(data, function(key, value){
			if( count < 9) {
				contentData += '<li class="card">'
				contentData += '<a class="card-image" href="#">'
				contentData += '<img src="'+ data.posts[++count].attachments[0].url +'" alt="" />'
				contentData += '</a>'
				contentData += '<a class="card-description" href="#" title="">'
				contentData += '<h2>'
				contentData += data.posts[count++].title;
				contentData += '</h2>'
				contentData += '<p>'
				contentData += data.posts[count++].date;
				contentData += '</p>'
				contentData += '</a>'
				contentData += '</li>'
			}
			else {
				return false;
			}
		})
		.fail(function() {
			// ...didn't work, handle it
		});

		$('#contentData').append(contentData);

	});

	$.getJSON(menuDataURLS).then(function(data) {
		var menuData = '';
		var count = 0;
		$.each(data, function(key, value){
			if( count < 4) {
				
			}
			else {
				return false;
			}
		});

		$('#menuData').append(menuData);

	})
	.fail(function() {
		// ...didn't work, handle it
	});

});