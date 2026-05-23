// typing effect
var typed = new Typed("#typing", {
  strings: ["MUHAMAD RIDHO", "Rekayasa Perangkat Lunak", "Portfolio"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// reveal animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// scroll progress
window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
};
