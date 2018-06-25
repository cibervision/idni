
function hoverContent(){
	$('.block-hover').hover(function(){
		//$(this).parent('.parent-hover').find('.content-hover').addClass('active')
	},function(){
		//$(this).parent('.parent-hover').find('.content-hover').removeClass('active')
	})
}
AOS.init();
$(function () {
  /* Call dropdown menu */
  $('.dropdown-toggle').dropdown();
   /* */
   hoverContent();
   /* */
   $('#navigation-mobile').click(function(){
		if(!$('.nav-main').hasClass('active'))
			$('.nav-main').addClass('active');
		else
			$('.nav-main').removeClass('active');
   })

    // $.getJSON("https://api.coinmarketcap.com/v2/ticker/2337/", function(result){
	// 	console.log('result',result);
    // });
});

function scrollingHeader(action){
	if(action === true){
		$('.main-page').find('.height-60').addClass('height-50');
		$('.main-page').find('#logo').addClass('width170');
	}else{
		$('.main-page').find('.height-60').removeClass('height-50');
		$('.main-page').find('#logo').removeClass('width170');
	}
}

function stickyLogo() {
	// sticky logo
	var posFront = $('.sticky-front').position().top;
	var posBack = $('.wrap-logo-sticky').offset().top;
	var posTrue = posBack - posFront;
	$(window).scroll(function(event) {
		var scrollTop = $(this).scrollTop();
		if (scrollTop >= posTrue) {
			$('.sticky-front').addClass('front-hide');
			$('.sticky-back').addClass('back-show');
		}
		else {
			$('.sticky-front').removeClass('front-hide');
			$('.sticky-back').removeClass('back-show');
		}
	});
}

$(document).ready(function(){
	// $fn.scrollSpeed(step, speed, easing);
	// jQuery.scrollSpeed(200, 1000);

	// Sticky logo
	if ($('.wrap-logo-sticky').length) {
		stickyLogo();
	}
});

$(window).resize(function() {
    if ($('.list-feature .item-equal-height').length > 0) {
        $('.list-feature .item-equal-height').matchHeight();
    }

    // Member
    if ($('.member-list .member-item').length > 0) {
        $('.member-list .member-item').matchHeight();
    }

    // Sticky logo
	if ($('.wrap-logo-sticky').length) {
		stickyLogo();
	}
});

$(document).on("DOMContentLoaded", function(event) {
    if ($('.list-feature .item-equal-height').length > 0) {
        $('.list-feature .item-equal-height').matchHeight();
    }
    
    // Member
    if ($('.member-list .member-item').length > 0) {
        $('.member-list .member-item').matchHeight();
    }
});


function castParallax() {
  var opThresh = 350;
  var opFactor = 750;

  window.addEventListener("scroll", function(event) {
    var top = this.pageYOffset;
	if(top > 300){
		scrollingHeader(true);
	}else{
		scrollingHeader(false);
	}
    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      direct = layer.getAttribute('data-direct');
      var yPos = -(top * speed / 100);
      // layer.setAttribute(
      //   "style",
      //   "transform: translate3d(0px, " + yPos + "px, 0px)"
      // );
		if(direct === 'right'){
			layer.setAttribute('style', 'transform: translate3d(' + -yPos + 'px, 0px , 0px)');
		}
		else {
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		}
    }
  });
}

function dispelParallax() {
  $("#nonparallax").css("display", "block");
  $("#parallax").css("display", "none");
}

function castSmoothScroll() {
  $.srSmoothscroll({
    step: 80,
    speed: 300,
    ease: "linear"
  });
}

function startSite() {
  var platform = navigator.platform.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();

  if (platform.indexOf("ipad") != -1 || platform.indexOf("iphone") != -1) {
    dispelParallax();
  } else if (
    platform.indexOf("win32") != -1 ||
    platform.indexOf("linux") != -1
  ) {
    castParallax();
    // if ($.browser.webkit) {
    //   castSmoothScroll();
    // }
  } else {
    castParallax();
  }
}

document.body.onload = startSite();
