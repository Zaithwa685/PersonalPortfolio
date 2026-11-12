// SKILL BARS ONLY - Typing removed
var bars = document.querySelectorAll(".animate-bar");
bars.forEach(function(bar) {
  setTimeout(function() { bar.style.width = bar.getAttribute("data-width"); }, 500);
});