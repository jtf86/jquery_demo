$(document).ready(function() {

  $("form#new_item").submit(function(event) {
    event.preventDefault();
    debugger;
    var item = $("#item").val();
    $("ul#my_list").append("<li>" + item + "</li>");
    $('#new_item').trigger("reset");
  });

  $("button#refresh").click(function() {
    location.reload();
  });




});
