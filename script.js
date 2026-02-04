const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let scale = 1;

// No → Yes button grows
noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;
});

// Yes → Switch page
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});