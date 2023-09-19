$(document).ready(function () {
  //Search Button
  let search_btn = document.querySelector(".search-btn");
  let search_button = document.querySelector(".search-button");

  search_btn.onclick = () => {
    search_button.classList.toggle("active");
  };
});
