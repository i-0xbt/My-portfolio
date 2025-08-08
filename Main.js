const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

const dark = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark") {
    dark.checked = true;
    body.classList.add("dark");
};
dark.addEventListener("click", () => {
    if (dark.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const contenar = document.querySelector('.projects');

if (contenar) {

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {

            data.forEach(project => {
                const div = document.createElement("div")
                div.classList.add("project")
                div.innerHTML = `<h3>${project.title}</h3><img src = "${project.image}" alt = "${project.title}">
                                 <p>${project.description}</p> <hr> <div class = "link-card"> <a href = "${project.link}" target = "_blank"> Go live</a> 
                                 <a href = "${project.github}" target = "_blank"> Github </a> </div>`;
                contenar.appendChild(div)
            });
        })
        .catch(error => {
            console.log('Error in loading: ', error);
        });
};