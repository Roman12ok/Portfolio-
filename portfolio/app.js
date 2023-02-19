
$(function () {
    hideNav();
    showNav();
    closeNav();
    downloadCv();
});

// media query

function hideNav() {
   if ($(window).width() < 600) {
       $("#dropdown").show();
    }else if ($(window).width() > 700) {
       $("#lg-nav").show();
    }
}

// open nav

function showNav(){
    $("#mobile-nav").on("click", function () { 
        $("#mobile").show('slow');
    });
}

// close nav

function closeNav(){
    $("#close-nav").on("click", function () { 
        $("#mobile").hide('slow');
    });
}

function  downloadCv() {
  
}




 


