$(document).ready(function () {
    $("#currentDay").append(moment().format("dddd, MMMM Do"));
    function setHourBlockColor() {
        $("label").each(function () {
            //console.log($(this).text());
            //console.log((moment().format("ha").toUpperCase()));
            if ($(this).text() > "8AM" && $(this).text() < "6PM") {
                if ($(this).text() < moment().format("ha").toUpperCase()) {
                    $(this).next().addClass("past");
                } else if ($(this).text() === moment().format("ha").toUpperCase()) {
                    $(this).next().addClass("present");
                }
                else {
                    $(this).next().addClass("future");
                }
            } else {
                $(this).next().addClass("future");
            }
        });
    }
    //  function addDescription() {
    //   $(".description").append(".description").text();
    // }
    setHourBlockColor();
});





//$(document).ready(function(){
//    $("#submitBtn").click(function(){        
//        $("#myForm").submit(); // Submit the form
//     });
// });
