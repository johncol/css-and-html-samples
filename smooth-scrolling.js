const scrollToTop = () => {
  const prefersReducedMotion = getPrefersReducedMotion();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

const scrollToElement = (element) => {
  const prefersReducedMotion = getPrefersReducedMotion();

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};
