const heading = document.querySelector(".heading");

const sticky = heading.offsetTop;

console.log(sticky);

window.addEventListener("scroll", () => {
  if (window.scrollY > sticky) {
    heading.classList.add("active");
  } else {
    heading.classList.remove("active");
  }
});
