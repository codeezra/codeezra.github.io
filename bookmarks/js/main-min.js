const styleElements = ["lis1", "lis2", "lis3", "lis4", "lis5"];
document.querySelectorAll(".list-item").forEach((e) => {
  e.classList.add(
    styleElements[Math.floor(Math.random() * styleElements.length)]
  );
}),
  document
    .querySelector(".header-filter input")
    .addEventListener("click", () => {
      document.querySelector(".header-filter").classList.contains("active")
        ? document.querySelector(".header-filter").classList.remove("active")
        : document.querySelector(".header-filter").classList.add("active");
    }),
  document
    .querySelector(".header-filter")
    .addEventListener("mouseleave", () => {
      document.querySelector(".header-filter").classList.remove("active");
    });
const changeFilterItems = (e) => {
  "all" === e
    ? document.querySelectorAll(".list-item").forEach((e) => {
        e.classList.remove("hide");
      })
    : (document.querySelectorAll(".list-item").forEach((e) => {
        e.classList.add("hide");
      }),
      document.querySelectorAll(`.list-item[attr-tag="${e}"]`).forEach((e) => {
        e.classList.remove("hide");
      }));
};
document.querySelectorAll(".header-filter ul li").forEach((e) => {
  e.addEventListener("click", () => {
    var t;
    document.querySelector(".header-filter").classList.remove("active"),
      (document.querySelector(".header-filter input").value =
        "filter: " + e.innerText),
      "all" === (t = e.innerText)
        ? document.querySelectorAll(".list-item").forEach((e) => {
            e.classList.remove("hide");
          })
        : (document.querySelectorAll(".list-item").forEach((e) => {
            e.classList.add("hide");
          }),
          document
            .querySelectorAll(`.list-item[attr-tag="${t}"]`)
            .forEach((e) => {
              e.classList.remove("hide");
            }));
  });
});
