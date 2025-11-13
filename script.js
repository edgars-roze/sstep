function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("play").addEventListener("click", function() {
  await wait(100);
});

document.getElementById("stop").addEventListener("click", function() {
  
});
