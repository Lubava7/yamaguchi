const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const topTable = document.querySelector(".top-img");

downButton.addEventListener("click", function () {
  topTable.style.scrollBehavior = "smooth";
  topTable.style.transition = "1s";
  topTable.style.transform = "translateY(10%)";
});

upButton.addEventListener("click", function () {
  topTable.style.scrollBehavior = "smooth";
  topTable.style.transition = "1s";
  topTable.style.transform = "translateY(0)";
});
