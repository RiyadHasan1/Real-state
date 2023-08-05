$(document).ready(function(){
	// Slider-active
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
	// project-active
$('.project-active').owlCarousel({
    loop:true,
    nav:false,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
		576:{
            items:2
        },
        768:{
            items:3
        },
        991:{
            items:4
        }
    }
})
 // video-active
// $('.video-popup').magnificPopup({
	// type: 'image'
	// // other Option
// })
$('.video-popup').magnificPopup({
	type: 'iframe'
	// other Option
})
	// Blog-active
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
	// Testimonials active
$('.testimonials-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})	
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:2
        },
		576:{
            items:3
        },  
		768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})
$('#main-menu-active').meanmenu({
	meanScreenWidth: "767",
	meanMenuContainer: '.main-menu'
	
	
});






})


