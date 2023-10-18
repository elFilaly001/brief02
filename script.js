function call() {

   // alert(window.getComputedStyle(document.getElementById("_burger")).getPropertyValue('display'));
    var Sign = document.getElementsByClassName("Sign_log_cart")[0];
    var getS = window.getComputedStyle(Sign).getPropertyValue("display");
    if (getS === "none") {
        document.getElementsByClassName("Sign_log_cart")[0].style.display = "flex";
    } else if (getS === "flex") {
         document.getElementsByClassName("Sign_log_cart")[0].style.display = "none";
    }
    return false;
}
