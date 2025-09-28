let menu = document.getElementById("menu");
let home = document.getElementById("home");
let about = document.getElementById("aboutus");
let order = document.getElementById("Order");

home.addEventListener("click", function () {
  home.classList.add("selectedmenuitem");
  about.classList.remove("selectedmenuitem");
  order.classList.remove("selectedmenuitem");
});

about.addEventListener("click", function () {
  about.classList.add("selectedmenuitem");
  home.classList.remove("selectedmenuitem");
  order.classList.remove("selectedmenuitem");
});

order.addEventListener("click", function () {
  order.classList.add("selectedmenuitem");
  about.classList.remove("selectedmenuitem");
  home.classList.remove("selectedmenuitem");
});
