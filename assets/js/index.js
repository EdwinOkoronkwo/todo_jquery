// $(document).ready(function () {
//   $("li").on("click", function () {
//     $(this).toggleClass("completed");
//   });
// });

// $(document).ready(function () {
//   $("ul").on("click", "span", function (event) {
//     $(this)
//       .parent()
//       .fadeOut(500, function () {
//         $(this).remove();
//       });
//     event.stopPropagation();
//     // $("#p1").text("Removed " + $(this).parent().text());
//   });
// });

//Check off specific Todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
  // $("#p1").text("Removed " + $(this).parent().text());
});

$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    // $("#p1").text($(this).val());
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
});
