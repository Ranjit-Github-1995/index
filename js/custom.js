// Main NAV JS

//Submenu
jQuery(".navbar-nav li .clickD").click(function() {
    if (jQuery(this).parent('li').parent('ul').hasClass('sub-menu')) {
        jQuery(this).toggleClass("toggled");
    } else if (jQuery(this).hasClass("toggled")) {
        jQuery(this).removeClass('toggled');
    } else if (jQuery('.navbar-nav li .clickD').hasClass('toggled')) {
        jQuery('.navbar-nav li .clickD').removeClass('toggled');
        jQuery(this).toggleClass("toggled");
    } else {
        jQuery(this).toggleClass("toggled");
    }
});
//Mobile Menu 
$(document).ready(function() {
    $(".navbar-toggler").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('change');
        $('body').toggleClass('_overHidden');
        if ($('.navbar-collapse').hasClass("show")) {
            $('.navbar-collapse').removeClass("show");
        } else {
            $('.navbar-collapse').addClass("show");
        }
    });
    $(document).on('click', function(e) {
        var menu_opened = $('.navbar-collapse').hasClass('show');
        if (!$(e.target).closest('.navbar-collapse').length &&
            !$(e.target).is('.navbar-collapse') &&
            menu_opened === true) {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('change');
            $('body').removeClass('_overHidden');
        }
    });
});


//menu fixed js code
jQuery(window).scroll(function() {
    var window_top = $(window).scrollTop();
    if (window_top > 50) {
        jQuery('._header').addClass('_menu_fixed animated fadeInDown');
    } else {
        jQuery('._header').removeClass('_menu_fixed animated fadeInDown');
    }
});


//  expert_Slider
  $('.expert_Slider').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 300,
		slidesToShow:4,
		slidesToScroll: 1,
    variableWidth: false,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });




// Testmonial Slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
});


// Full screen NAV

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  }

// header search bae = for responsive

$(document).ready(function() {
  $(".mob_srch_icon").click(function() {
    $(".search-section").slideToggle("slow");
  });
});

// ===== Scroll to Top ==== 

$(window).scroll(function() {

  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px

      $('#return-to-top').fadeIn(200);    // Fade in the arrow

  } else {

      $('#return-to-top').fadeOut(200);   // Else fade out the arrow

  }

});

$('#return-to-top').click(function() {      // When arrow is clicked

  $('body,html').animate({

      scrollTop : 0                       // Scroll to top of body

  }, 500);

});

$(window).scroll(function() { 
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
      $(".foot_arw").addClass("fixed");
  } else {
      $(".foot_arw").removeClass("fixed");
  }
});



