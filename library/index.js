var body = document.querySelector("body");
var isblue = false;
var chcolor = function(){
    body.style.background = isblue ? "#454545": "#455555";
    isblue = !isblue;
    return
};
setInterval(chcolor, 1000);
