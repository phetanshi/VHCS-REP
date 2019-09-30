$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $("#txtDate").datepicker(
        {
            changeMonth: true,
            changeYear: true,
            minDate: 1,
            showAnim: "clip"
        });



    $.getJSON("../data/PreviousClients.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='lst_item_" + key + "'>" + val.name + "</li>");
        });
        $("#lst-previous-client").empty();
        $("#lst-previous-client").append(items);
    });

    //$.getJSON("../data/QuoteForm.json", function (data) {
    //    var items = "";

    //    $("#quote-modal-body").empty();
    //    $("#quote-modal-body").append(items);
    //});

});

//function fnBuildQuoteForm(data) {
//    var items = "";
//    $.each(data, function (key, val) {

//    });
//}