$(document).on('turbolinks:load', function () {
    $('#slide0').click(function () {
        $('#target_par_zero').slideToggle('slow');
    });
})