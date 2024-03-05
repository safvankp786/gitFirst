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

gsap.to('.main-title span', {duration:1, opacity:1,
	scrollTrigger: {
		trigger: '.trigger-main-title',
		start: '10 bottom',
		scrub: 2,
		end: 'bottom bottom',
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-management-wrap', {duration: 1, rotationY: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.text-management span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	},
	scrollTrigger: {
		trigger: '.trigger-text-management',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.text-management', {duration: 1, rotationX: 0, opacity: 0, ease: "power3.out", 
	stagger: {
		each: 0.1
	},
	scrollTrigger: {
		trigger: '.trigger-text-management-fade',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-title span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-title',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-title', {duration: 1, opacity: 0, ease: "power2.out", 
	stagger: {
		each: 0.1
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-label',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-wrapper aside', {duration: 1, width: 'auto', opacity: 1, ease: "expo.out", 
	stagger: {
		each: 0.3
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-label',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.title-status span', {duration: 1, scale: 1, opacity: 1, ease: "back.inOut", 
	stagger: {
		each: 0.1,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-title-status',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-wrapper', {duration: 1, scale: 0, opacity: 0, ease: "expo.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-title-status',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.title-status', {duration: 1.5, opacity: 0.6, filter: 'blur(10px)', webkitFilter: 'blur(10px)',  
	scrollTrigger: {
		trigger: '.trigger-title-status-blur',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.main-title', {duration: 1, opacity: 0,  
	scrollTrigger: {
		trigger: '.trigger-main-title-fade',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.management-label-wrapper', {duration: 1, scale: 0.8,  
	scrollTrigger: {
		trigger: '.trigger-management-label-wrapper',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.business-title span', {duration: 1, opacity: 1,  
	scrollTrigger: {
		trigger: '.trigger-management-label-wrapper',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-operations-wrap', {duration: 1, rotationY: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.2,
		from: 'random'
	},
	scrollTrigger: {
		trigger: '.trigger-img-operations-wrap',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.text-operations span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.1,
		from: 'random'
	},
	scrollTrigger: {
		trigger: '.trigger-text-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.text-operations', {duration: 1, rotationX: 0, opacity: 0, ease: "power3.out", 
	stagger: {
		each: 0.1
	},
	scrollTrigger: {
		trigger: '.trigger-text-operations-fade',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-title-operations span', {duration: 1, rotationX: 0, opacity: 1, ease: "bounce.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-title-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-title-operations', {duration: 1, opacity: 0, ease: "power2.out", 
	stagger: {
		each: 0.3
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-label-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-operations aside', {duration: 1, width: 'auto', opacity: 1, ease: "expo.out", 
	stagger: {
		each: 0.3
	},
	scrollTrigger: {
		trigger: '.trigger-img-circle-label-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.title-status-operations span', {duration: 1, scale: 1, opacity: 1, ease: "back.inOut", 
	stagger: {
		each: 0.1,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-title-status-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});

gsap.to('.img-circle-operations', {duration: 1, scale: 0, opacity: 0, ease: "expo.out", 
	stagger: {
		each: 0.1,
		from: 'top'
	},
	scrollTrigger: {
		trigger: '.trigger-title-status-operations',
		start: '10 bottom',
		end: 'bottom bottom',
		scrub: 2,
		toggleActions: 'play none none reverse'
	}
});


