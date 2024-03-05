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


// Simple Pricing tab JS
function openTab(evt, tabNm) {
  var i, tabCnt, tabHd;
  tabCnt = document.getElementsByClassName("tabCnt");
  for (i = 0; i < tabCnt.length; i++) {
    tabCnt[i].style.display = "none";
  }
  tabHd = document.getElementsByClassName("tabHd");
  for (i = 0; i < tabHd.length; i++) {
    tabHd[i].className = tabHd[i].className.replace(" active", "");
  }
  document.getElementById(tabNm).style.display = "block";
  evt.currentTarget.className += " active";
}

// Trending Slider JS
$(document).ready(function() {
  $(".trnSldr").owlCarousel({
    items : 1,
    margin : 31,
    loop : true,
    nav : true,
    slideBy : 1,
    responsive : {
      0 : {
          items : 1,
          slideBy : 1,
      },
      480 : {
        items : 2,
        slideBy : 2,
      },
      768 : {
        items : 3,
        slideBy : 3,
      },
      991 : {
        items : 3,
        slideBy : 3,
      },
      1200 : {
        items : 4,
        slideBy : 4,
      }
    }
  });

  // Wishlist Click JS
  $('body').on('click', '.wshLst', function() {
    $(this).toggleClass('active');
  });

  $('body').on('click', '.pflNavItm', function() {
    $('.pflNavItm').removeClass('active');
    $(this).addClass('active');
  });

  $('body').on('click', '.acdBtnWrap', function() {
    $(this).toggleClass('active');
  });
  
  $('body').on('click', '.dpDwnWrap.pflDpdwnWrap ', function() {
    $(this).toggleClass('active');
  });
});

