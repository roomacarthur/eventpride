$('button').on('click', function() {
    if ($(this).is('#history')) {
        $('#history-content').show().siblings('div').hide();
    } else if ($(this).is('#importance')) {
        $('#importance-content').show().siblings('div').hide();
    } else if ($(this).is('#information')) {
        $('#information-content').show().siblings('div').hide();
    }
});