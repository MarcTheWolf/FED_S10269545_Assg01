

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


if (localStorage.getItem("logged-in") === null) {
  localStorage.setItem("logged-in", JSON.stringify(false));
}


function updateLoginStatus() {
  var isLoggedIn = JSON.parse(localStorage.getItem("logged-in"));
  const login = document.getElementById("user");
  const loginsection = document.querySelector(".login-section")
  const loggedinsection = document.querySelector(".loggedin-section")

  if (isLoggedIn) {
    login.innerHTML = `<img src="/Images/user-icon.svg" class="user-icon">
    <div class="user-menu">
                  <ul>
                    <li id="settings-btn">Settings</li>
                    <li id="logout-btn">Log Out</li>
                  </ul>
                </div>   `;

    loginsection.classList.add("hidden")
    loggedinsection.classList.remove("hidden")
  } else {
    login.innerHTML = `<a class="hover" href="login.html">Log-In</a>`;
    loginsection.classList.remove("hidden")
    loggedinsection.classList.add("hidden")
  }
}


updateLoginStatus();



const logoutbtn = document.querySelector("#logout-btn")

if (logoutbtn) {
  logoutbtn.addEventListener("click", function() {
    localStorage.setItem("logged-in", JSON.stringify(false))
    updateLoginStatus();
  });
}


const loginbtns = document.querySelectorAll(".login-btn");

if (loginbtns.length > 0) {
  loginbtns.forEach(button => {
    button.addEventListener("click", function() {
      localStorage.setItem("logged-in", JSON.stringify(true));
      updateLoginStatus()
    });
  });
}

const usermenu = document.querySelector(".user-menu")

const usericon = document.querySelector(".user-icon")

document.addEventListener("click", function(e) {

  if (!usermenu.contains(e.target) && !usericon.contains(e.target)) {
    if (usermenu.classList.contains("visible")) {
      usermenu.classList.remove("visible");
    }
  }
});


usericon.addEventListener("click", function(e) {
  usermenu.classList.toggle("visible");
  e.stopPropagation(); 
});




