let charInput = document.getElementById("text-area");
charInput.addEventListener("input", () => {
  let count = charInput.value.length;
  document.querySelector(".output_value").innerHTML = count;
});
