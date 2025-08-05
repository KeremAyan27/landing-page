document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".site-nav");
  const closeBtn = document.querySelector(".menu-close");

  function isMobileView() {
    return window.innerWidth <= 992;
  }

  function updateHamburgerVisibility() {
    const isMobile = isMobileView();
    const isMenuOpen = navMenu.classList.contains("active");
    hamburgerBtn.style.display = isMobile && !isMenuOpen ? "flex" : "none";
  }

  function toggleNav(open = true) {
    if (open && isMobileView()) {
      navMenu.classList.add("active");
      document.body.classList.add("no-scroll");
      hamburgerBtn.style.display = "none";
    } else {
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      updateHamburgerVisibility();
    }
  }

  // Add scrolled class to header
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 95);
  });

  // Event Listeners
  hamburgerBtn?.addEventListener("click", () => toggleNav(true));
  closeBtn?.addEventListener("click", () => toggleNav(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleNav(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobileView() && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
    updateHamburgerVisibility();
  });

  // Init
  updateHamburgerVisibility();
});
