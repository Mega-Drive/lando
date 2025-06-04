/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Menu
3. Init Header
4. Init Hero Slider
5. Init Stats
6. Init Brands Slider
7. Init Accordions
8. Init Testimonials Slider
9. Init ScrollTo


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initHeader();
	initHeroSlider();
	initStats();
	initBrandsSlider();
	initAccordions();
	initTestimonialsSlider();
	initScrollTo();

	/* 

	2. Init Menu

	*/
	
	function initMenu()
	{
		const menu = document.getElementById("menu");
		const btn = document.getElementById("navbar-toggler");

		btn.onclick = function()
		{
			menu.classList.toggle('active');
			btn.classList.toggle('active');
		}
	}

	/* 

	3. Init Header

	*/

	function initHeader()
	{
		window.addEventListener('scroll', function ()
		{
  			const header = document.querySelector('.header');
			const hero = this.document.querySelector('.hero');
  			if (window.scrollY > 150)
			{
    			header.classList.add('scrolled');
				hero.classList.add('scrolled');
  			}
			else
			{
    			header.classList.remove('scrolled');
				hero.classList.remove('scrolled');
  			}
		});
	}

	/* 

	4. Init Hero Slider

	*/

	function initHeroSlider()
	{
		const swiper = new Swiper('.hero_swiper',
		{
			slidesPerView: 3,
			loop: true,
			autoplay: false,
			delay: 3000,
			speed: 400,
			spaceBetween: 30,
			breakpoints:
			{
				240:
				{
					spaceBetween: 16,
					slidesPerView: 1
				},
				769:
				{
					spaceBetween: 24,
					slidesPerView: 3
				},
				1025:
				{
					spaceBetween: 30
				}
			}
		});
	}

	/* 

	5. Init Stats

	*/

	function initStats()
	{
		if($('.stats_counter').length)
		{
			let statsItems = $('.stats_counter');

	    	statsItems.each(function(i)
	    	{
	    		let ele = $(this);
	    		let endValue = ele.data('end-value');
	    		let eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		let signBefore = "";
	    		let signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		let milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		let counter = {value:eleValue};
		    		let counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('stats_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	6. Init Brands Slider

	*/

	function initBrandsSlider()
	{
		const swiper = new Swiper('.brands_swiper',
		{
			slidesPerView: 6,
			loop: true,
			autoplay: true,
			delay: 3000,
			speed: 400,
			spaceBetween: 30,
			breakpoints:
			{
				240:
				{
					spaceBetween: 16,
					slidesPerView: 2
				},
				769:
				{
					spaceBetween: 24,
					slidesPerView: 3
				},
				992:
				{
					spaceBetween: 24,
					slidesPerView: 4
				},
				1025:
				{
					spaceBetween: 30,
					slidesPerView: 4
				},
				1200:
				{
					spaceBetween: 30,
					slidesPerView: 5
				},
				1400:
				{
					spaceBetween: 30,
					slidesPerView: 6
				}
			}
		});
	}

	/* 

	7. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			let accs = $('.accordion');

			accs.each(function()
			{
				let acc = $(this);

				if(acc.hasClass('active'))
				{
					let panel = $(acc.next());
					let panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panelH);
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						let panel = $(acc.next());
						let panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panelH);
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						let panel = $(acc.next());
						let panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panelH);
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

	/* 

	8. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		const swiper = new Swiper('.testimonials_swiper',
		{
			slidesPerView: 3,
			loop: false,
			autoplay: false,
			delay: 3000,
			speed: 400,
			spaceBetween: 30,
			navigation: true,
			breakpoints:
			{
				240:
				{
					spaceBetween: 16,
					slidesPerView: 1
				},
				769:
				{
					spaceBetween: 24,
					slidesPerView: 3
				},
				1025:
				{
					spaceBetween: 30
				}
			},navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}
		});
	}

	/* 

	9. Init ScrollTo

	*/

	function initScrollTo()
	{
		var links = $('.main_nav ul li a');
    	links.each(function()
    	{
    		var ele = $(this);
    		var target = ele.data('scroll-to');
    		ele.on('click', function(e)
    		{
    			e.preventDefault();
				e.preventDefault();
    			$(window).scrollTo(target, 1500, {offset: -70});
    		});
    	});
	}

});