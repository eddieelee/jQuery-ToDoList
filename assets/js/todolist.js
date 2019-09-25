//Check off specific todos by clicking
//Add eventlistener to ul
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //Stop the event from bubbling up
  event.stopPropagation();
});

//keypress()
$("input[type='text']").keypress(function(event) {
  //Enter key is 13
  if (event.which === 13) {
    //Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul (append to this ul)
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus-square").click(function() {
  $("input[type='text']").fadeToggle();
});
