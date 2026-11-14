
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");

// باز و بسته کردن منوی موبایل
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// بستن منو بعد از انتخاب هر لینک
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// نمایش دکمه بازگشت به بالای صفحه
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// بازگشت به بالای صفحه
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
