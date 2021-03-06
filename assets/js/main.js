
function hoverContent(){
	$('.block-hover').hover(function(){
		$(this).parent('.parent-hover').find('.content-hover').addClass('active')
	},function(){
		$(this).parent('.parent-hover').find('.content-hover').removeClass('active')
	})
}

$(function () {
  /* Call dropdown menu */
  $('.dropdown-toggle').dropdown();
   /* */
   hoverContent()
});

function castParallax() {
	window.addEventListener("scroll", function(event){
		var top = this.pageYOffset;
		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos, direct;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			direct = layer.getAttribute('data-direct');
			var yPos = -(top * speed / 100);
			if(direct === 'right'){
				return layer.setAttribute('style', 'transform: translate3d(' + -yPos + 'px, 0px , 0px)');
			}
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});


}

function dispelParallax() {
	$("#nonparallax").css('display','block');
	$("#parallax").css('display','none');
}

function startSite() {

	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();

	if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ) 
	{
		dispelParallax();
	}
	
	else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
	{
		castParallax();					
		// if ($.browser.webkit)
		// {
		// 	//castSmoothScroll();
		// }
	}
	
	else
	{
		castParallax();
	}

}

document.body.onload = startSite();