$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function () {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function () {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // show hadouken and animate it to the right of ryu
  })
  .mouseup(function () {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // ryu returns to his initial position
  });
});
