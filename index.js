let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) {
    count = count - 1;
    countEl.innerText = count;
  }
}

function reset() {
  countEl.innerText = 0;
  count = 0;
}
