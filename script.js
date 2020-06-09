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

    //set a variable referencing planner element
    var $plannerDiv = $('plannerContainer');
    //clear existing element
    $plannerDiv.empty();

    if (test) { console.log("current time", nowHour12); }

    //building calender with rows
    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;
        
        //heres the rows
        var $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index', hour);
        
    }
});