const input_bpm = document.getElementById("bpm");
let bpm = 140;
let on = false;
let step = 0;

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

input_bpm.addEventListener("input", function() {
  bpm = Number(input_bpm.value);
});

document.getElementById("play").addEventListener("click", async () => {
  if (on) {
    return;
  }
  
  on = true;

  while (on) {
    console.log(step);
    await wait(60000 / bpm);

    if (++step >= 4 * 4 * 4) {
      step = 0;
    }
  }
});

document.getElementById("stop").addEventListener("click", function() {
  if (on) {  
    on = false;
  } else {
    step = 0;
  }
});
