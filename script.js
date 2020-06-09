$(document).ready(function() {

    // test times from momemt.js
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

    //stored todos from localStorage
    //use JSON parse to make a string an object
    var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

    if (test) { console.log(storedPlans); }

    //if plans are retrieved from localStorage, update the array
    if (storedPlans !== null) {
        planTextArr = storedPlans;
    } else {
        planTextArr = new Array(9);
        planTextArr[4] = "Lets eat some lunch";
    }

    if (test) { console.log("full array of planned text", planTextArr); }
});