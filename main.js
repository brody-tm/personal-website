function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.mode = "dark;"

    document.querySelectorAll(".dark-mode-button").forEach(element => {
        element.classList.add("dark-mode");
      });
 }