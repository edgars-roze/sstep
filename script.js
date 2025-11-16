const input_bpm = document.getElementById("bpm");
const input_channel = document.getElementById("channel");
const input_sound = document.getElementById("sound");

const div_playhead = document.getElementById("playhead");

let bpm = 140;
let channel = 1;
let on = false;
let playhead = 0;

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

  /* Load the corresponding file */
  /* input_sound.value = db[channel]; */
});

input_sound.addEventListener("input", function() {
  return;
});

document.getElementById("play").addEventListener("click", async () => {
  if (on) {
    return;
  }
  
  on = true;

  while (on) {
    if (++playhead >= 4 * 4 * 4) {
      playhead = 0;
    }

    div_playhead.style.marginLeft = playhead * 1.5625 + '%';
    await wait(60000 / bpm);
  }
});

document.getElementById("stop").addEventListener("click", function() {
  if (on) {  
    on = false;
  } else {
    playhead = 0;
  }
});
