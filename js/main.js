const menuBtn = document.querySelector(".menu__btn");
const menuBtnClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const background = document.querySelector(".menu--close");

menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("menu__list--open");
  background.classList.toggle("menu--open");
});

menuBtnClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  background.classList.remove("menu--open");
});
