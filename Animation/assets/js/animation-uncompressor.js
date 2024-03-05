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

window.addEventListener("load", loadComplete );

function loadComplete(){
	window.scrollTo(0,0);

	setTimeout(function(){
		gsap.to('.loader',{duration:1, opacity: 0, ease: "power4.inOut",
			onComplete: function(e) {
	    		var element = document.getElementById("loader");
	  			element.classList.add("loader-stop");

	  			gsap.to('.scroll-down',{duration:1, opacity: 1, y: 0, delay:0.3, onComplete: function(e) {
			  		document.getElementById("trigger-practice").style.display = 'block';
			  		startAnimation();
			  	}},'1.5');
	  		}}
	  	);

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

  	},500);
	
}

gsap.registerPlugin(ScrollTrigger);
var tl, tl_second;
function startAnimation(){
	tl = gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: '.trigger-main-title',
			start: '10 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none none',
			onComplete: function() {
			    ScrollTrigger.getAll().forEach((trigger) => { 
			      if (elem === trigger.trigger) trigger.kill();
			    });
			}
		}
	});

	tl.to('.scroll-down',{duration:1, opacity: 0, ease: "expo.out"});

	tl.to('.main-title span', {duration:1, opacity:1});

	tl.to('.img-management-wrap', {duration: 1, scale: 1, opacity: 1, ease: "back.out", 
		stagger: {
			each: 0.2,
			from: 'random'
		}
	},'managementText');

	tl.to('.text-management span', {duration: 1, y: 0, opacity: 1, ease: "expo.out", 
		stagger: {
			each: 0.2,
			from: 'random'
		}
	},'managementText');

	tl.to('.text-management', {duration: 1, y: 0, opacity: 0, ease: "expo.out",
		stagger: {
			each: 0.1
		}
	},'text-management');

	tl.to('.img-circle-title span', {duration: 1, y: 0, opacity: 1, ease: "expo.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'text-management+=0.5');

	tl.to('.img-Attorney .img-circle-wrapper aside, .img-LegalClerk .img-circle-wrapper aside, .img-Associate .img-circle-wrapper aside', {duration: 1, width: 'auto', opacity: 1, ease: "power4.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title');

	tl.fromTo('.img-Attorney .img-circle-wrapper, .img-LegalClerk .img-circle-wrapper, .img-Associate .img-circle-wrapper', 
		{y: -5 },{y: 5, duration: 2, repeat: -1, yoyo: true, ease: "none", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title+=0.5');

	tl.to('.img-Attorney .img-circle-title, .img-LegalClerk .img-circle-title, .img-Associate .img-circle-title', {duration: 1, opacity: 0, ease: "expo.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title');

	tl.to('.img-Lawyer .img-circle-wrapper aside, .img-Paralegal .img-circle-wrapper aside, .img-LegalSupport .img-circle-wrapper aside, .img-LegalSecretary .img-circle-wrapper aside', {
		duration: 1, width: 'auto', opacity: 1, ease: "power4.out", delay: 1,
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title_1');

	tl.fromTo('.img-Lawyer .img-circle-wrapper, .img-Paralegal .img-circle-wrapper, .img-LegalSupport .img-circle-wrapper, .img-LegalSecretary .img-circle-wrapper', 
		{y: 5 },{y: -5, duration: 1.7, repeat: -1, yoyo: true, ease: "none", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title_1+=1');

	tl.to('.img-Lawyer .img-circle-title, .img-Paralegal .img-circle-title, .img-LegalSupport .img-circle-title, .img-LegalSecretary .img-circle-title', {duration: 1, opacity: 0, ease: "expo.out", delay: 1,
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title_1');

	tl.to('.img-Lawyer .img-circle-wrapper, .img-Paralegal .img-circle-wrapper, .img-LegalSecretary .img-circle-wrapper', {
		duration: 1, backgroundColor: '#E83521',  ease: "expo.out",filter: 'blur(10px)', webkitFilter: 'blur(10px)', delay: 1,
	},"status_1");

	tl.to('.img-Lawyer .img-circle-wrapper img, .img-Paralegal .img-circle-wrapper img, .img-LegalSecretary .img-circle-wrapper img, .img-Lawyer .img-circle-wrapper p, .img-Paralegal .img-circle-wrapper p, .img-LegalSecretary .img-circle-wrapper p, .img-Lawyer .img-circle-wrapper span, .img-Paralegal .img-circle-wrapper span, .img-LegalSecretary .img-circle-wrapper span', {
		duration: 1, width: 0, scale:0, opacity:0,  ease: "expo.out", delay: 1,
	},"status_1");

	tl.to('.img-Lawyer .img-circle-wrapper em, .img-Paralegal .img-circle-wrapper em, .img-LegalSecretary .img-circle-wrapper em', {
		duration: 1, width: "auto", opacity:1,  ease: "expo.out", delay: 1,
	},"status_1");

	tl.to('.img-circle-wrapper', {
		duration: 1, backgroundColor: '#E83521', filter: 'blur(10px)', webkitFilter: 'blur(10px)', ease: "expo.out"
	},"status_1_1");

	tl.to('.img-LegalClerk .img-circle-wrapper, .img-Associate .img-circle-wrapper', {
		duration: 1, backgroundColor: '#DD8340',filter: 'blur(10px)', webkitFilter: 'blur(10px)',  ease: "expo.out"
	},"status_1_1");	

	tl.to('.img-circle-wrapper img, .img-circle-wrapper p, .img-circle-wrapper span', {
		duration: 1, width: 0, scale:0, opacity:0,  ease: "expo.out"
	},"status_1_1");

	tl.to('.img-circle-wrapper em', {
		duration: 1, width: "auto", opacity:1,  ease: "expo.out"
	},"status_1_1");

	

	tl.to('.img-circle-wrapper', {duration: 0.5, opacity: 0.6}, 'status_1_1');

	tl.to('.main-title', {duration: 1, opacity: 0}, 'status_1_1');

	tl.to('.management-label-wrapper', {duration: 1, scale: 0.8}, 'status_1_1');

	tl.to('.business-title span', {duration: 1, opacity: 1});

	tl.to('.img-operations-wrap', {duration: 1, scale: 1, opacity: 1, ease: "back.out", 
		stagger: {
			each: 0.2,
			from: 'random'
		}
	},'operations');

	tl.to('.text-operations span', {duration: 1, y: 0, opacity: 1, ease: "expo.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'operations');

	tl.to('.text-operations', {duration: 1, y: 0, opacity: 0, ease: "expo.out", delay: 1,
		stagger: {
			each: 0.1
		}
	},'text-operations');

	tl.to('.img-circle-title-operations span', {duration: 1, y: 0, opacity: 1, ease: "expo.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'text-operations+=1.2');

	tl.to('.img-MarketingManager .img-circle-operations aside, .img-Accountant .img-circle-operations aside, .img-FinanceManagerOpe .img-circle-operations aside, .img-AdminSupport .img-circle-operations aside, .img-Librarian .img-circle-operations aside, .img-OfficeCoordinator .img-circle-operations aside', {
		duration: 1, width: 'auto', opacity: 1, ease: "power4.out", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	}, 'title_2');

	tl.fromTo('.img-MarketingManager .img-circle-operations, .img-Accountant .img-circle-operations, .img-FinanceManagerOpe .img-circle-operations, .img-AdminSupport .img-circle-operations, .img-Librarian .img-circle-operations, .img-OfficeCoordinator .img-circle-operations', 
		{y: -5 },{y: 5, duration: 2, repeat: -1, yoyo: true, ease: "none", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title_2+=0.5');

	tl.to('.img-MarketingManager .img-circle-title-operations, .img-Accountant .img-circle-title-operations, .img-FinanceManagerOpe .img-circle-title-operations, .img-AdminSupport .img-circle-title-operations, .img-Librarian .img-circle-title-operations, .img-OfficeCoordinator .img-circle-title-operations', {duration: 1, opacity: 0, ease: "expo.out",
		stagger: {
			each: 0.1,
			from: 'random'
		}
	}, 'title_2');

	tl.to('.img-FinanceManager .img-circle-operations aside, .img-HR-Administrator .img-circle-operations aside, .img-ComplianceOfficer .img-circle-operations aside, .img-AccountsAssistant .img-circle-operations aside', {
		duration: 1, width: 'auto', opacity: 1, ease: "power4.out", delay: 1,
		stagger: {
			each: 0.1,
			from: 'random'
		}
	}, 'title_2_2');

	tl.fromTo('.img-FinanceManager .img-circle-operations, .img-HR-Administrator .img-circle-operations, .img-ComplianceOfficer .img-circle-operations, .img-AccountsAssistant .img-circle-operations', 
		{y: 5 },{y: -5, duration: 1.7, repeat: -1, yoyo: true, ease: "none", 
		stagger: {
			each: 0.1,
			from: 'random'
		}
	},'title_2_2+=0.5');

	tl.to('.img-FinanceManager .img-circle-title-operations, .img-HR-Administrator .img-circle-title-operations, .img-ComplianceOfficer .img-circle-title-operations, .img-AccountsAssistant .img-circle-title-operations', {duration: 1, opacity: 0, ease: "expo.out", delay: 1,
		stagger: {
			each: 0.1,
			from: 'random'
		}
	}, 'title_2_2');


	tl.to('.img-MarketingManager .img-circle-operations, .img-FinanceManagerOpe .img-circle-operations, .img-AdminSupport .img-circle-operations, .img-OfficeCoordinator .img-circle-operations', {
		duration: 1, backgroundColor: '#E83521',filter: 'blur(10px)', webkitFilter: 'blur(10px)', opacity: 0.6,  ease: "expo.out", delay: 1,
	},"status_2");

	tl.to('.img-HR-Administrator .img-circle-operations', {
		duration: 1, backgroundColor: '#F5C33A',filter: 'blur(10px)', webkitFilter: 'blur(10px)', opacity: 0.6,  ease: "expo.out", delay: 1,
	},"status_2");

	tl.to('.img-MarketingManager .img-circle-operations img, .img-FinanceManagerOpe .img-circle-operations img, .img-AdminSupport .img-circle-operations img, .img-OfficeCoordinator .img-circle-operations img, .img-MarketingManager .img-circle-operations p, .img-FinanceManagerOpe .img-circle-operations p, .img-AdminSupport .img-circle-operations p, .img-OfficeCoordinator .img-circle-operations p, .img-MarketingManager .img-circle-operations span, .img-FinanceManagerOpe .img-circle-operations span, .img-AdminSupport .img-circle-operations span, .img-OfficeCoordinator .img-circle-operations span, .img-HR-Administrator .img-circle-operations img, .img-HR-Administrator .img-circle-operations p, .img-HR-Administrator .img-circle-operations span', {
		duration: 1, width: 0, scale:0, opacity:0,  ease: "expo.out", delay: 1
	},"status_2");

	tl.to('.img-MarketingManager .img-circle-operations .text-two, .img-FinanceManagerOpe .img-circle-operations .text-two, .img-AdminSupport .img-circle-operations .text-two, .img-OfficeCoordinator .img-circle-operations .text-two, .img-HR-Administrator .img-circle-operations .text-two', {
		duration: 1, width: "auto", opacity:1,  ease: "expo.out", delay: 1
	},"status_2");

	tl.to('.img-FinanceManager .img-circle-operations, .img-Accountant .img-circle-operations, .img-Librarian .img-circle-operations', {
		duration: 1, backgroundColor: '#E83521',  ease: "expo.out"
	},"status_2_2");

	tl.to('.img-ComplianceOfficer .img-circle-operations, .img-AccountsAssistant .img-circle-operations', {
		duration: 1, backgroundColor: '#DD8340',  ease: "expo.out"
	},"status_2_2");

	tl.to('.img-FinanceManager .img-circle-operations img, .img-Accountant .img-circle-operations img, .img-Librarian .img-circle-operations img, .img-FinanceManager .img-circle-operations span, .img-Accountant .img-circle-operations span, .img-Librarian .img-circle-operations span, .img-FinanceManager .img-circle-operations p, .img-Accountant .img-circle-operations p, .img-Librarian .img-circle-operations p, .img-ComplianceOfficer .img-circle-operations img, .img-AccountsAssistant .img-circle-operations img, .img-ComplianceOfficer .img-circle-operations p, .img-AccountsAssistant .img-circle-operations p, .img-ComplianceOfficer .img-circle-operations span, .img-AccountsAssistant .img-circle-operations span', {
		duration: 1, width: 0, scale:0, opacity:0,  ease: "expo.out"
	},"status_2_2");

	tl.to('.img-FinanceManager .img-circle-operations .text-two, .img-Accountant .img-circle-operations .text-two, .img-Librarian .img-circle-operations .text-two, .img-ComplianceOfficer .img-circle-operations .text-two, .img-AccountsAssistant .img-circle-operations .text-two', {
		duration: 1, width: "auto", opacity:1,  ease: "expo.out"
	},"status_2_2");

	if(screen.width > 768){
		tl.to('.img-FinanceManager', {duration:1, x:'-5%', y:'68%'},'busi_move');
		tl.to('.img-MarketingManager', {duration:1, x:'-25%', y:'-16%'},'busi_move');
		tl.to('.img-Accountant', {duration:1, x:'-10%', y:'72%'},'busi_move');
		tl.to('.img-HR-Administrator', {duration:1, x:'0%', y:'145%'},'busi_move');
		tl.to('.img-Librarian', {duration:1, x:'-9%', y:'0%'},'busi_move');
		tl.to('.img-ComplianceOfficer', {duration:1, x:'59%', y:'176%'},'busi_move');
		tl.to('.img-OfficeCoordinator', {duration:1, x:'45%', y:'122%'},'busi_move');
		tl.to('.img-AccountsAssistant', {duration:1, x:'20%', y:'121%'},'busi_move');
		tl.to('.img-FinanceManagerOpe', {duration:1, x:'20%', y:'-65%'},'busi_move');
		tl.to('.img-AdminSupport', {duration:1, x:'28%', y:'-37%'},'busi_move');
	}else {
		tl.to('.img-FinanceManager', {duration:1, x:'-26%', y:'258%'},'busi_move');
		tl.to('.img-MarketingManager', {duration:1, x:'-33%', y:'-69%'},'busi_move');
		tl.to('.img-Accountant', {duration:1, x:'-48%', y:'176%'},'busi_move');
		tl.to('.img-HR-Administrator', {duration:1, x:'16%', y:'112%'},'busi_move');
		tl.to('.img-Librarian', {duration:1, x:'-28%', y:'-107%'},'busi_move');
		tl.to('.img-ComplianceOfficer', {duration:1, x:'34%', y:'130%'},'busi_move');
		tl.to('.img-OfficeCoordinator', {duration:1, x:'-32%', y:'-54%'},'busi_move');
		tl.to('.img-AccountsAssistant', {duration:1, x:'17%', y:'-92%'},'busi_move');
		tl.to('.img-FinanceManagerOpe', {duration:1, x:'-38%', y:'-61%'},'busi_move');
		tl.to('.img-AdminSupport', {duration:1, x:'47%', y:'-31%'},'busi_move');
	}

	tl.to('.management-label-wrapper', {duration: 1, scale: 1},'busi_move');
	tl.to('.business-title', {duration: 1, opacity: 0},'busi_move');
	tl.to('.img-management-wrap', {duration: 1, scale: 0.8},'busi_move');
	tl.to('.logo-loop', {duration: 0.5, rotation: 360, repeat: 3, ease: 'linear'},'-=0.5');
	tl.to('.logo-wrap', {duration: 1, opacity: 1, ease: 'expo.out'});

	tl.to('.img-circle-wrapper', {duration: 0.5, backgroundColor: '#348679', ease: 'expo.out'},'color-green');

	tl.to('.img-circle-operations', {duration: 0.5, backgroundColor: '#348679', ease: 'expo.out'},'color-green');

	tl.to('.text-two-green', {duration: 0.5, width: 'auto', opacity:1, ease: 'expo.out'},'color-green');

	tl.to('.text-two', {duration: 0.5, width: 0, scale: 0, padding: 0, ease: 'expo.out'},'color-green');

	tl.to('.letter-l, .letter-e, .letter-g', {duration: 2, x: 0, opacity: 1, y:0, rotation:0, ease: 'expo.out',
		stagger: {
			each: 0.1,
			from: 3
		}
	},'letterNew');

	tl.to('.letter-l-2', {duration: 2, x: 20, opacity: 1, y:0, delay:0.2, ease: 'expo.out'},'letterNew');

	tl.to('.logo-act', {duration: 1, opacity: 1,delay:0.3, ease: 'expo.out'},'letterNew');

	tl.to('.logo-loop', {duration: 1, opacity:0, ease: 'expo.out'},'letterNew+=0.5');

	tl.to('.animation-letter-s', {duration: 2, x: 0, opacity: 1, y:0, delay:0.3, ease: 'expo.out'},'letterNew');

	if(screen.width > 768){
		tl.to('.logo-wrap', {duration: 1, marginLeft: -53, ease: 'power4.out'},'logoLeft');
	}else{
		tl.to('.logo-wrap', {duration: 1, marginLeft: -73, ease: 'power4.out'},'logoLeft');
	}

	tl.to('.caption', {duration: 1, marginLeft: 0, opacity: 1, marginLeft: 0, ease: 'power4.out'},'logoLeft');

	tl.to('.img-operations-wrap', {duration: 1, top: '-50vh', opacity: 0, ease: "back.inOut(1.7)",
		stagger: {
			each: 0.1
		}
	},'tick_back');

	tl.to('.img-management-wrap', {duration: 1, top: '-50vh', opacity: 0, ease: "back.inOut(1.7)",
		stagger: {
			each: 0.1
		}
	},'tick_back');

	tl.to('.scroll-down',{duration:1, opacity: 1,top:"90%", ease: "expo.out", onComplete: function(){
		animForm();
	}});

	
}

function animForm(){
	tl.paused(true);
	document.getElementById("trigger-form").style.display = 'block';
	var tl_three = gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: '.trigger-form',
			start: '10 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none none',
				onComplete: function() {
			    ScrollTrigger.getAll().forEach((trigger) => { 
			      if (elem === trigger.trigger) trigger.kill();
			    });
  			}
		}
	});

	tl_three.to('.scroll-down',{duration:1, opacity: 0,top:"90%", ease: "expo.out", onComplete: function(){

		document.getElementById("trigger-practice").style.display = 'none';
		document.getElementById("trigger-practice").style.height = '0px';
		document.getElementById("trigger-form").style.display = 'none';
		document.getElementById("trigger-form").style.height = '0px';

		setTimeout(function(){
			window.scrollTo(0,0);
		},500);
	}});

	if(screen.width > 768){
		tl_three.to('.logo-wrap', {duration: 1, top: 0, marginTop: 33, scale: 0.7, ease: 'expo.out', onComplete: function(){
			document.getElementById('logo-wrap').classList.add('remPos');
			document.getElementById('getAcess').classList.add('getAcess');
			document.getElementById('anim-social-media').classList.add('mediaDisplay');
			document.getElementById('anim-form').classList.add('remHeight');
		}},'mainLogo');

		tl_three.to('h2.caption', {duration: 1, top: 216, ease: 'expo.out', onComplete: function(){
			document.getElementById('caption').classList.add('remPos');
		}},'mainLogo');
	}else{
		tl_three.to('.logo-wrap', {duration: 1, top: 0, marginTop: 1, scale: 0.5, ease: 'expo.out', onComplete: function(){
			document.getElementById('logo-wrap').classList.add('remPos');
			document.getElementById('getAcess').classList.add('getAcess');
			document.getElementById('anim-social-media').classList.add('mediaDisplay');
		}},'mainLogo');

		tl_three.to('h2.caption', {duration: 1, top: 154, ease: 'expo.out', onComplete: function(){
			document.getElementById('caption').classList.add('remPos');
		}},'mainLogo');
	}

	
	tl_three.to('.caption_one', {duration: 0.5, scale: '1 0', opacity:0, height: '0px', ease: 'expo.out'},'mainLogo');
	tl_three.to('.caption_two', {duration: 0.5, scale: 1, opacity:1, height: 'auto', ease: 'expo.out'},'mainLogo');

	tl_three.to('.anim-subtitle, .anim-follow, .amin-btn-get-access, .anim-social-media h4, .anim-social-media a, .anim-footer-content', {duration: 1, y: 0, opacity: 1, ease: 'expo.out', 
		stagger: {
			each: 0.2
		}
	},'-=0.5');
}


//Drowdown
const optionMenu = document.querySelector(".anim-select-wrap"),
	optionClick = optionMenu.querySelector(".anim-label-wrap"),
  selectInput = optionMenu.querySelector(".anim-select-input"),
  options = optionMenu.querySelectorAll(".amin-select-dropdown li");

optionClick.addEventListener("click", () =>{
  optionMenu.classList.toggle("active");
  document.querySelector(".anim-select-wrap-country").classList.remove("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    selectInput.value = selectedOption;

    optionMenu.classList.remove("active");
  });
});

const optionMenuCountry = document.querySelector(".anim-select-wrap-country"),
	optionClickCountry = optionMenuCountry.querySelector(".anim-label-wrap-country"),
  selectInputCountry = optionMenuCountry.querySelector(".anim-select-input-country"),
  optionsCountry = optionMenuCountry.querySelectorAll(".amin-select-dropdown-country li");

optionClickCountry.addEventListener("click", () =>{
  optionMenuCountry.classList.toggle("active");
  
});

optionsCountry.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOptionCountry = option.innerText;
    selectInputCountry.value = selectedOptionCountry;

    optionMenuCountry.classList.remove("active");
  });
});


//Early access click
const accessHandle = document.querySelector(".amin-btn-get-access"),
formWrap = document.querySelector('.anim-from-wrapper');
accessHandle.addEventListener('click', () => {
	accessHandle.classList.add('hideButton');
	formWrap.classList.add('showAnimForm');
});

$(document).ready(function () {
    $(".anim-submit").attr("disabled", true);
    $(".anim-submit").removeClass("active");
    $(".anim-submit").click(function (event) {
        event.preventDefault();

        var formIsValid = true;
        var email = $("#business_email").val();
        if (email === "" || !isValidEmail(email)) {
            //$("#business_email").parent().addClass("anim-error");
            //$(this).closest("div.anim-input-wrapper").addClass("anim-error");
            //$(".business_email").closest("div.business_emaildiv").addClass("anim-error");
            $('.business_emaildiv').addClass("anim-error");
            formIsValid = false;
        } else {
            $("#business_email").parent().removeClass("anim-error");
        }
        $("input[type='text']").each(function () {
            if ($(this).val() === "") {
               $(this).parent().addClass("anim-error");
               $(this).parent('anim-select-wrap').addClass("anim-error");
                formIsValid = false;
            } else {
                 $(this).parent().removeClass("anim-error");
            }
        });
        $(".anim-select-input").each(function () {
            if ($(this).val() === "") {
                $(this).parent().addClass("anim-error");
                $(".anim-select-wrap").addClass("anim-error");
                formIsValid = false;
            } else {
                $(this).parent().parent().removeClass("anim-error");
                $(".anim-select-wrap").removeClass("anim-error"); 
            }
        });

       

        if (formIsValid) {
            //$(".anim-submit").attr("disabled", false);
            //$(".anim-submit").addclass("active");
            var dataEmail = $("#business_email").val();
            var dataName  = $("#business_name").val();
            var lawFirmName = $("#lawFirm").val();
            var lawFirmSize = $("#lawFirmSize").val();
            var country = $("#lawCountry").val();
            var data = {name: dataName, email: dataEmail,lawFirmName: lawFirmName, lawFirmSize: lawFirmSize, country: country};
            //console.log(data);
            $.ajax({
                url: 'https://www.legalos.com/subscriptionv1/public/early-access/form/validate',
                type: 'POST',
                data: data,
                success: function (response) {
                    if(response.hasError == true){

                        if(response.message == 'validation error'){

                            $('.email_error').fadeIn();
                        }
                    } else{
                        $('.email_error').fadeOut();
                        $('.anim-footer-content').fadeOut();
                        $('.anim-input-wrapper').fadeOut();
                        $('.anim-select-wrap').fadeOut();
                        $(".anim-submit").fadeOut();
                        $(".anim-access").fadeOut();
                        $('.anim-sucess-message').fadeIn();
                        $(".anim-submit").removeClass("active");
                        $(".anim-submit").attr("disabled", true);
                        //$(".anim-from-wrapper").removeClass("showAnimForm");
                        $("#business_email").val('');
                        $("#business_name").val('');
                        $("#lawFirm").val('');
                        $("#lawFirmSize").val('');
                        $("#lawCountry").val('');

                    }
                    
                    
                }
            });
        } else {
            //$(".anim-input-wrapper").addClass("anim-error");
        }
    });

    /*$("input[type='text']").on("input", function () {
       $(this).parent().removeClass("anim-error");
        //$(".anim-input-wrapper").removeClass("anim-error");
    });*/
     $(".anim-input-wrapper input[type='text'], .anim-select-wrap select").on("input", function () {
        //alert("sss");
        $(this).parent().removeClass("anim-error");
        checkFieldsFilled();
    });
    $(".anim-input-wrapper input[type='email'], .anim-select-wrap select").on("input", function () {
        //alert("sss");
        var email = $("#business_email").val();
        if (email === "" || !isValidEmail(email)) {
            //$("#business_email").parent().addClass("anim-error");
            //$(this).closest("div.anim-input-wrapper").addClass("anim-error");
            //$(".business_email").closest("div.business_emaildiv").addClass("anim-error");
            $('.business_emaildiv').addClass("anim-error");
            checkFieldsFilled();
            formIsValid = false;
        } else {
            checkFieldsFilled();
            $("#business_email").parent().removeClass("anim-error");
        }
        checkFieldsFilled();
        //$(this).parent().removeClass("anim-error");
    }); 
    $(".amin-select-dropdown li").click(function () {
        var selectedText = $(this).text();
        $(this).closest(".anim-select-wrap").find(".anim-select-input").val(selectedText);
        $(this).closest(".anim-select-wrap").removeClass("anim-error");
        checkFieldsFilled();
    });
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    function checkFieldsFilled() {
        var name = $("#business_name").val();
        var email = $("#business_email").val();
        var lawFirm = $("#lawFirm").val();
        var lawFirmSize = $("#lawFirmSize").val();
        var country = $("#lawCountry").val();
        var emailPatterns = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (name && emailPatterns.test(email) && lawFirm && lawFirmSize && country) {
            $(".anim-submit").attr("disabled", false);
            $(".anim-submit").addClass("active");
        } else {
            $(".anim-submit").attr("disabled", true);
            $(".anim-submit").removeClass("active");
        }
    }
});