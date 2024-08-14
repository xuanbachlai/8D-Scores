const cat = document.getElementById('cat');
let x = 0;
let dx = 4;
let directionChangeInterval = 2000;
let lastDirectionChange = 0;

function moveCat() {
  x += dx;

  cat.style.transform = `translate(${x}px, 0px) scaleX(0.5) scaleY(0.5)`;

  if (x > window.innerWidth) {
    x = -cat.offsetWidth;
    dx = -dx;
  }

  if (x < -cat.offsetWidth) {
    x = window.innerWidth;
    dx = -dx;
  }

  if (Date.now() - lastDirectionChange > directionChangeInterval) {
    dx = Math.random() < 0.5 ? -dx : dx;
    lastDirectionChange = Date.now();
  }

  requestAnimationFrame(moveCat);
}

moveCat();