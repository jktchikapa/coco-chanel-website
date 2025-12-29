// Theme switch
const toggle = document.getElementById("themeSwitch");
const theme = localStorage.getItem("theme");

if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light"); 
    toggle.checked = true; 
}
toggle.onchange = () => {
    if (toggle.checked) {
        document.documentElement.setAttribute("data-theme", "light"); 
        localStorage.setItem("theme", "light");  
    }
    else {
        document.documentElement.removeAttribute("data-theme"); 
        localStorage.setItem("theme", "dark"); 
    }
};

//Tooltips
document.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
});
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => { new bootstrap.Popover(el); });