let bpm = 140;
const input = document.getElementById("bpm");

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

input.addEventListener("input", function() {
  bpm = Number(input.value);
});

document.getElementById("play").addEventListener("click", async () => {
  console.log("step");
  await wait(60000 / bpm);
});

document.getElementById("stop").addEventListener("click", function() {
  
});
