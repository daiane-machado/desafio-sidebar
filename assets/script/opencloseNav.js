const btnSidebar = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");
const logotipo = document.getElementById("logotipo");
const sidebarFooter= document.getElementById("sidebar-footer");
const userAvatar = document.getElementById("user-avatar");
const userDatas = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const main = document.getElementById("main");


btnSidebar.onclick = function () {
  if(sidebar.style.width != "4.875rem"){
    sidebar.style.width = "4.875rem";
    logotipo.style.display = "none";
    sidebarFooter.style.width = "4.875rem";
    userAvatar.style.display = "none";
    userDatas.style.display ="none";
    btnLogout.style.margin = "auto";
    main.style.marginLeft = "4.875rem"
    
  }else{
    sidebar.style.width = "15.62rem";
    logotipo.style.display = "block";
    sidebarFooter.style.width = "15.62rem";
    userAvatar.style.display = "block";
    userDatas.style.display ="flex";
    btnLogout.style.marginLeft = "2.93rem";
    main.style.marginLeft = "15.62rem"
  }
}