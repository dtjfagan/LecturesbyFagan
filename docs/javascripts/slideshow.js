// Prev/next buttons for .slideshow blocks. Works with Material's instant navigation.
function initSlideshows() {
  document.querySelectorAll(".slideshow").forEach(function (show) {
    if (show.dataset.ready) return;
    show.dataset.ready = "1";
    var track = show.querySelector(".slides");
    var count = show.querySelector(".ss-count");
    var n = track.children.length;
    function index() { return Math.round(track.scrollLeft / track.clientWidth); }
    function update() { if (count) count.textContent = (index() + 1) + " / " + n; }
    function go(step) {
      var i = (index() + step + n) % n;
      track.scrollTo({ left: i * track.clientWidth });
    }
    show.querySelector(".ss-prev").addEventListener("click", function () { go(-1); });
    show.querySelector(".ss-next").addEventListener("click", function () { go(1); });
    track.addEventListener("scroll", function () { window.requestAnimationFrame(update); });
    update();
  });
}
if (typeof document$ !== "undefined") { document$.subscribe(initSlideshows); }
else { document.addEventListener("DOMContentLoaded", initSlideshows); }
