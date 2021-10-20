$(document).on('turbolinks:load', function () {
    $('#slide').click(function () {
        $('#target_par').slideToggle('slow');
    });
    $('#slide2').click(function () {
        $('#target_par_two').slideToggle('slow');
    });
    $('#slide3').click(function () {
        $('#target_par_three').slideToggle('slow');
    });
})


