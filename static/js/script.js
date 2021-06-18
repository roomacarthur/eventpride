// Initialize Materialize with JQuery
$(document).ready(function() {
    $('.sidenav').sidenav({ edge: "right" });
});

// Show/hide content on wikipride.html by clicking on buttons
$('button').on('click', function() {
    if ($(this).is('#history')) {
        $('#history-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#importance')) {
        $('#importance-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#information')) {
        $('#information-content').slideToggle().siblings('div').slideUp();
    }
});