addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    document.querySelectorAll(".content p").forEach((element) => {
      if (!element.classList.contains("bigp")) {
        element.classList.add("bigp");
      }
    });
  } else {
    document.querySelectorAll(".content p").forEach((element) => {
      if (element.classList.contains("bigp")) {
        element.classList.remove("bigp");
      }
    });
  }
});
