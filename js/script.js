// Collapsed Menu Functionality 
let nav_menus = document.getElementsByClassName("collapsible-menu");
for (let i = 0; i < nav_menus.length; i++) {
  nav_menus[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.querySelector(".chevron").classList.toggle("rotate-180");
    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.overflow = "visible";
    } else {
      content.style.maxHeight = "0px";
      content.style.overflow = "hidden";
    }
  });
}


// sidebarToggle Functionality
document.getElementById("sidebarToggle").addEventListener("click", function () {
  const sidebar = document.querySelector("aside");  
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");

  if (sidebar.style.transform === "translateX(0px)" || sidebar.style.transform === "") {
    sidebar.style.transform = "translateX(-100%)";
    nav.style.left = "0";
    main.style.marginLeft = "0";
  } else {
    sidebar.style.transform = "translateX(0)";
    nav.style.left = "270px";
    main.style.marginLeft = "270px";
  }
});

