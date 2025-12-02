const h1 = document.querySelector(".title");

function handlerClick(){
  h1.style.color = "red";
}

function handlerMouseEnter(){
  h1.innerText = "Mouse is here!";
}

function handlerMouseLeave(){
  h1.innerText = "Mouse is gone!";
}

function handlerWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handlerWindowCopy(){
  alert("copy");
}


h1.addEventListener("mouseenter", handlerMouseEnter);
h1.addEventListener("mouseleave", handlerMouseLeave);
h1.onclick = handlerClick;
// h1.onClick = handlerClick;

window.addEventListener("resize", handlerWindowResize);
window.addEventListener("copy", handlerWindowCopy);
window.addEventListener("offline", () => {alert("offline");});
window.addEventListener("online", () => {alert("online");});