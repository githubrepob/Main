const ball = document.getElementById('ball');
const toggleButton = document.getElementById('toggleButton1');
let isJumping = false;
let jumpInterval;

function jump() {
  if (!isJumping) {
    jumpInterval = setInterval(() => {
      let currentBottom = parseInt(getComputedStyle(ball).bottom);
      ball.style.bottom = (currentBottom + 50) + 'px';
    }, 300);
    isJumping = true;
  } else {
    clearInterval(jumpInterval);
    isJumping = false;
  }
}

toggleButton1.addEventListener('click', jump);
toggleButton2.addEventListener('click', jump);
