// link to home page on logo click

export function logoLink() {
    const logoLink = document.querySelector(".logo");
    
    logoLink.addEventListener("click", () => {
        window.location.href = "./index.html";
    })    
}