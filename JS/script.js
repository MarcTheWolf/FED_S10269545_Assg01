
function showPreloader() {
    document.querySelector('.PreLoader').classList.remove('invisible');
    document.body.classList.add('no-scroll');
}

function sleep() {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function PageLoad() {
    const preloader = document.querySelector('.PreLoader');
    const body = document.body;
    preloader.classList.add('invisible');
    body.classList.remove("no-scroll");
    document.querySelector('.navbar').classList.add('visible');
    document.querySelector('.video-background').classList.add('visible');
    playIntroAnimation();
    setTimeout(function() {
      document.getElementById('search-input').classList.add('visible')
      document.querySelector('.btn-search').classList.add('visible')
      document.querySelector('#title').classList.add('visible')
      document.querySelector('.scroll-btn').classList.add('visible')
    }, 1000);

    preloader.addEventListener('transitionend', function() {
        preloader.classList.add('hidden');
})};


window.addEventListener('load', function() {
    setTimeout(PageLoad, 1000);
    setTimeout(function() {
      window.scrollTo(0, 0);
  }, 50);
});

////////////////////////////////////
//Login System
////////////////////////////////////


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


usericon.addEventListener("click", function(e) {
  usermenu.classList.toggle("visible");
  e.stopPropagation();
});


const logoutbtn = document.querySelector("#logout-btn")

if (logoutbtn) {
  logoutbtn.addEventListener("click", function() {
    localStorage.setItem("logged-in", JSON.stringify(false))
    updateLoginStatus();
  });
}







////////////////////////////
//ScrollBar animated background
/////////////////////////////

const html = document.documentElement;
const canvas = document.getElementById("bgv");
const context = canvas.getContext("2d");
const introFrameCount = 175;

const frameCount = 185;
var currentFrame = index => (
  `/Assets/spinner-3d-v3/${index.toString().padStart(4, '0')}.png`
)




const playIntroAnimation = () => {

  const introFrameCount = 180;
  let currentIntroFrame = 1;

  const playFrame = () => {
    if (currentIntroFrame <= introFrameCount) {
      upimage(currentIntroFrame);
      currentIntroFrame++;
      requestAnimationFrame(playFrame);
    }
};

const upimage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

  playFrame();
};


const preloadImages = () => {
  for (let i = 1; introFrameCount < i && i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i + introFrameCount);
  }
};

preloadImages();



const img = new Image()
img.src = currentFrame(1);

const scale = window.devicePixelRatio || 1;


canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;


canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const scale = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, 100);
});

img.onload=function(){
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const updateImage = index => {
  img.src = currentFrame(index + introFrameCount);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * (frameCount))
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});
  
////////////////////////////
//SearchBar scroll reactive
/////////////////////////////
window.addEventListener('scroll', () => {
  const searchInput = document.querySelector('#title');
  const searchbar_threshold = 200;
  
  const rect_searchInput = searchInput.getBoundingClientRect();

  if (rect_searchInput.top <= searchbar_threshold) {

    document.getElementById('search-input').classList.remove('visible')
    document.querySelector('.btn-search').classList.remove('visible')
    document.querySelector('#title').classList.remove('visible')
  }
  if (rect_searchInput.top > searchbar_threshold) {
    document.getElementById('search-input').classList.add('visible')
    document.querySelector('.btn-search').classList.add('visible')
    document.querySelector('#title').classList.add('visible')
  }




  const posterSection = document.querySelector(".poster-section");
  const posterSection_threshold = 600;
  
  const rect_posterSection = posterSection.getBoundingClientRect();
  const posterRows = document.querySelectorAll(".poster-row");
  
  if (rect_posterSection.top <= posterSection_threshold) {
    posterRows.forEach((row) => row.classList.add("visible"));
  } else {
    posterRows.forEach((row) => row.classList.remove("visible"));
  }

  
  const benefitSection = document.querySelector(".benefits-section");
  const benefitSection_threshold = 600;
  
  const rect_benefitSection = benefitSection.getBoundingClientRect();
  const benefitBoxes = document.querySelectorAll(".benefit-box");
  
  if (rect_benefitSection.top <= benefitSection_threshold) {
    benefitBoxes.forEach((row) => row.classList.add("visible"));
  } else {
    benefitBoxes.forEach((row) => row.classList.remove("visible"));
  }
});






































///////////////////////////////
//Autocomplete recommendation
///////////////////////////////
const searches = ["The Uncanny Counter", "Avengers: Infinity War", "Avengers: End Game"]

const searchIS = {
    "The Uncanny Counter": {
      "Duration": "2 Seasons",
      "Rating": "NC16",
      "Release": "2023",
      "Star Rating": "8.0/10",
      "Img": "Images/Movie_Posters/The_Uncanny_Counter_2.jpg",
      "Desc" : "Noodle shop employees by day and demon hunters by night, the Counters use special abilities to chase down malevolent spirits that prey on humans."
    },
    "Avengers: Infinity War": {
      "Duration": "2hrs 29mins",
      "Rating": "PG13",
      "Release": "2018",
      "Star Rating": "8.4/10",
      "Img": "Images/Movie_Posters/Avengers_Infinity_War.jpeg",
      "Desc" : "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    },
    "Avengers: End Game": {
      "Duration": "3hrs 1min",
      "Rating": "PG13",
      "Release": "2019",
      "Star Rating": "8.4/10",
      "Img": "Images/Movie_Posters/Avengers_End_Game.jpg",
      "Desc" : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    }
}

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();   
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        let matches = [];

        for (i = 0; i < arr.length; i++) {
            if (arr[i].replace(/\s+/g, '').toUpperCase().includes(val.replace(/\s+/g, '').toUpperCase())) {
                matches.push(arr[i]);
            }
        }
        

        matches = matches.slice(0, 4);
        
        matches.forEach(title => {
            let b = document.createElement("DIV");
            b.style.display = "flex";
            b.style.alignItems = "flex-start";
            b.style.padding = "5px";
            b.style.marginBottom = "5px";
        
            var img = document.createElement("IMG");
            if (searchIS[title]) {
                img.src = searchIS[title]["Img"];
                img.style.width = "50px";
                img.style.height = "75px";
                img.style.marginRight = "10px";
                b.appendChild(img);
            }

        
            var textContainer = document.createElement("SPAN");
        

            var titleText = document.createElement("SPAN");
            titleText.innerHTML = title.substr(0, val.length) + title.substr(val.length);
            textContainer.appendChild(titleText);
        

            var additionalText = document.createElement("SPAN");
            additionalText.textContent = searchIS[title] ? searchIS[title]["Duration"] : "";
            additionalText.style.display = "block";
            additionalText.style.fontSize = "0.9em";
            additionalText.style.color = "gray";
            textContainer.appendChild(additionalText);

            var ratingText = document.createElement("SPAN");
            ratingText.textContent = searchIS[title] ? `${searchIS[title]["Release"]}` : "";
            ratingText.style.display = "block";
            ratingText.style.fontSize = "0.9em";
            ratingText.style.color = "gray";
            textContainer.appendChild(ratingText);
        
            b.appendChild(textContainer);
        
            b.innerHTML += "<input type='hidden' value='" + title + "'>";
            
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            
            a.appendChild(b);
        });
    });
  
  
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
});


function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}

function closeAllLists(list) {
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (list != x[i] && list != inp) {
    x[i].parentNode.removeChild(x[i]);
  }
}
}


document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});
document.addEventListener("scroll", function (e) {
  closeAllLists(e.target);
  document.getElementById("search-input").value = "";
});
}

autocomplete(document.getElementById("search-input"), searches);


document.getElementById("searchbar").addEventListener("submit", (event) => {
  event.preventDefault(); 
});

document.getElementById("search-button").addEventListener("click", function() {
  var inputValue = document.getElementById("search-input").value;
  displayResult(inputValue)
})

function displayResult(title) {
  if (searches.includes(title)) {
    var html = 
    `
      <div class="results-title row">
        <h2>${title}</h2>
        <p>${searchIS[title]["Release"]} | ${searchIS[title]["Rating"]} | ${searchIS[title]["Duration"]}</p>
        <div class="ratings">
          <img src="Images/star.svg" alt="Stars">
          <h3>${searchIS[title]["Star Rating"]}</h3>
        </div>
        <div class="movie-display row">
          <img src="${searchIS[title]["Img"]}">
          <video autoplay muted loop>
            <source src="Images/videos/pixel-city.mp4">
          </video>
        </div>
        <div class="results-desc row">
          <img src="${searchIS[title]["Img"]}">
          <p>${searchIS[title]["Desc"]}</p>
        </div>
      </div>
    `
    resultslist.innerHTML = html;

    document.getElementById("resultslist").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

    setTimeout(() => {
      window.scrollBy(0, -100);
    }, 700);

  } else {
      
      resultslist.innerHTML = `<p>Oops~ The title ${title} was not found.</p>`;
      document.getElementById("resultslist").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  
      setTimeout(() => {
        window.scrollBy({
          top: -100,
          left: 0,
          behavior: 'smooth'
        });
      }, 700);

  }
}

document.addEventListener("click", function (e) {
closeAllLists(e.target);
});



const scrollbtn = document.querySelector(".scroll-btn")
scrollbtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


