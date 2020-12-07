 $('.testimonial-carousel').owlCarousel({
     loop: true,
     margin: 20,
     autoplay: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 3
         },
         1000: {
             items: 4
         }
     }
 });


 $('.home-carousel').owlCarousel({
     loop: true,
     margin: 20,
     autoplay: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 6
         },
         1000: {
             items: 7
         }
     }
 });


 $('.homediv-carousel').owlCarousel({
     //    rtl:true,
     loop: true,
     margin: 20,
     //    nav:true,
     autoplay: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 3
         },
         1000: {
             items: 4
         }
     }
 })

 $(document).ready(function () {
     $(".nav-tabs a").click(function () {
         $(this).tab('show');
     });
 });

 $('#carouselExample').on('slide.bs.carousel', function (e) {

     var $e = $(e.relatedTarget);
     var idx = $e.index();
     var itemsPerSlide = 4;
     var totalItems = $('.carousel-item').length;

     if (idx >= totalItems - (itemsPerSlide - 1)) {
         var it = itemsPerSlide - (totalItems - idx);
         for (var i = 0; i < it; i++) {
             // append slides to end
             if (e.direction == "left") {
                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
             } else {
                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
             }
         }
     }
 });


 mybutton = document.getElementById("myBtn");
 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }




 $(window).on('load', function () {
     $(".loader").fadeOut();
     $("#preloder").delay(200).fadeOut("slow");
 });
