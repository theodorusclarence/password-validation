const checkButton = document.querySelector(".check");
const eyeButton = document.querySelector(".eye");
const password = document.getElementById("password");

// Icon Elements
const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");
const arrow = document.getElementById("arrow");
const check = document.getElementById("check");
const wrong = document.getElementById("wrong");

//Root element for variable manipulation
const root = document.documentElement;

// Handle eyeButton Click
let showPass = false;
eyeButton.addEventListener("click", () => {
    eyeOpen.classList.toggle("hide");
    eyeClose.classList.toggle("hide");

    if (showPass) {
        password.setAttribute("type", "password");
    } else {
        password.setAttribute("type", "text");
    }

    //toggle showpass every run
    showPass = !showPass;
});

function hideIcon(arr) {
    arr.forEach((element) => {
        element.classList.add("hide");
    });
}

function setCover(num) {
    // if true = 1 , if false = 0
    num = Number(num);
    root.style.setProperty("--scale", `scaleX(${num})`);
    root.style.setProperty("--opacity", num);
}

let isOpen = false;
// Handle checkButton click
checkButton.addEventListener("click", () => {
    hideIcon([arrow, check, wrong]);

    if (isOpen) {
        arrow.classList.remove("hide");
        setCover(false);
        root.style.setProperty("--color", "#07fcdf");
    } else {
        //if true
        if (password.value === "correct") {
            check.classList.remove("hide");
            root.style.setProperty("--color", "#68DA65");
            checkButton.dataset.content = "Welcome back.";
        } else {
            root.style.setProperty("--color", "#ED462F");
            wrong.classList.remove("hide");
            checkButton.dataset.content = "Wrong Password";
        }
        setCover(true);
    }

    isOpen = !isOpen;
});
