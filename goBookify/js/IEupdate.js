function updateBrowser(){
	if (navigator.userAgent.match(/Trident\/7\./)) {
document.getElementById('body').innerHTML = '<div id="ieWrapper">'+
		'<div class="ieHolder">'+
			'<div class="ieLogo"></div>'+        
			'<a href="https://www.microsoft.com/en-us/edge" class="btnIeUpdate">Browser update</a>'+ 
			'<p class="ieContent">'+ 
				'<strong>Update your browser</strong>'+ 
				'This browser cant preview this website<br /> Please update to higher version.'+   
			'</p>'+ 
			'<br clear="all" />'+ 
		'</div>'+     
	'</div>';
}
}

setTimeout(function(){updateBrowser();},500);

window.onload = updateBrowser;