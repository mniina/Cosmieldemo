const btn = document.getElementById("counter-btn");
let count = 0;

btn.addEventListener("click", () => {
  count++;
  btn.textContent = `You clicked ${count} time${count === 1 ? "" : "s"}`;
});
