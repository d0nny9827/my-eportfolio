let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 40;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  for (let i = 0; i < shapes.length; i++) {
    const isEven = i % 2 === 0;
    const boolInt = isEven ? 1 : -1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 20}deg)`;
  }
}

function toggleContrast() {
  if (contrastToggle) {
    contrastToggle = !contrastToggle;
    return document.body.classList.remove("dark-theme");
  }

  contrastToggle = !contrastToggle;
  document.body.classList += " dark-theme";
}

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_iup23dv",
      "template_3mnch2k",
      event.target,
      "xfiG7g_lLE9lP101Y"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      alert(
        "The email service is temporarily down, please contact me directly at donovanlopez9827@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = !isModalOpen;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}
