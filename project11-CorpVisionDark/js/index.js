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
