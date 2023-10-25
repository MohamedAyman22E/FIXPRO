let navBar = document.querySelector(".navBar");
let icon = document.querySelector(".icon");
let iconI = document.querySelector(".icon i");
icon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  if (iconI.classList.contains("fa-bars")) {
    iconI.classList.replace("fa-bars", "fa-xmark");
  } else {
    iconI.classList.replace("fa-xmark", "fa-bars");
  }
});
