$('button').on('click', function() {
    if ($(this).is('#history')) {
        $('#history-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#importance')) {
        $('#importance-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#information')) {
        $('#information-content').slideToggle().siblings('div').slideUp();
    }
});