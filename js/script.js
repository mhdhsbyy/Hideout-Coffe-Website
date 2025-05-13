// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Ambil elemen tombol
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Event listener untuk scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.display = "block"; // Menampilkan tombol jika scroll > 500px
  } else {
    scrollToTopBtn.style.display = "none"; // Sembunyikan tombol jika scroll < 500px
  }
};

// Event listener untuk klik tombol
scrollToTopBtn.addEventListener("click", function () {
  // Kembali ke atas dengan smooth scrolling
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
