function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("darkModeToggle");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        button.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        button.textContent = "🌙";
    }
}

window.onload = function () {
    const button = document.getElementById("darkModeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️";
    }
}