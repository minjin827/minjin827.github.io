const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const animatedNodes = document.querySelectorAll("[data-animate]");
if (animatedNodes.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  animatedNodes.forEach((node) => observer.observe(node));
}

if (window.lucide?.createIcons) {
  window.lucide.createIcons();
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

