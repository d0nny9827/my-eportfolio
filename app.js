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

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = !isModalOpen;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}
