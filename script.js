const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  //button is in a form so have to prevent default
  e.preventDefault();
  //select what's inside the input
  //   console.log("hello");
  //   coupon.select();
  //   coupon.setSelectionRange(0, 99999999999);
  //   coupon.cloneNode();
  //select the coupon and define where you want to start and end selection

  navigator.clipboard
    .writeText(coupon.value) //specify content to be copied
    .then(() => {});
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", copyText);
