var hrs = document.querySelector(".hrs");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");

function update() {
    var time = new Date
    hrs.textContent = time.getHours();
    min.textContent = time.getMinutes();
    sec.textContent = time.getSeconds();
}
setInterval(update,1000)