// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        id: id
      }
    }).then(
      function () {
        console.log("Burger devoured");
        location.reload();
      }
    );
  });

  $("#submit-button").on("click", function (event) {
    
    var name = $("#input-burger-name").val().trim();

    $.ajax("/api/burgers/" + name, {
      type: "POST",
      data: {
        name: name
      }
    }).then(
      function () {
        console.log("Burger added");
        location.reload();
      }
    );
  });

});
