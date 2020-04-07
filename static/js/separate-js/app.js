$(document).ready(function () {
    var scene = $('#scene');
    var parallaxInstance = new Parallax(scene);

    $('.teachers-slider').owlCarousel({
        center: true,
        items: 1,
        margin: 10,
        responsive: {
            600: {
                items: 2,
            },
        },
    });
});
