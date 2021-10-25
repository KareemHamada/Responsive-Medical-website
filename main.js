$(document).ready(function() {
    $(".dropdown").hover(function() {
            $(".dropdown-menu").css("display", "block");

        },
        function() {
            $(".dropdown-menu").css("display", "none");
        }
    )
})