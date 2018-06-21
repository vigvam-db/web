$(document).ready(function () {
    $("nav li.dropdown").click(function () {
        if (window.innerWidth < 900) {
            $("nav li.dropdown").not(this).removeClass("open");
            $(this).toggleClass("open");
        }
    });
    $("#nav-toggle").click(function() {
        if (window.innerWidth < 900) {
            $("nav").toggleClass("open");
        }
    });
});