
const selector = document.querySelectorAll(".type-toggle h4");
const indicator = document.querySelector(".indicator");
const flipButton = document.getElementById('flipButton');
const cards = document.querySelectorAll('.sub-card');

selector.forEach(button => {
  button.addEventListener("click", function() {
    if (indicator.classList.contains("year")) {
      indicator.classList.remove("year");
      cards.forEach(card => {
        if (card.classList.contains("flipped")){
            card.classList.toggle('flipped');
        }
      });
    } else {
      indicator.classList.add("year");
      cards.forEach(card => {
        if (!card.classList.contains("flipped"))
        card.classList.toggle('flipped');
      });  
    }
  });
});

const freeplancard = document.querySelector(".free")
const basicplancard = document.querySelector(".basic")
const premiumplancard = document.querySelector(".premium")
const familyplancard = document.querySelector(".family")

const planlist = [freeplancard, basicplancard, premiumplancard, familyplancard]

planlist.forEach(element => {
    element.addEventListener("click", function(){
        element.classList.toggle('flipped');
    })
});


if (localStorage.getItem("logged-in") === null) {
  localStorage.setItem("logged-in", JSON.stringify(false));
}


function updateLoginStatus() {
  var isLoggedIn = JSON.parse(localStorage.getItem("logged-in"));
  const login = document.getElementById("user");

  if (isLoggedIn) {
    login.innerHTML = `<img src="/Images/user-icon.svg" class="user-icon">
    <div class="user-menu">
                  <ul>
                    <li id="settings-btn">Settings</li>
                    <li id="logout-btn">Log Out</li>
                  </ul>
                </div>   `;
  } else {
    login.innerHTML = `<a class="hover" href="login.html">Log-In</a>`;
  }
}


updateLoginStatus();

const usermenu = document.querySelector(".user-menu")

const usericon = document.querySelector(".user-icon")
document.addEventListener("click", function(e) {

  if (!usermenu.contains(e.target) && !usericon.contains(e.target)) {
    if (usermenu.classList.contains("visible")) {
      usermenu.classList.remove("visible");
    }
  }
});


if (usericon) {
  usericon.addEventListener("click", function(e) {
    usermenu.classList.toggle("visible");
    e.stopPropagation();
  });
}


const logoutbtn = document.querySelector("#logout-btn")

if (logoutbtn) {
  logoutbtn.addEventListener("click", function() {
    localStorage.setItem("logged-in", JSON.stringify(false))
    updateLoginStatus();
  });
}





