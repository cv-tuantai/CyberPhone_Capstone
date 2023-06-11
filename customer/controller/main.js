// Thêm class black đổi màu cho header khi scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (window.scrollY > 20) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
});
