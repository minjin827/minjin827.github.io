const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const toggleNav = (forceOpen) => {
  if (!nav || !navToggle) return;
  const isOpen = typeof forceOpen === "boolean" ? forceOpen : nav.classList.contains("is-open");
  const nextState = !isOpen;
  nav.classList.toggle("is-open", nextState);
  navToggle.setAttribute("aria-expanded", String(nextState));
};

navToggle?.addEventListener("click", () => toggleNav());

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleNav(false));
});

// Smooth-scroll anchors for better story telling on landing sections.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const prefersMotion = !prefersReducedMotion.matches;
    target.scrollIntoView({
      behavior: prefersMotion ? "smooth" : "auto",
      block: "start",
    });
    history.replaceState(null, "", id);
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
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  animatedNodes.forEach((node) => observer.observe(node));
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

