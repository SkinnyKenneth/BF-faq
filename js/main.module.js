import { logoLink } from "./functions.js";
logoLink();

// show dropdown suggestions for input
const optionsList = document.querySelector(".options");
const searchBar = document.querySelectorAll(".input-wrapper > *")

searchBar.forEach(el => {
    document.addEventListener("click", (e) => {
        e.target == el 
            ? optionsList.classList.add("open")
            : optionsList.classList.remove("open");
    })

})

// autofill input field by clicking from dropdown
const optionsListEls = optionsList.querySelectorAll("li");
const searchInput = document.getElementById("searchQuery");

optionsListEls.forEach(option => {
    option.addEventListener("click", (e) => {
        searchQuery.value = e.target.innerText;
    })
})