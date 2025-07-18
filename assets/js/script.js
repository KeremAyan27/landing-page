document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".site-nav");
  const closeBtn = navMenu?.querySelector(".menu-close");
  const overlay = document.querySelector("[data-nav-overlay]");

  // Sticky header effect on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 95) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Toggle navigation menu (open/close)
  function toggleNav(forceOpen = null) {
    const isOpen =
      forceOpen !== null ? forceOpen : !navMenu.classList.contains("active");

    if (isOpen) {
      navMenu.classList.add("active");
      overlay.classList.add("is-visible");
      document.body.classList.add("body-nav-open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      navMenu.setAttribute("aria-hidden", "false");
      hamburgerBtn.classList.add("hidden"); // hide hamburger
    } else {
      navMenu.classList.remove("active");
      overlay.classList.remove("is-visible");
      document.body.classList.remove("body-nav-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-hidden", "true");
      hamburgerBtn.classList.remove("hidden"); // show hamburger
    }
  }

  // Open on hamburger click
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => toggleNav());
  }

  // Close button inside nav
  if (closeBtn) {
    closeBtn.addEventListener("click", () => toggleNav(false));
  }

  // Overlay click closes nav
  if (overlay) {
    overlay.addEventListener("click", () => toggleNav(false));
  }

  // ESC key closes nav
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleNav(false);
    }
  });
});
