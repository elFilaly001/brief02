function call() {
  // alert(window.getComputedStyle(document.getElementById("_burger")).getPropertyValue('display'));
  var Sign = document.querySelector("#Sign_log_cart");
  // var getS = window.getComputedStyle(Sign).getPropertyValue("display");
  let getinfo = Sign.className;
  if (getinfo == "Sign_log_cart") {
    Sign.classList.add("menu_out");
    Sign.classList.remove("Sign_log_cart");
  } else if (getinfo == "menu_out") {
    Sign.classList.add("Sign_log_cart");
    Sign.classList.remove("menu_out");
  }
}

function search() {
  var Sign = document.querySelector("#recherch");
  // var getS = window.getComputedStyle(Sign).getPropertyValue("display");
  let getS = Sign.className;
  if (getS == "recherch") {
    Sign.classList.add("recherch_out");
    Sign.classList.remove("recherch");
  }
}
function quit_search() {
  var Sign = document.querySelector("#recherch");
  let getS = Sign.className;
  if (getS === "recherch_out") {
    Sign.classList.add("recherch");
    Sign.classList.remove("recherch_out");
  }
}

var arr = document.querySelector("#checkin");
var arr1 = document.querySelector("#check");
var mark = arr1.className;

arr.addEventListener("click", () => {
  var mark = arr1.className;
  if (mark == "checking") {
    arr1.classList.add("checking_out");
    arr1.classList.remove("checking");
  } else if (mark == "checking_out") {
    arr1.classList.add("checking");
    arr1.classList.remove("checking_out");
  }
});
