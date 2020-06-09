$(document).ready(function() {

    // test times from momemt
    var test = false;

    var now = moment().format('MMMM Do YYYY');

    var nowHour24 = moment().format('H');
    var nowHour12 = moment().format('h');

    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    var $dateParagraph = $('#currentDay');
    $dateParagraph.text(now);
}