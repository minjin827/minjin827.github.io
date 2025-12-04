const THEME_STORAGE_KEY = "preferred-theme";

const getStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const persistTheme = (theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // ignore storage failures
  }
};

const prefersDarkScheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const updateThemeToggle = (theme) => {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;
  const icon = toggle.querySelector("[data-theme-icon]");
  const label = toggle.querySelector("[data-theme-label]");
  if (icon) {
    icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
  }
  if (label) {
    label.textContent = theme === "dark" ? "Light" : "Dark";
  }
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeToggle(theme);
};

const initThemeToggle = () => {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  const storedTheme = getStoredTheme();
  const initialTheme = storedTheme || (prefersDarkScheme() ? "dark" : "light");
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    persistTheme(next);
    applyTheme(next);
  });

  if (!storedTheme && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      const hasStored = !!getStoredTheme();
      if (!hasStored) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleChange);
    }
  }
};

const initAnimations = () => {
  const targets = document.querySelectorAll(
    ".glass-panel, .project-card, .skill-box, .story-content, .quote-box, .timeline-horizontal__card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  targets.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    observer.observe(element);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initThemeToggle();
});

window.addEventListener("load", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});

