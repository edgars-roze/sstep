const input = document.getElementById("bpm");
let bpm = 140;
let on = false;
let step = 0;

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

input.addEventListener("input", function() {
  bpm = Number(input.value);
});

document.getElementById("play").addEventListener("click", async () => {
  on = true;
  step = 0;

  while (on) {
    console.log(step);
    
    await wait(60000 / bpm);

    if (++step >= 4 * 4 * 4) {
      step = 0;
    }
  }
});

document.getElementById("stop").addEventListener("click", function() {
  on = false;
});
