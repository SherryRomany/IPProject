
            var center;
            function loadGoogleMap(){
                var script = document.createElement('script');
                document.body.appendChild(script);
            } 

            function setCarousel() {
                
                if ($('.tm-article-carousel').hasClass('slick-initialized')) {
                    $('.tm-article-carousel').slick('destroy');
                } 

                if($(window).width() < 438){
                    // Slick carousel
                    $('.tm-article-carousel').slick({
                        infinite: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
                else {
                 $('.tm-article-carousel').slick({
                        infinite: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    });   
                }
            }

            function setPageNav(){
                if($(window).width() > 991) {
                    $('#tm-top-bar').singlePageNav({
                        currentClass:'active',
                        offset: 79
                    });   
                }
                else {
                    $('#tm-top-bar').singlePageNav({
                        currentClass:'active',
                        offset: 65
                    });   
                }
            }

            function togglePlayPause() {
                vid = $('.tmVideo').get(0);

                if(vid.paused) {
                    vid.play();
                    $('.tm-btn-play').hide();
                    $('.tm-btn-pause').show();
                }
                else {
                    vid.pause();
                    $('.tm-btn-play').show();
                    $('.tm-btn-pause').hide();   
                }  
            }
       
            $(document).ready(function(){

                $(window).on("scroll", function() {
                    if($(window).scrollTop() > 100) {
                        $(".tm-top-bar").addClass("active");
                    } else {
                        //remove the background property so it comes transparent again (defined in your css)
                       $(".tm-top-bar").removeClass("active");
                    }
                });      

                // Google Map
                loadGoogleMap();  

                // Date Picker
                const pickerCheckIn = datepicker('#inputCheckIn');
                const pickerCheckOut = datepicker('#inputCheckOut');
                
                // Slick carousel
                setCarousel();
                setPageNav();

                $(window).resize(function() {
                  setCarousel();
                  setPageNav();
                });

                // Close navbar after clicked
                $('.nav-link').click(function(){
                    $('#mainNav').removeClass('show');
                });

                // Control video
                $('.tm-btn-play').click(function() {
                    togglePlayPause();                                      
                });

                $('.tm-btn-pause').click(function() {
                    togglePlayPause();                                      
                });

                // Update the current year in copyright
                $('.tm-current-year').text(new Date().getFullYear());                           
            });