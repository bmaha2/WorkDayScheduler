$(document).ready(function () {
    $("#currentDay").append(moment().format("dddd, MMMM Do"));
    renderLastMessage();
    setHourBlockColor();
    addDescription();

    function renderLastMessage() {
        $('input[type="text"]').each(function () {
            var id = $(this).attr('id');
            var value = localStorage.getItem(id);
            $(this).val(value);
        });
    }

    function setHourBlockColor() {
        $("label").each(function () {
            // console.log($(this).attr("value"));
            //console.log((moment().format("k").toUpperCase()));
            if (moment().format("k") < 08 && moment().format("k") > 17) {
                $(this).next().addClass("future");
            }
            if ($(this).attr("value") < moment().format("k")) {
                $(this).next().addClass("past");
            } else if ($(this).attr("value") > moment().format("k")) {
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

