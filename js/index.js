var button = new Audio();
button.src = "audio/odin-klik-myshki.mp3"

function playButton(num) {
  button.play();
}

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
   ripple.style.animation = `ripple-effect .4s  linear`;
   ripple.onanimationend = () => {
     document.body.removeChild(ripple);
   }
}

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const lines = document.querySelectorAll('.line');

burgerMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');
});

// Add a hover effect to the photo
const photo = document.querySelector('#about img');
photo.addEventListener('mouseenter', () => {
  photo.style.opacity = 0.8;
});
photo.addEventListener('mouseleave', () => {
  photo.style.opacity = 1;
});


function animateHeaderText() {
  const animatePrint = document.querySelectorAll(".animate-print");

  animatePrint.forEach(element => {
    const text = element.innerText;
    element.innerText = "";

    let i = 0;
    function printLetter() {
      if (i < text.length) {
        element.innerText += text.charAt(i);
        i++;
        setTimeout(printLetter, 500); // Adjust the delay time here
      } else {
        element.onmouseover = () => {
          i = 0;
          element.innerText = "";
          printLetter();
        }; // Add a mouseover event listener to restart the animation
      }
    }

    printLetter();
  });
}

animateHeaderText();

const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  const jsonResponse = await response.json();
  const status = document.querySelector('#status');
  status.innerHTML = jsonResponse.message;
  form.reset();
});
