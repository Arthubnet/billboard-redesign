/* Navbar */

const navSlide = () => {
  let burger = document.querySelector(".hero__navbar-burger");
  let navbar = document.querySelector(".hero__navbar-lists");
  let navLinks = document.querySelectorAll(".hero__navbar-lists li");

  let burgerToggle = () => {
    navbar.classList.toggle("nav-active");
    burger.classList.toggle("active");
  };
  burger.addEventListener("click", () => {
    burgerToggle();
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 15 + 0.5
        }s`;
      link.addEventListener("click", () => {
        burgerToggle();
      });
    });
  });
};

navSlide();

const subscribeBtn = document.querySelector(".subscribe-btn2");
let subscribeField = document.getElementById("input");

subscribeBtn.addEventListener("click", () => {
  subscribeField.value = "";
});

/* News */

const newsContainer = document.querySelector(".news__container");
const newsColumns = document.querySelectorAll(".news__container__column");
const freshFilter = document.querySelector(".news-fresh");
const weekFilter = document.querySelector(".news-week");

let newsFilter = (filter) => {
  newsContainer.innerHTML = filter
    .map((news) => {
      return `<div class="news__container__column">${news
        .map((column) => {
          return `<div class="news__container__column__item">
                 <div>
                   <img
                     src="${column.img}" alt="${column.alt}" loading="lazy"
                   />
                 </div>
                 <div class="news-title">
                   <h3>${column.genre}</h3>
                   <h2>${column.title}</h2>
                 </div>
               </div>`;
        })
        .join("")}</div>`;
    })
    .join("");
};

let newsOnRender = () => {
  newsFilter(freshData);
  freshFilter.classList.add("active");
};

newsOnRender(freshData);

freshFilter.addEventListener("click", () => {
  newsFilter(freshData);
  weekFilter.classList.remove("active");
  freshFilter.classList.add("active");
});
weekFilter.addEventListener("click", () => {
  newsFilter(weekData);
  freshFilter.classList.remove("active");
  weekFilter.classList.add("active");
});

/* Songs */

const music = document.getElementById("audio");
const musicList = document.querySelector(".music__list");

musicList.innerHTML = songsData
  .map((song) => {
    return `<div class="frame">
            <div id="${song.id}" class="music__list__song">
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

let currentSong = {};
let playing = false;
let playerActive = false;

let onPause = (song, equalizer) => {
  playing = true;
  song.children[1].classList.remove("pause");
  equalizer.forEach((bar) => {
    bar.classList.add("active");
  });
  playController.src = "./assets/img/circle-pause-solid.svg";
  music.play();
};

let onPlay = (song, equalizer) => {
  playing = false;
  song.children[1].classList.add("pause");
  equalizer.forEach((item) => {
    item.classList.remove("active");
  });
  playController.src = "./assets/img/circle-play-solid.svg";
  music.pause();
};
songs.forEach((song) => {
  song.addEventListener("click", () => {
    let equalizer = song.children[4].querySelectorAll(".bar");
    if (currentSong.id != song.id) {
      bars.forEach((bar) => {
        bar.classList.remove("active");
      });
      songsData.map((item) => {
        if (item.id == song.id) {
          setMusic(item.path);
          currentSong = item;
          playerTitle.children[0].innerHTML = currentSong.artist;
          playerTitle.children[1].innerHTML = currentSong.name;
          playerCover.src = currentSong.cover;
        }
      });
      if (!playerActive) {
        playerActive = true;
        playerPanel.classList.add("active");
      }
      if (playing) {
        songs.forEach((btn) => {
          btn.children[1].classList.add("pause");
        });
        onPause(song, equalizer);
      } else {
        onPause(song, equalizer);
      }
      return;
    }
    if (currentSong.id == song.id) {
      if (playing) {
        onPlay(song, equalizer);
      } else {
        onPause(song, equalizer);
      }
    }
  });
});

/* Controls */

const progressBar = document.querySelector(".progress");
let progressInner = document.querySelector(".progress-inner");
let songCurrentTime = document.getElementById("current-time");
let songDuration = document.getElementById("song-duration");

const prevController = document.querySelector(".prevBtn");
const nextController = document.querySelector(".nextBtn");
const volumeBtn = document.querySelector(".volumeBtn");
const volumeProgress = document.querySelector(".progress-volume");
const volumeProgressInner = document.querySelector(".progress-volume__inner");

playController.addEventListener("click", () => {
  if (!playing) {
    playing = true;
    songs.forEach((song) => {
      let equalizer = song.children[4].querySelectorAll(".bar");
      if (song.id == currentSong.id) {
        song.children[1].classList.remove("pause");
        equalizer.forEach((item) => {
          item.classList.add("active");
        });
        playController.src = "./assets/img/circle-pause-solid.svg";
      }
    });
    music.play();
  } else {
    songs.forEach((song) => {
      let equalizer = song.children[4].querySelectorAll(".bar");
      song.children[1].classList.add("pause");
      equalizer.forEach((item) => {
        item.classList.remove("active");
      });
      playController.src = "./assets/img/circle-play-solid.svg";
    });
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

  let percenatage = (currentTime / duration) * 100;
  progressInner.style.width = `${percenatage}%`;
};

let onProgress = (e) => {
  progressInner.style.width = `${e.offsetX}px`;
  let percent = (e.offsetX / e.srcElement.clientWidth) * 100;
  music.currentTime = (percent / 100) * music.duration;
};

let onVolumeProgress = (e) => {
  volumeProgressInner.style.width = `${e.offsetX}px`;
  let percent = (e.offsetX / e.srcElement.clientWidth) * 100;
  music.volume = percent / 100;
};

let stopAnimation = () => {
  songs.forEach((song) => {
    song.children[1].classList.add("pause");
  });
  bars.forEach((bar) => {
    bar.classList.remove("active");
  });
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
music.addEventListener("ended", stopAnimation);
volumeProgress.addEventListener("click", onVolumeProgress);
progressBar.addEventListener("click", onProgress);
progressBar.addEventListener("grab", onProgress);
music.addEventListener("timeupdate", time);

let setMusic = (path) => {
  music.src = path;
};

/* Video */

const slider = document.querySelector(".video__carousel__inner");

slider.innerHTML = videosData
  .map((video) => {
    return `<div class="video__carousel__inner__item">
              <div class="video-promo">
                <img src="${video.img}" alt="${video.genre}" loading="lazy" />
                <div class="videoBtn">
                  <span></span>
                </div>
              </div>
              <div class="video-title">
                <h3>${video.genre}</h3>
                <h2>
                  ${video.title}
                </h2>
              </div>
            </div>`;
  })
  .join("");

const vidModal = document.querySelector(".video-modal");
const body = document.body;
const carousel = document.querySelector(".video__carousel");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");
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
    iFrame.classList.add("active");
    stopSong();
    vidModal.classList.add("active");
    setTimeout(() => {
      body.classList.add("noscroll");
    }, 300);
    vidModal.addEventListener("transitionend", playVideo());
    vidModal.removeEventListener("transitionend", playVideo());
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
    stopVideo();
  }
});

vidModal.children[1].addEventListener("click", () => {
  stopVideo();
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
      <h2>
        ${arr.title}
      </h2>
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
        author.children[0].innerHTML = obj.author;
        author.children[1].innerHTML = obj.time;
        title.children[1].innerHTML = obj.title;
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
            <h3>${arr.genre}</h3>
            <h2>
              ${arr.title}
            </h2>
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
