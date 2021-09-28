document.addEventListener("mousemove", (e) => {
  var body = document.querySelector("body");
  var balloon = document.createElement("h6");
  var x = e.offsetX;
  var y = e.offsetY;
  balloon.style.left = x + "px";
  balloon.style.top = y + "px";
  var size = Math.random() * 100;
  balloon.style.width = 10 + size + "px";
  balloon.style.height = 10 + size + "px";

  body.appendChild(balloon);
});

setTimeout(function(){
    balloon.remove()

},1500)