if (!localStorage.getItem("mode")) {
  console.log("No mode");
  localStorage.setItem("mode", "dark")
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded");

  const element = document.body;

  if (localStorage.getItem("mode") == "dark") {
    element.classList.add("dark-mode");
    console.log("Dark mode automatically enabled");
  }

  if (localStorage.getItem("mode") == "light") {
    element.classList.add("light-mode");
    console.log("Light mode automatically enabled");
  }
});

function toggleDarkMode() {
    const element = document.body;

    if (localStorage.getItem("mode") == "dark") {
      element.classList.remove("dark-mode");
      element.classList.add("light-mode");
      localStorage.setItem("mode", "light");
      console.log("Dark mode -> light mode");
    } else {
      element.classList.remove("light-mode");
      element.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
      console.log("Light mode -> dark mode");
    }
}