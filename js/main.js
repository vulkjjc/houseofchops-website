$(document).ready(function() {
    var scrollLink = $('.scroll');

    //Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    // active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 200;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    //Activates signIn and signUp for if you already have an account or don't have an account.

    $("#signInBtnBF").click(function() {
        $("#singIn01").css({ "display": "block" });
        $("#singIn02").css({ "display": "none" });
    })

    $("#signUpBtnBF").click(function() {
        $("#singIn01").css({ "display": "none" });
        $("#singIn02").css({ "display": "block" });
    })

    //Remove active class from each food tabs when the desired tab becomes active
    $(".ist_link").click(function() {
        $(".ist_link").addClass("bg_link");
        $(".ist_txt_link").css("color", "white");

        $(".secd_link").removeClass("bg_link");
        $(".secd_txt_link").css("color", "rgb(94, 93, 93)");

        $(".third_link").removeClass("bg_link");
        $(".third_txt_link").css("color", "rgb(94, 93, 93)");

        $(".fourt_link").removeClass("bg_link");
        $(".fourt_txt_link").css("color", "rgb(94, 93, 93)");
    });

    $(".secd_link").click(function() {
        $(".ist_link").removeClass("bg_link");
        $(".ist_txt_link").css("color", "rgb(94, 93, 93)");

        $(".secd_link").addClass("bg_link");
        $(".secd_txt_link").css("color", "white");

        $(".third_link").removeClass("bg_link");
        $(".third_txt_link").css("color", "rgb(94, 93, 93)");

        $(".fourt_link").removeClass("bg_link");
        $(".fourt_txt_link").css("color", "rgb(94, 93, 93)");
    });

    $(".third_link").click(function() {
        $(".ist_link").removeClass("bg_link");
        $(".ist_txt_link").css("color", "rgb(94, 93, 93)");

        $(".secd_link").removeClass("bg_link");
        $(".secd_txt_link").css("color", "rgb(94, 93, 93)");

        $(".third_link").addClass("bg_link");
        $(".third_txt_link").css("color", "white");

        $(".fourt_link").removeClass("bg_link");
        $(".fourt_txt_link").css("color", "rgb(94, 93, 93)");
    });

    $(".fourt_link").click(function() {
        $(".ist_link").removeClass("bg_link");
        $(".ist_txt_link").css("color", "rgb(94, 93, 93)");

        $(".secd_link").removeClass("bg_link");
        $(".secd_txt_link").css("color", "rgb(94, 93, 93)");

        $(".third_link").removeClass("bg_link");
        $(".third_txt_link").css("color", "rgb(94, 93, 93)");

        $(".fourt_link").addClass("bg_link");
        $(".fourt_txt_link").css("color", "white");
    });

    //Rotate the navigation button by 45 Degrees
    $(".navbar_toggler").click(function() {
        $("#navLinks").toggleClass("active");
        $("#hamburger-menu").toggleClass("rotate");
    });


})


//SignIn and Signup javascript control file


var SignIn = document.getElementById("signInBtn");
var SignUp = document.getElementById("signUpBtn");
var singInForm = document.getElementById("singIn01");
var singUpForm = document.getElementById("singIn02");
var closeBtn = document.getElementById("myCloseBtn");
var closeBtn2 = document.getElementById("myCloseBtn2");



SignIn.addEventListener("click", function() {
    singInForm.style.display = " block ";
});

SignUp.addEventListener("click", function() {
    singUpForm.style.display = " block ";
});

closeBtn.addEventListener("click", function() {
    singInForm.style.display = " none ";

});

closeBtn2.addEventListener("click", function() {
    singUpForm.style.display = " none ";
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == singInForm) {
        singInForm.style.display = "none";
    }
}
// Animated javascript text

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 40000
  });