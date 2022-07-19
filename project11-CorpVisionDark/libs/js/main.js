(function () {
   // Back to Top - by CodyHouse.co
   var backTop = document.getElementsByClassName("js-cd-top")[0],
      offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
      offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      scrollDuration = 700,
      scrolling = false;

   if (backTop) {
      //update back to top visibility on scrolling
      window.addEventListener("scroll", function (event) {
         if (!scrolling) {
            scrolling = true;
            !window.requestAnimationFrame
               ? setTimeout(checkBackToTop, 250)
               : window.requestAnimationFrame(checkBackToTop);
         }
      });

      //smooth scroll to top
      backTop.addEventListener("click", function (event) {
         event.preventDefault();
         !window.requestAnimationFrame
            ? window.scrollTo(0, 0)
            : Util.scrollTo(0, scrollDuration);
      });
   }

   function checkBackToTop() {
      var windowTop = window.scrollY || document.documentElement.scrollTop;
      windowTop > offset
         ? Util.addClass(backTop, "cd-top--is-visible")
         : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
      windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
      scrolling = false;
   }
})();

/* 
   INIT SCROLL EVENT
*/

// Header
$(window).scroll(function () {
   if ($(this).scrollTop() > 20) {
      $("#header").addClass("active");
      $(".scrollToTop").removeClass("active");
   } else {
      $("#header").removeClass("active");
      $(".scrollToTop").addClass("active");
   }
});

/* 
   HANDLE HEADER SEARCH
*/

//Body no scroll and show search area when clicked header search
$(function () {
   $(".search-open").click(function () {
      $("body").toggleClass("noscroll");
      $(".header__search").addClass("active");
      $(".search-input").focus();
   });
});

//Closed search area
$(function () {
   $(".search-close").click(function () {
      $(".header__search").removeClass("active");
      $("body").removeClass("noscroll");
   });
});

/* 
   TOGGLE LIGHT/DARK MODE
*/

$(function () {
   $(".mode-light").click(function () {
      $("#data-theme").attr("data-theme", "light");

      $("#header").addClass("light-theme");

      $(".mode-light").removeClass("active");
      $(".mode-dark").addClass("active");
   });
   $(".mode-dark").click(function () {
      $("#data-theme").removeAttr("data-theme");

      $("#header").removeClass("light-theme");

      $(".mode-light").addClass("active");
      $(".mode-dark").removeClass("active");
   });
});

// Button navbar toggle
$(function () {
   $(".show-header").click(function () {
      $("#header").addClass("header-active");
      $("body").toggleClass("noscroll");
   });
   $(".close-header").click(function () {
      $("#header").removeClass("header-active");
      $("body").removeClass("noscroll");
   });
});

/* 
   INIT MAGNIFIC POPUP
*/

// Gallery
$(document).ready(function () {
   $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      removalDelay: 300,
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-fade",
      gallery: {
         enabled: true,
         navigateByImgClick: false,
         preload: [0, 1],
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function (item) {
            return item.el.attr("title") + "<small>Image</small>";
         },
      },
   });
});

/* 
   INIT OWL CAROUSEL
*/

// Testimonials
$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      responsive: {
         0: {
            items: 1,
         },
      },
   });
});
