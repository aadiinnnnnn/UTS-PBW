// window scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// doc gerak
$(document).ready(function () {
  // text gerak
  new Typed("#type-it", {
    strings: ["Student", "UI/UX Designer", "Front End Development"],
    typeSpeed: 100,
    loop: true,
  });
});

$(document).ready(function () {
  // text gerak
  new Typed("#typed-it", {
    strings: ["Minat", "Bakat"],
    typeSpeed: 100,
    loop: true,
  });
});

$(function () {
  $.scrollIt();
});
