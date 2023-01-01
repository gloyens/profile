function darkmode() {
  var body = document.body;
  var els = document.querySelectorAll(".card-white,.header,.popup,.btn-x");
  var topnav = document.querySelector(".topnav");
  var link = document.querySelectorAll(".topnav a");
  var button = document.querySelectorAll(".btn-yellow, .popup-info .btn-yellow");

  body.classList.toggle("dark-mode-1");
  els.forEach(el => el.classList.toggle("dark-mode-2"));
  topnav.classList.toggle("dark-mode-3");
  link.forEach(el => el.classList.toggle("dark-mode-4"));
  button.forEach(el => el.classList.toggle("dark-mode-5"));
}

function hide() {
  document.querySelectorAll(".popup-container").forEach(el =>
  el.style.visibility = "hidden");
}

function show(popup) {
  document.getElementById(popup).style.visibility = "visible";
}
