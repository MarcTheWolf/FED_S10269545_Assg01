

const signup = document.querySelector(".signupbtn")
signup.addEventListener("click", function() {
    document.querySelector(".left-slider").classList.add("signup")
    document.querySelector(".right-slider").classList.add("signup")
    document.querySelector(".signin-text").classList.add("move")
    document.querySelector(".signup-text").classList.remove("move")
})

const signin = document.querySelector(".signinbtn")
signin.addEventListener("click", function() {
    document.querySelector(".left-slider").classList.remove("signup")
    document.querySelector(".right-slider").classList.remove("signup")
    document.querySelector(".signin-text").classList.remove("move")
    document.querySelector(".signup-text").classList.add("move")
})