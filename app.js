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
                     src="${column.img}" alt="${column.alt}""
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
newsOnRender();

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
              <div class="song-length"><p>${song.duration.time}</p></div>
            </div>
          </div>`;
  })
  .join("");

const songs = document.querySelectorAll(".music__list__song");
const bars = document.querySelectorAll(".bar");

songs.forEach((song, i) => {
  song.addEventListener("click", () => {
    music.pause();
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
    var equalizer = song.children[4].querySelectorAll(".bar");
    if (song.children[1].className.includes("pause")) {
      setMusic(i);
      songs.forEach((btn) => {
        if (!btn.children[1].className.includes("pause")) {
          btn.children[1].classList.add("pause");
        }
      });
      song.children[1].classList.toggle("pause");
      music.play();
      equalizer.forEach((item) => {
        item.classList.add("active");
        if (song.id == 2) {
          setTimeout(() => {
            item.classList.remove("active");
            songs.forEach((btn) => {
              btn.children[1].classList.add("pause");
            });
          }, 255000);
        } else {
          setTimeout(() => {
            item.classList.remove("active");
            songs.forEach((btn) => {
              btn.children[1].classList.add("pause");
            });
          }, 385800);
        }
      });
    } else {
      song.children[1].classList.toggle("pause");
    }
  });
});

let setMusic = (i) => {
  music.src = songsData[i].path;
};

/* Video */

const slider = document.querySelector(".video__carousel__inner");

slider.innerHTML = videosData
  .map((video) => {
    return `<div class="video__carousel__inner__item">
              <div class="video-promo">
                <img src="${video.img}" alt="system" />
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

const videoBtn = document.querySelectorAll(".videoBtn");
const popup = document.querySelector(".popup");
const body = document.body;
const carousel = document.querySelector(".video__carousel");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

let playVideo = () => {
  document.querySelector(".video").play();
};
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
    setTimeout(() => {
      body.classList.add("noscroll");
    }, 300);
    popup.addEventListener("transitionend", playVideo());
    popup.removeEventListener("transitionend", playVideo());
  });
});

let stopVideo = () => {
  popup.classList.remove("active");
  body.classList.remove("noscroll");
  document.querySelector(".video").pause();
  document.querySelector(".video").currentTime = 0;
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    stopVideo();
  }
});

popup.children[1].addEventListener("click", () => {
  stopVideo();
});

// carousel
let padding = 50;
let scrollPerClick =
  document.querySelector(".video__carousel__inner__item").clientWidth + padding;

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
              src="${arr.img}" alt="${arr.name}"
            />
            <h3>${arr.genre}</h3>
            <h2>
              ${arr.title}
            </h2>
          </div>`;
  })
  .join("");
