let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
  console.log(count);
}

function reset() {
  document.getElementById("count-el").innerText = 0;
  count = 0;
  console.log(count);
}
