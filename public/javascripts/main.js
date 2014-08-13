/**
 * Created by arman on 4/16/14.
 */
$(document).ready(function() {

    setNavigation();


});


function setNavigation() {
    var path = window.location.pathname;

    $(".nav li a").each(function () {
        var href = $(this).attr('href');
        console.log(href);
        if(path == href){$(this).closest('li').addClass('active');};
    });
}