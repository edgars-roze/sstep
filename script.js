const input_bpm = document.getElementById("bpm");
const input_channel = document.getElementById("channel");
const input_sound = document.getElementById("sound");
let bpm = 140;
let channel = 1;
let on = false;
let step = 0;

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

input_bpm.addEventListener("input", function() {
  bpm = Number(input_bpm.value);
  
  if (bpm < 1) {
      bpm = 1;

      if (input_bpm.value !== "") {
        input_bpm.value = 1;
      }
  } else if (bpm > 999) {
      input_bpm.value = bpm = 999;
  }
});

input_channel.addEventListener("input", function() {
  channel = Number(input_channel.value);
  
  if (channel < 1) {
      channel = 1;

      if (input_channel.value !== "") {
        input_channel.value = 1;
      }
  } else if (channel > 999) {
      input_channel.value = channel = 999;
  }
});

input_sound.addEventListener("input", function() {
  console.log("File specified"); 
  console.log(input_sound.value);
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
