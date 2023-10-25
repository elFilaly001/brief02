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

function sideB(id_class, class_to_chek, nom_new_class) {
  let id_nom = document.querySelector("#" + id_class);
  let chek = id_nom.className;

  if (chek == class_to_chek) {
    id_nom.classList.remove(class_to_chek);
    id_nom.classList.add(nom_new_class);
  } else {
    id_nom.classList.remove(nom_new_class);
    id_nom.classList.add(class_to_chek);
  }
}

function checkmail(mail) {
  const check_mail = /^[a-zA-Z0-9._-$*]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(check_mail.test(mail));
  return check_mail.test(mail);
}
function check_txt(txt) {
  const check = /[a-zA-Z]/;
  return check.test(txt);
}

document.addEventListener("DOMContentLoaded", () => {
  let btn1 = document.querySelector("#checkin");
  let btn2 = document.querySelector("#p1_side");
  let btn3 = document.querySelector("#cart");
  let btn4 = document.querySelector("#btn_plus");
  let btn5 = document.querySelector("#btn_minus");
  let btn6 = document.querySelector("#send");
  let txt1 = document.querySelector("#qte");
  let txt2 = document.querySelector("#prx");
  let txt3 = document.querySelector("#nom");
  let txt4 = document.querySelector("#prenom");
  let txt5 = document.querySelector("#mail");
  let txt7 = document.querySelector("#validation");
  console.log(btn2);
  btn2?.addEventListener("click", () => {
    sideB("side_M", "side_menu", "side_out");
  });
  console.log(btn1);
  btn1?.addEventListener("click", () => {
    sideB("check", "checking", "checking_out");
  });
  console.log(btn3);
  btn3?.addEventListener("click", () => {
    sideB("cart_menu", "cart_menu", "cart_out");
  });
  btn4?.addEventListener("click", () => {
    txt1.innerHTML = parseInt(txt1.innerHTML) + 1;
    txt2.innerHTML = parseInt(txt2.innerHTML) + 1900;
  });
  btn5?.addEventListener("click", () => {
    if (parseInt(txt1.innerHTML) > 1) {
      txt1.innerHTML = parseInt(txt1.innerHTML) - 1;
      txt2.innerHTML = parseInt(txt2.innerHTML) - 1900;
    }
  });
  btn6.addEventListener("click", () => {
    console.log("clicked");
    if (!check_txt(txt3)) {
      txt7.innerHTML = "entrez un nom valid ";
    }
    if (!check_txt(txt4)) {
      txt7.innerHTML = "entrez un prenom valid ";
    }
    if (!checkmail(txt5)) {
      txt7.innerHTML = "entrez un mail valid ";
    }
  });
});

//document.addEventListener("DOMContentLoaded", () => {});

// document.addEventListener("DOMContentLoaded", () => {
//   let nom_btn, nom_class, nom_new_class;
//   var arr = document.querySelector("#checkin");
//   var arr1 = document.querySelector("#check");

//   arr.addEventListener("click", () => {
//     var mark = arr1.className;
//     if (mark == "checking") {
//       arr1.classList.add("checking_out");
//       arr1.classList.remove("checking");
//     } else if (mark == "checking_out") {
//       arr1.classList.add("checking");
//       arr1.classList.remove("checking_out");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   var ar = document.querySelector("#page1_side_menu");
//   var ar1 = document.querySelector("#side");

//   ar.addEventListener("click", () => {
//     var mrk = ar1.className;
//     console.log("Current class name:", mrk);
//     if (mrk == "side_menu") {
//       ar1.classList.add("side_menu_out");
//       ar1.classList.remove("side_menu");
//     } else if (mrk == "side_menu_out") {
//       ar1.classList.add("side_menu");
//       ar1.classList.remove("side_menu_out");
//     }
//   });
// });
