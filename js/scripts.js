$(document).ready(function() {

  $("form#new_item").submit(function(event) {
    event.preventDefault();
    debugger;
    var item = $("#item").val();

    // Conditional Statement
    if (item.length <= 5) {
      $("ul#my_list").append("<li>" + item + "</li>");
    } else {
      alert("Must be less than 6 letters");
    }

    $('#new_item').trigger("reset");
  });

  $("button#refresh").click(function() {
    location.reload();
  });

  $(".image_toggle").click(function() {
    $(".coder_image").toggle();
  });

});
