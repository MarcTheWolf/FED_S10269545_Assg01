
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
      document.getElementById('myInput').classList.add('visible')
      document.querySelector('.btn-search').classList.add('visible')
      document.querySelector('#title').classList.add('visible')
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

////////////////////////////
//ScrollBar animated background
/////////////////////////////

const html = document.documentElement;
const canvas = document.getElementById("bgv");
const context = canvas.getContext("2d");
const introFrameCount = 175;

const frameCount = 285;
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
  const myinput = document.querySelector('#title');
  const searchbar_threshold = 200;
  
  const rect_myinput = myinput.getBoundingClientRect();

  if (rect_myinput.top <= searchbar_threshold) {

    document.getElementById('myInput').classList.remove('visible')
    document.querySelector('.btn-search').classList.remove('visible')
    document.querySelector('#title').classList.remove('visible')
  }
  if (rect_myinput.top > searchbar_threshold) {
    document.getElementById('myInput').classList.add('visible')
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
      "Img": "Images/Movie_Posters/The_Uncanny_Counter_2.jpg"
    },
    "Avengers: Infinity War": {
      "Duration": "2hrs 29mins",
      "Rating": "PG13",
      "Release": "2018",
      "Star Rating": "8.4/10",
      "Img": "Images/Movie_Posters/Avengers_Infinity_War.jpeg"
    },
    "Avengers: End Game": {
      "Duration": "3hrs 1min",
      "Rating": "PG13",
      "Release": "2019",
      "Star Rating": "8.4/10",
      "Img": "Images/Movie_Posters/Avengers_End_Game.jpg"
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
  document.getElementById("myInput").value = "";
});
}

autocomplete(document.getElementById("myInput"), searches);


document.getElementById("searchbar").addEventListener("submit", (event) => {
  event.preventDefault(); 
});

document.getElementById("search-button").addEventListener("click", function() {
  var inputValue = document.getElementById("myInput").value;
  displayResult(inputValue)
})

function displayResult(title) {
  if (searches.includes(title)) {
    var html = ``
    resultslist.innerHTML = html;
  } else {
      
      resultslist.innerHTML = `<p>Oops~ The title ${title} was not found.</p>`;

  }
}

document.addEventListener("click", function (e) {
closeAllLists(e.target);
});


