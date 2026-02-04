const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const bgMusic = document.getElementById("bgMusic"); // মিউজিক এলিমেন্টটি ধরা হয়েছে

let scale = 1;

// No বাটনে ক্লিক করলে Yes বাটন বড় হবে
noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;
});

// Yes বাটনে ক্লিক করলে পেজ পরিবর্তন হবে এবং গান শুরু হবে
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  
  // গানটি প্লে করার চেষ্টা করবে
  bgMusic.play().catch(error => {
    console.log("Song failed to play!! (Browser security concern):", error);
  });
});
