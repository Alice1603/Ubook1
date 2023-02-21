// Открытие поля поиска
var vis = document.getElementById("search_by")
var lup = document.getElementById("lupa")
function lupa(){
    vis.style.display = "flex"
    lup.style.border = "2px solid deepskyblue"
    lup.style.borderRadius = `${lup.offsetHeight / 2}px`
    lup.style.minWidth = "300px"
    lup.style.width = "40%"
    document.getElementById("choose_g").style.borderRadius = `${document.getElementById("choose_g").offsetHeight / 2}px`
}

// Закрытие поля поиска
function sea(){
    lup.style.minWidth = "initial"
    lup.style.width = "auto"
    vis.style.display = "none"
    lup.style.border = "0"
}

// Размер хэдера
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.getElementById("head").style.height = `140px`
}else{
    document.getElementById("head").style.height = `60px`
}

// Размер значка меню
document.querySelector(".panel_logo").style.fontSize = `${document.getElementById("head").offsetHeight - 35}px`
document.querySelector(".panel_logo").style.height = `${document.getElementById("head").offsetHeight - 30}px`
