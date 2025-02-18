const styleElements = ["lis1", "lis2", "lis3", "lis4", "lis5"];
const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  item.classList.add(
    styleElements[Math.floor(Math.random() * styleElements.length)]
  );
});
