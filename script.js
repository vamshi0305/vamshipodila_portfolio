// Contact form submission handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });
}

// Scroll animation with IntersectionObserver
const revealElements = document.querySelectorAll("section, .project-card, .blog-card, .tech-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => observer.observe(el));

// Smooth scroll + close menu after click
const links = document.querySelectorAll("a[href^='#']");
const navLinkContainer = document.getElementById("nav-links");
const menuToggle = document.getElementById("menu-toggle");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu if it is open
    if (navLinkContainer.classList.contains("active")) {
      navLinkContainer.classList.remove("active");
    }
  });
});

// Active nav link based on scroll position
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Toggle menu button on mobile
menuToggle.addEventListener("click", () => {
  navLinkContainer.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
    const downloadLink = document.getElementById("downloadBtn");
    const statusSpan = document.getElementById("downloadStatus");

    downloadLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default behavior

      statusSpan.textContent = "Downloading...";

      const link = document.createElement("a");
      link.href = "resume.pdf";  // Make sure resume.pdf exists in your project folder
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // After 2 seconds, show "Download successful ✅"
      setTimeout(() => {
        statusSpan.textContent = "Download successful ✅";

        // After another 2 seconds, clear the message
        setTimeout(() => {
          statusSpan.textContent = "";
        }, 2000);
      }, 2000);
    });
  });

