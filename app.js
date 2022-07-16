const body = document.body;

/* Navbar */

const navSlide = () => {
  let burger = document.querySelector(".hero__navbar-burger");
  let navbar = document.querySelector(".hero__navbar-lists");
  let navLinks = document.querySelectorAll(".hero__navbar-lists li");

  let navbarToggle = () => {
    navbar.classList.toggle("nav-active");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
  };
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (e.view.innerWidth < 1449) {
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
        navbarToggle();
      }
    });
  });

  burger.addEventListener("click", () => {
    navbarToggle();
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 15 + 0.5
        }s`;
      }
    });
  });
};

navSlide();

const subscribeBtn = document.querySelector(".subscribe-btn2");
let subscribeField = document.getElementById("input");

subscribeBtn.addEventListener("click", () => {
  subscribeField.value = "";
});

/* Hero */

const heroSlider = document.querySelector(".hero__slider");
const heroArrows = document.querySelectorAll(".heroBtn");

let currentVideoIndex = 0;

let setSliderPosition = (windowWidth) => {
  heroSlider.style.transform = `translateX(${-windowWidth}px)`;
};

let translateSlider = () => {
  setSliderPosition(currentVideoIndex * window.innerWidth);
};

window.addEventListener("resize", translateSlider);

heroArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.className.includes("right") &&
      currentVideoIndex < heroData.length - 1
    ) {
      currentVideoIndex++;
    }
    if (e.target.className.includes("left") && currentVideoIndex > 0) {
      currentVideoIndex--;
    }
    translateSlider();
  });
});

/* News */

const newsFreshContainer = document.querySelector(".news__container.fresh");
const newsWeekContainer = document.querySelector(".news__container.week");
const newsColumns = document.querySelectorAll(".news__container__column");
const newsFresh = document.querySelector(".news-fresh");
const newsWeek = document.querySelector(".news-week");
const closeNewsModal = document.querySelector(".modal-close");
const newsModal = document.querySelector(".modal-news");

let newsFilter = (newsCategory, newsContainer) => {
  newsContainer.innerHTML = newsCategory
    .map((news) => {
      return `<div class="news__container__column">${news
        .map((column) => {
          return `<div class="news__container__column__item">
                   <img class="news-img"
                     src="${column.img}" alt="${column.alt}" loading="lazy"
                   />
                 <div class="news-title">
                   <h4>${column.genre}</h4>
                   <h3>${column.title}</h3>
                 </div>
               </div>`;
        })
        .join("")}</div>`;
    })
    .join("");
};

let newsOnRender = () => {
  newsFilter(freshData, newsFreshContainer);
  newsFilter(weekData, newsWeekContainer);
  newsFresh.classList.add("active");
  newsFreshContainer.classList.add("active");
};

newsOnRender();

let activeFilter = "fresh";
newsFresh.addEventListener("click", () => {
  if (activeFilter == "week") {
    newsWeek.classList.remove("active");
    newsFresh.classList.add("active");
    newsFreshContainer.classList.add("active");
    newsWeekContainer.classList.remove("active");
    activeFilter = "fresh";
  }
});
newsWeek.addEventListener("click", () => {
  if (activeFilter == "fresh") {
    newsFresh.classList.remove("active");
    newsWeek.classList.add("active");
    newsFreshContainer.classList.remove("active");
    newsWeekContainer.classList.add("active");
    activeFilter = "week";
  }
});

let newsItem = document.querySelectorAll(".news__container__column__item");

newsItem.forEach((item) => {
  item.addEventListener("click", () => {
    newsModal.children[0].children[0].textContent =
      item.children[1].children[1].innerHTML;
    newsModal.children[0].children[2].src = item.children[0].src;
  });
});

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".video-modal") ||
    e.target.matches(".video-modal__close h3")
  ) {
    stopVideo();
  } else if (
    e.target.matches(".modal-news") ||
    e.target.matches(".modal-close")
  ) {
    newsModal.classList.remove("active");
  } else if (e.target.matches(".news-img")) {
    newsModal.classList.add("active");
  }
});

/* Songs */

const music = document.querySelector("audio");
const musicList = document.querySelector(".music__list");

musicList.innerHTML = songsData
  .map((song) => {
    return `<div class="frame">
            <div id=${song.id} class="music__list__song">
              <div class="song-number"><p>${song.id}</p></div>
              <div class="song-play-btn pause">
                <span></span>
                <span></span>
              </div>
              <div class="song-name"><h3>${song.name}</h3></div>
              <div class="song-artist"><p>${song.artist}</p></div>
              <div class="song-equalizer">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <div class="song-length"><p>${song.duration}</p></div>
            </div>
          </div>`;
  })
  .join("");

const songs = document.querySelectorAll(".music__list__song");
const bars = document.querySelectorAll(".bar");
let songLength = document.querySelector(".song-length");
const playerTitle = document.querySelector(".player__description__title");
const playerPanel = document.querySelector(".player");
const playerCover = document.querySelector(".player-cover");
const playController = document.querySelector(".playBtn");
const prevController = document.querySelector(".prevBtn");
const nextController = document.querySelector(".nextBtn");
const closeController = document.querySelector(".closeBtn");

let playing = false;
let playerActive = false;

let onPause = () => {
  playing = true;
  music.play();
};

let onPlay = () => {
  playing = false;
  music.pause();
};

nextController.addEventListener("click", () => {
  if (parseInt(music.id) < songsData.length) {
    let nextSong = parseInt(music.id) + 1;
    setMusic(nextSong);
    onPause();
  } else {
    setMusic(1);
    onPause();
  }
});

prevController.addEventListener("click", () => {
  if (parseInt(music.id) > 1) {
    let nextSong = parseInt(music.id) - 1;
    setMusic(nextSong);
    onPause();
  } else {
    setMusic(songsData.length);
    onPause();
  }
});

closeController.addEventListener("click", () => {
  playerActive = false;
  playerPanel.classList.remove("active");
});

let equalizerOn = (e) => {
  songs.forEach((song) => {
    song.children[1].classList.add("pause");
    if (song.id == Number(e.srcElement.id)) {
      bars.forEach((bar) => {
        bar.classList.remove("active");
      });
      let equalizer = song.children[4].querySelectorAll(".bar");
      equalizer.forEach((item) => {
        item.classList.add("active");
      });
      song.children[1].classList.remove("pause");
      playController.src = "./assets/img/circle-pause-solid.svg";
      playController.title = "Pause";
    }
  });
  songsData.forEach((songObj) => {
    if (songObj.id == Number(e.srcElement.id)) {
      playerTitle.children[0].textContent = songObj.artist;
      playerTitle.children[1].textContent = songObj.name;
      playerCover.src = songObj.cover;
    }
  });
};

let pauseOn = (e) => {
  songs.forEach((song) => {
    if (song.id == Number(e.srcElement.id)) {
      let equalizer = song.children[4].querySelectorAll(".bar");
      equalizer.forEach((item) => {
        item.classList.remove("active");
      });
      song.children[1].classList.add("pause");
      playController.src = "./assets/img/circle-play-solid.svg";
      playController.title = "Play";
    }
  });
};

let stopAnimation = () => {
  songs.forEach((song) => {
    song.children[1].classList.add("pause");
  });
  bars.forEach((bar) => {
    bar.classList.remove("active");
  });
};

music.addEventListener("canplay", equalizerOn);
music.addEventListener("ended", stopAnimation);
music.addEventListener("pause", pauseOn);
music.addEventListener("play", equalizerOn);

songs.forEach((song) => {
  song.addEventListener("click", () => {
    if (Number(music.id) != song.id) {
      songsData.map((item) => {
        if (item.id == song.id) {
          setMusic(song.id);
        }
      });
      if (!playerActive) {
        playerActive = true;
        playerPanel.classList.add("active");
      }
      if (playing) {
        onPause();
      } else {
        onPause();
      }
      return;
    }
    if (Number(music.id) == song.id) {
      if (playing) {
        onPlay();
      } else {
        onPause();
      }
    }
  });
});

let setMusic = (id) => {
  songsData.map((song) => {
    if (song.id == id) {
      music.src = song.path;
      music.id = song.id;
    }
  });
};

/* Controls */

const progressBar = document.querySelector(".progress");
let progressInner = document.querySelector(".progress-inner");
let songCurrentTime = document.getElementById("current-time");
let songDuration = document.getElementById("song-duration");
const volumeBtn = document.querySelector(".volumeBtn");
const volumeProgress = document.querySelector(".progress-volume");
const volumeProgressInner = document.querySelector(".progress-volume__inner");

playController.addEventListener("click", () => {
  if (!playing) {
    playing = true;
    music.play();
  } else {
    playing = false;
    music.pause();
  }
});

let time = (event) => {
  let { currentTime, duration } = event.srcElement;
  /* Current */

  let currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  if (currentSeconds) {
    songCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
  }

  /* Duration */
  let durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  if (durationSeconds) {
    songDuration.textContent = `${durationMinutes}:${durationSeconds}`;
  }
  progressInner.style.width = `${(currentTime / duration) * 100}%`;
};

let setCurrentTime = (e) => {
  music.currentTime = (e.offsetX / progressBar.clientWidth) * music.duration;
};

let setVolume = (e) => {
  volumeProgressInner.style.width = `${e.offsetX}px`;
  music.volume = e.offsetX / volumeProgress.clientWidth;
};

let currentVolume;
volumeBtn.addEventListener("click", () => {
  if (music.volume) {
    currentVolume = music.volume;
    music.volume = 0;
    volumeProgressInner.style.width = `0%`;
    volumeBtn.src = "./assets/img/volume-off-solid.svg";
    return;
  } else {
    music.volume = currentVolume;
    volumeProgressInner.style.width = `${currentVolume * 100}%`;
    volumeBtn.src = "./assets/img/volume-high-solid.svg";
  }
});

volumeProgress.addEventListener("click", setVolume);
progressBar.addEventListener("click", setCurrentTime);
music.addEventListener("timeupdate", time);

/* Video */

const slider = document.querySelector(".video__carousel__inner");

slider.innerHTML = videosData
  .map((video) => {
    return `<div class="video__carousel__inner__item">
              <div id="${video.id}" class="video-promo">
                <img src="${video.img}" alt="${video.genre}" loading="lazy" />
                <div class="videoBtn">
                  <span></span>
                </div>
              </div>
              <div class="video-title">
                <h4>${video.genre}</h4>
                <h3>
                  ${video.title}
                </h3>
              </div>
            </div>`;
  })
  .join("");

const vidModal = document.querySelector(".video-modal");
const carousel = document.querySelector(".video__carousel");
const carouselItem = document.querySelector(".video__carousel__inner__item");
const videoPromo = document.querySelectorAll(".video-promo");
const iFrame = document.getElementById("youtube");

let stopSong = () => {
  playing = playerActive = false;
  music.pause();
  songs.forEach((song) => {
    song.addEventListener("click", () => {});
    song.children[1].classList.add("pause");
  });
  bars.forEach((bar) => {
    bar.classList.remove("active");
  });
  playController.src = "./assets/img/circle-play-solid.svg";
  playerPanel.classList.remove("active");
};

videoPromo.forEach((btn) => {
  btn.addEventListener("click", () => {
    videosData.map((video) => {
      if (video.id == btn.id) {
        iFrame.src = video.path;
      }
    });
    iFrame.classList.add("active");
    stopSong();
    vidModal.classList.add("active");
    setTimeout(() => {
      body.classList.add("noscroll");
    }, 300);
  });
});

let stopVideo = () => {
  iFrame.classList.remove("active");
  let url = iFrame.getAttribute("src");
  iFrame.setAttribute("src", "");
  iFrame.setAttribute("src", url);
  vidModal.classList.remove("active");
  body.classList.remove("noscroll");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    e.preventDefault();
    stopVideo();
  }
});

// carousel
let padding = 50;
let scrollPerClick = carouselItem.clientWidth + padding;

let checkScrollSize = () => {
  scrollPerClick = carouselItem.clientWidth + padding;
};

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    checkScrollSize();
  }
});

let scrollAmount = 0;

let sliderScrollLeft = () => {
  slider.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
};

let sliderScrollRight = () => {
  if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
    slider.scroll({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
};

/* Bands */

const bandCards = document.querySelector(".bands__container__cards");
const promo = document.querySelector(".bands__container__promo");
const title = document.querySelector(".promo-title");
const author = document.querySelector(".author");

bandCards.innerHTML = bandsData
  .map((arr) => {
    return `<div id=${arr.id} class="bands__container__cards__card">
      <h3>
        ${arr.title}
      </h3>
      <div class="author">
        <p>${arr.author}</p>
        <p>${arr.time}</p>
      </div>
    </div>`;
  })
  .join("");

const bandCard = document.querySelectorAll(".bands__container__cards__card");
bandCard.forEach((card) => {
  card.addEventListener("click", () => {
    bandCard.forEach((item) => {
      item.classList.remove("active");
    });
    card.classList.add("active");
    bandsData.map((obj) => {
      if (obj.id === card.id) {
        promo.style.backgroundImage = `url(${obj.img})`;
        title.children[0].innerHTML = obj.title;
      }
    });
  });
});

let activeBand = () => {
  bandCard.forEach((item) => {
    if (item.id == "hu") {
      item.classList.add("active");
    }
  });
};
activeBand();

/* More News  */

const moreNews = document.querySelector(".more__container");

moreNews.innerHTML = moreNewsData
  .map((arr) => {
    return `<div class="more__container__item">
            <img
              src="${arr.img}" alt="${arr.name}" loading="lazy"
            />
            <h4>${arr.genre}</h4>
            <h3>
              ${arr.title}
            </h3>
          </div>`;
  })
  .join("");

/* Scroll up arrow */

const offset = 400;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//update Dashoffset

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};
// onScroll
window.addEventListener("scroll", () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});
// click
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
