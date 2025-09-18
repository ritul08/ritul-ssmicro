// Sticky header on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle mobile menu
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
});

function toggleMenu() {
    menuToggle.classList.remove("active");
    navigation.classList.remove("active");
}

// ===== Dark Mode Toggle =====
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "☀️ Light Mode";
    } else {
        modeToggle.textContent = "🌙 Dark Mode";
    }
});
