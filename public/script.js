const btn = document.querySelector(".btn");
const name = document.querySelector(".nme");
const email = document.querySelector(".email");

btn.addEventListener("click", () => {
  if (name.value) {
    window.location.href = `/admin?name=${name.value}`;
  } else if (email.value) {
    window.location.href = `/admin?email=${email.value}`;
  }
});

const del = document.querySelector("del");
