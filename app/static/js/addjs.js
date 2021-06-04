$(document).ready(function() {
    $("input[type='radio']").change(function() {
        if ($(this).val() == "repeat") {
            $("#ifYes").show(800);
        } else {
            $("#ifYes").hide(800);
        }
    });
});
