function showWelcome() {
    let name = document.getElementById("nameInput").value.trim();
    let welcomeMessage = document.getElementById("welcomeMessage");

    if (name) {
        welcomeMessage.innerText = `Welcome, ${name}!`; 
    } else {
        alert( "Please enter your name."); 
    }
}

setInterval(changeImage, 2000)
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.querySelector(".menu-toggle");

    if (sidebar.classList.contains("open")) {
        closeMenu(); 
    } else {
        openMenu();
    }
}
function openMenu() {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.querySelector(".menu-toggle");
    
    sidebar.classList.add("open");
    sidebar.style.display = "block";
    menuButton.innerHTML = "✖";
}

function closeMenu() {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.querySelector(".menu-toggle");

    sidebar.classList.remove("open");
    sidebar.style.display = "none";
    menuButton.innerHTML = "☰";
}
document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
     let menuButton = document.querySelector(".menu-toggle");

    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
    }
});
function toggleMenu() {
    let sidebar = document.getElementById("sidebar")
    if (sidebar.classList.contains("open")) {
        closeMenu();
     } else {
        openMenu();
    }
}
