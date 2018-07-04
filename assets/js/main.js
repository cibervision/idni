function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

function hoverContent(){
	$('.block-hover').hover(function(){
		//$(this).parent('.parent-hover').find('.content-hover').addClass('active')
	},function(){
		//$(this).parent('.parent-hover').find('.content-hover').removeClass('active')
	})
}
//AOS.init();
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
  var isIe = detectIE();
  if( detectIE()){
     $('body').addClass('ie ie-'+isIe);
  }
   $('#menu-default-lang').click(function() {
      var langList = $('#lang-list');
      if(langList.hasClass('active')){
         $('#lang-list').removeClass('active')
      }else{
         $('#lang-list').addClass('active')
      }
   });
	// $fn.scrollSpeed(step, speed, easing);
	// jQuery.scrollSpeed(200, 1000);

	// Sticky logo
	if ($('.wrap-logo-sticky').length) {
		stickyLogo();
	}

  // Show more feature
  if ($('.txt-des').length) {
    var limit = 88;
    if($('#agoras').length){
      limit = 130;
    }
    $('.txt-des').each(function(index, el) {
      var getHeight = $(this).height();
      if ($(this).find('.des-inner').height() > limit) {
        $(this).css('height', limit);
        $(this).siblings('.more-less').removeClass('hidden');
      }
    });
    $('.more-less span').click(function(event) {
        if ($(this).parent().hasClass('show-less')) {
          $(this).parent().siblings('.txt-des').css('height', limit);
          $(this).text('+');  
          $(this).parent().removeClass('show-less');
          $('.list-feature .item-equal-height').matchHeight();
        }
        else {
          $(this).parent().siblings('.txt-des').css('height', 'auto');
          $(this).text('-'); 
          $(this).parent().addClass('show-less');
          $('.list-feature .item-equal-height').matchHeight();
        }
      });
  }

  if ($('.list-feature .item-equal-height').length > 0) {
      $('.list-feature .item-equal-height').matchHeight();
      $('.list-feature .h5-title').matchHeight();
  }
});

$(window).resize(function() {
    if ($('.list-feature .item-equal-height').length > 0) {
        $('.list-feature .item-equal-height').matchHeight();
        $('.list-feature .h5-title').matchHeight();
    }

    // Member
    if ($('.member-list .member-item').length > 0) {
        $('.member-list .member-item').matchHeight();
    }

      // Sticky logo
    if ($('.wrap-logo-sticky').length) {
      stickyLogo();
    }

    getHeightScreen();
});

$(document).on("DOMContentLoaded", function(event) {

    if ($('.list-feature .item-equal-height').length > 0) {
        $('.list-feature .item-equal-height').matchHeight();
        $('.list-feature .h5-title').matchHeight();
    }
    
    // Member
    if ($('.member-list .member-item').length > 0) {
        $('.member-list .member-item').matchHeight();
    }

    getHeightScreen();
    //alert($(window).height() -100);


});

function getHeightScreen(){
  if($(window).width() < 768){
    $('.height-bg-mobile').css({height:$(window).height()+ 10});
  }
}


function castParallax() {
  var opThresh = 350;
  var opFactor = 750;
   var isIe = detectIE();
   if(isIe === false){
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
        if(direct === 'right'){
          layer.setAttribute('style', 'transform: translate3d(' + -yPos + 'px, 0px , 0px)');
        }
        else {
          layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }
        }
      });
    }
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
