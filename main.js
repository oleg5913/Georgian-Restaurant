$(document).ready(function() {
    $('nav ul li, ul.menu_bar li').click(function(event) {
        var click_target = event.target.id;
        $('.main_container').load('sections/' + click_target + '.html');
        $('.navigation_mobile').fadeOut(1);
        $('html').animate({scrollTop: 0}, 1);
    })
    $('.burger').click(function() {
        $('.navigation_mobile').toggle();

    })

})//end ready