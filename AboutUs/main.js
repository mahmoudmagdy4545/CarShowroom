let mercedes = document.querySelector(".car-image");

window.onscroll = function () {
  let value = window.scrollY;
  mercedes.style.top = value + 320 + "px";
  mercedes.style.right = -value + 370 + "px";
  if (window.scrollY > 270) {
    mercedes.style.opacity = "0";
  } else {
    mercedes.style.opacity = "1";
  }
};

