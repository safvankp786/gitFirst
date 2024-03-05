window.addEventListener("load", loadComplete );

function loadComplete(){
	//window.scrollTo(0,0);

	setTimeout(function(){
		gsap.to('.loader',{duration:1, opacity: 0, 
			onComplete: function(e) {
	    		var element = document.getElementById("loader");
	  			element.classList.add("loader-stop");
	  		}}
	  	);

	  	gsap.to('.scroll-down',{duration:1, opacity: 1, y: 0},'1.5');
		gsap.to('.img-circle-wrapper strong', {duration: 1.5,  opacity: 1, ease: "power4.inOut", 
			stagger: {
				each: 0.5,
				yoyo: true,
				repeat: -1
			}
		});

		gsap.to('.img-circle-operations strong', {duration: 1.5,  opacity: 1, ease: "power4.inOut", 
			stagger: {
				each: 0.5,
				yoyo: true,
				repeat: -1
			}
		});

  	},1000);
	
	iniStart();
}




gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({paused: true, onUpdate: getProgress});


tl.to('.main-title span', {duration:1, opacity:1});

tl.to('.img-management-wrap', {duration: 1, rotationY: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	}
});

tl.to('.text-management span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	}
});

tl.to('.text-management', {duration: 1, rotationX: 0, opacity: 0, ease: "power3.out", 
	stagger: {
		each: 0.1
	}
});

tl.to('.img-circle-title span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'top'
	}
});

tl.to('.img-circle-title', {duration: 1, opacity: 0, ease: "power2.out", 
	stagger: {
		each: 0.1
	}
});

tl.to('.img-circle-wrapper aside', {duration: 1, width: 'auto', opacity: 1, ease: "expo.out", 
	stagger: {
		each: 0.3
	}
});

tl.to('.title-status span', {duration: 1, scale: 1, opacity: 1, ease: "back.inOut", 
	stagger: {
		each: 0.1,
		from: 'top'
	}
},"status_1");

tl.to('.img-circle-wrapper', {duration: 1, scale: 0, opacity: 0, ease: "expo.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	}
},"status_1");

tl.to('.title-status', {duration: 1.5, opacity: 0.6, filter: 'blur(10px)', webkitFilter: 'blur(10px)'});

tl.to('.main-title', {duration: 1, opacity: 0});

tl.to('.management-label-wrapper', {duration: 1, scale: 0.8});

tl.to('.business-title span', {duration: 1, opacity: 1});

tl.to('.img-operations-wrap', {duration: 1, rotationY: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	}
});

tl.to('.text-operations span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.1,
		from: 'random'
	}
});

tl.to('.text-operations', {duration: 1, rotationX: 0, opacity: 0, ease: "power3.out", 
	stagger: {
		each: 0.1
	}
});

tl.to('.img-circle-title-operations span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	}
});

tl.to('.img-circle-title-operations', {duration: 1, opacity: 0, ease: "power2.out", 
	stagger: {
		each: 0.3
	}
});

tl.to('.img-circle-operations aside', {duration: 1, width: 'auto', opacity: 1, ease: "expo.out", 
	stagger: {
		each: 0.3
	}
});

tl.to('.title-status-operations span', {duration: 1, scale: 1, opacity: 1, ease: "back.inOut", 
	stagger: {
		each: 0.1,
		from: 'top'
	}
},"status_2");

tl.to('.img-circle-operations', {duration: 1, scale: 0, opacity: 0, ease: "expo.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	}
},"status_2");


var VideoProgress = 0, scrollProgress = 0,
myArray = [0.03, 0.08, 0.15, 0.20, 0.26,0.29, 0.37, 0.42, 0.45, 0.51, 0.53,0.62,0.65,0.75,0.94,1.00];
function iniStart(){
	var heightNew = tl.totalDuration()*60;
	document.getElementById("trigger-animation").style.height = heightNew+'px';
}
function getProgress(){
	var finalPros = 0, count=0;
	for (var i=0 ; i<myArray.length; i++) {
		if(myArray[i] >= scrollProgress && count==0){
			finalPros = myArray[i];
			count=1;
		}
	}
	VideoProgress = tl.progress().toFixed(2);
	console.log("top" + finalPros);
	//console.log(VideoProgress + "="+scrollProgress);
	if(finalPros > VideoProgress ){
		tl.play();
	}else if(finalPros == VideoProgress){
		tl.paused(true);
	} if(scrollProgress == 0 && VideoProgress==myArray[0]){
		
		//gsap.to('.main-title span', {duration:0.5, opacity:0});
		tl.seek(0);
	}
	
	//console.log(VideoProgress);
}

gsap.to('.trigger-main-title', {
	scrollTrigger: {
		trigger: '.trigger-main-title',
		start: '10 bottom',
		end: 'bottom bottom',
		onUpdate: getScoroll
	}
});



function getScoroll(e){
	
	scrollProgress = e.progress.toFixed(2);
	var finalPros = 0, count=0;
	for (var i=0 ; i<myArray.length; i++) {
		if(myArray[i] >= scrollProgress && count==0){
			finalPros = myArray[i];
			count=1;
		}
	}
	console.log("bottom" + finalPros);
	if(finalPros > VideoProgress ){
		tl.play();
	}else if(finalPros == VideoProgress){
		tl.paused(true);
	}else if(finalPros < VideoProgress) {
		tl.reverse();
	}
	if(scrollProgress == 0 && VideoProgress==myArray[0]){
		tl.seek(0);
	}

}



