// عند الضغط على رابط
$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active'); 
    $(this).addClass('active'); 

    // إخفاء القائمة المنسدلة بعد الضغط على الرابط
    $('.navbar-collapse').collapse('hide');
});

// إخفاء القائمة عند الضغط في أي مكان خارجها
$(document).click(function (event) {
    var clickOver = $(event.target);
    var isNavbarOpen = $(".navbar-collapse").hasClass("show");

    // تحقق إذا كان النقر خارج القائمة أو زر التبديل
    if (isNavbarOpen && !clickOver.closest('.navbar').length) {
        $(".navbar-collapse").collapse('hide');
    }
});


$(window).on('scroll', function () {
    var position = $(this).scrollTop(); 
    $('section').each(function () {
        var target = $(this).offset().top - 100; 
        var id = $(this).attr('id');
        if (position >= target) {
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link[href="#' + id + '"]').addClass('active');
        }
    });
});




//ظهور العناصر عند لاسكرول
ScrollReveal({ 
    //reset: true ,
    distance: "80px",
    duration:2000,
    delay: 200
});
ScrollReveal().reveal('.home-contant , .hed' ,{ origin:'top'});
ScrollReveal().reveal('.home .imge , .services .card  , .portfolio .box , .contact form , .about-img' ,{ origin:'bottom'});
ScrollReveal().reveal('.home-contant h1 ,  .about-contant ,.home-contant .social-media' ,{ origin:'left'});
ScrollReveal().reveal('.home-contant p ' ,{ origin:'right'});


//تاثير الكتابه
var typed = new Typed('.typed', {
    strings: ['Frontend Developer','Network Engineer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});