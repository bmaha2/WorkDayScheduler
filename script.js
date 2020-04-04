$(document).ready(function () {
    $("#currentDay").append(moment().format("dddd, MMMM Do")); //displaying current date
    renderLastMessage();    //get the saved data from the local storage
    setHourBlockColor();    //setting the color coded time-blocks
    addDescription();       //adding events on to the time-blcoks

    function renderLastMessage() {
        $('input[type="text"]').each(function () {
            var id = $(this).attr('id');
            var value = localStorage.getItem(id);
            $(this).val(value);
        });
    }
    function setHourBlockColor() {
        $("label").each(function () {
            console.log($(this).attr("value"));
            console.log((moment().format("kk")));
            if ($(this).attr("value") < moment().format("kk")) {
                $(this).next().addClass("past");
            } else if ($(this).attr("value") > moment().format("kk")) {
                $(this).next().addClass("future");
            }
            else {
                $(this).next().addClass("present");
            }
        });
    }
    function addDescription() {
        $(".saveBtn").click(function (e) {
            e.preventDefault();
            $('input[type="text"]').each(function () {
                var id = $(this).attr("id");
                var value = $(this).val();
                localStorage.setItem(id, value);
            });
            renderLastMessage();
        })
    }
});

