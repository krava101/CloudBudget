const openMenuBtn = document.querySelector(".burger-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".backdrop");
const selService = document.querySelector(".form-selected-service");
const servicesList = document.querySelector(".form-services-list");

const userForm = document.querySelector(".contact-form");
const userInfo = {};

const menuOnClick = event => {
  if (event.target.dataset.link) menu.classList.remove("backdrop-active");
  menu.removeEventListener("click", menuOnClick);
}

const closeMenuOnClick = () => {
  menu.classList.remove("backdrop-active");
  closeMenuBtn.removeEventListener("click", closeMenuOnClick);
}

const openMenuOnClick = () => {
  menu.classList.add("backdrop-active");
  closeMenuBtn.addEventListener("click", closeMenuOnClick);
  menu.addEventListener("click", menuOnClick);
}

openMenuBtn.addEventListener("click", openMenuOnClick);




selService.addEventListener("click", () => {
  servicesList.classList.toggle("selecting");
  servicesList.addEventListener("click", event => {
    selService.value = event.target.textContent;
    event.currentTarget.classList.remove("selecting");
  })
})

const userFormOnClick = (event) => {
  event.preventDefault();
  userInfo.firstName = event.target.userFirstName.value;
  userInfo.lastName = event.target.userLastName.value;
  userInfo.phoneNumber = event.target.userTel.value;
  userInfo.selectedService = event.target.userSelectedService.value;
  if (event.target.userSelectedService.value) {
    console.log(userInfo);
    event.currentTarget.reset();
  } else { alert("All fields must be filled in!")}
}

userForm.addEventListener("submit", userFormOnClick)