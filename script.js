// all movies
const trending = [
  {
    title: "Tiger 3",
    releaseDate: "2023-11-15",
    description:
      "If we treat others kindly we will receive kindness whereas if we are hurtful and deceiving to the people around us we might also end up getting hurt and deceived like the tiger.",
    img: "./images/tiger3.jpg",
    trailer: "./tiger3-trailer.mp4",
  },
  {
    title: "Jawan",
    releaseDate: "2023-09-07",
    description:
      " A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
    img: "./images/jawan.jpg",
    trailer: "./jawan-trailer.mp4",
  },
  {
    title: "Pathan",
    releaseDate: "2023-01-25",
    description:
      "Indian RAW agent 'Pathaan' (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own.",
    img: "./images/pathan.webp",
    trailer: "./pathan-trailer.mp4",
  },
  {
    title: "Bloody Ishq",
    releaseDate: "2023-10-20",
    description:
      "An Indian couple residing on a remote Scottish island encounters unsettling paranormal disturbances in their home.",
    img: "./images/bloody_ishq.jpg",
    trailer: "./bloody_ishq-trailer.mp4",
  },
  {
    title: "Madgaon Express",
    releaseDate: "2023-12-05",
    description:
      "In 1998 in Mumbai, Dhanush Sawant aka Dodo, Pratik Garodia aka Pinku and Ayush Gupta study in the 10th standard and dream of going to Goa after their board examinations. ",
    img: "./images/madgaon_express.jpg",
    trailer: "./madgaon_express-trailer.mp4",
  },
  {
    title: "Shame",
    releaseDate: "2023-08-30",
    description:
      "A sex addict's carefully cultivated private life falls apart after his sister arrives for an indefinite stay. A sex addict's carefully cultivated private life falls apart after his sister arrives for an indefinite stay.",
    img: "./images/shame.jpg",
    trailer: "./shame-trailer.mp4",
  },
  {
    title: "Home",
    releaseDate: "2023-07-25",
    description:
      "When a misfit alien named Oh (voiced by Jim Parsons) crash lands on Earth, he forms an unlikely friendship with Tip (voiced by Rihanna), an adventurous girl.",
    img: "./images/home.avif",
    trailer: "./home-trailer.mp4",
  },
  {
    title: "Indian 2",
    releaseDate: "2023-06-18",
    description:
      "In the film, Senapathy returns to India from abroad after over two decades to aid a group in dealing with corruption in the country.",
    img: "./images/indian2.jpg",
    trailer: "./indian2-trailer.mp4",
  },
  {
    title: "Crew",
    releaseDate: "2023-05-10",
    description:
      "The film is noted to be a parody of Vijay Mallya owned Kingfisher Airlines, which closed down due to bankruptcy and non-payment of dues and salaries to employees. Crew was announced in November 2022.",
    img: "./images/crew.webp",
    trailer: "./crew-trailer.mp4",
  },
];

// india trending

const india_trending = [
  {
    title: "Bloody Ishq",
    releaseDate: "2023-10-20",
    img: "./images/bloody_ishq.jpg",
    trailer: "./bloody_ishq-trailer.mp4",
  },
  {
    title: "Madgaon Express",
    releaseDate: "2023-12-05",
    img: "./images/madgaon_express.jpg",
    trailer: "./madgaon_express-trailer.mp4",
  },
  {
    title: "Indian 2",
    releaseDate: "2023-06-18",
    img: "./images/indian2.jpg",
    trailer: "./indian2-trailer.mp4",
  },
  {
    title: "Crew",
    releaseDate: "2023-05-10",
    img: "./images/crew.webp",
    trailer: "./crew-trailer.mp4",
  },
];

// more trending

const more_trending = [
  {
    title: "Jawan",
    releaseDate: "2023-09-07",
    img: "./images/jawan.jpg",
    trailer: "./jawan-trailer.mp4",
  },
  {
    title: "Pathan",
    releaseDate: "2023-01-25",
    img: "./images/pathan.webp",
    trailer: "./pathan-trailer.mp4",
  },
  {
    title: "Shame",
    releaseDate: "2023-08-30",
    img: "./images/shame.jpg",
    trailer: "./shame-trailer.mp4",
  },
  {
    title: "Home",
    releaseDate: "2023-07-25",
    img: "./images/home.avif",
    trailer: "./home-trailer.mp4",
  },
];

const CAROUSEL_SPEED = 1;
const CAROUSEL_ITEM_WIDTH = 300;

function initializeCarousel(containerClass, items) {
  const carouselList = document.querySelector(
    `${containerClass} .carousel-list`
  );
  carouselList.innerHTML = "";

  const carouselItems = [...items, ...items];

  carouselItems.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const playButton = document.createElement("span");
    playButton.className = "play-button fa fa-play";
    playButton.setAttribute("data-trailer", item.trailer);

    // Pass the additional movie info to the openModal function
    playButton.addEventListener("click", function () {
      openModal(
        item.trailer,
        item.title,
        item.description || "No description available.", // Provide a default description if not present
        item.releaseDate,
        trending.indexOf(item) + 1
      );
    });

    carouselItem.appendChild(img);
    carouselItem.appendChild(playButton);
    carouselList.appendChild(carouselItem);
  });

  carouselList.style.width = `${CAROUSEL_ITEM_WIDTH * carouselItems.length}px`;

  setupCarouselMovement(containerClass, CAROUSEL_ITEM_WIDTH, items.length);
}

function setupCarouselMovement(containerClass, itemWidth, originalItemsCount) {
  const carouselList = document.querySelector(
    `${containerClass} .carousel-list`
  );
  let x = 0;
  let isPaused = false;

  function move() {
    if (!isPaused) {
      x -= CAROUSEL_SPEED;

      if (Math.abs(x) >= itemWidth * (originalItemsCount + 1)) {
        x = -itemWidth;
        carouselList.style.transform = `translateX(${x}px)`;
        setTimeout(() => {
          carouselList.style.transform = `translateX(0px)`;
          x = -itemWidth;
          CAROUSEL_SPEED = 0;
          setTimeout(() => {
            CAROUSEL_SPEED = originalCarouselSpeed;
          });
        }, 0);
      }

      carouselList.style.transform = `translateX(${x}px)`;
    }
    requestAnimationFrame(move);
  }

  requestAnimationFrame(move);

  const carouselSlider = document.querySelector(containerClass);
  carouselSlider.addEventListener("mouseover", () => (isPaused = true));
  carouselSlider.addEventListener("mouseout", () => (isPaused = false));
}

function openModal(trailerSrc, title, description, releaseDate, trendingNumber) {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const modalContent = document.querySelector(".modal-content");

  // Update modal content
  modalVideo.src = trailerSrc;
  document.getElementById("movie-title").textContent = title;
  document.getElementById("movie-description").textContent = description;
  document.getElementById("release-date").textContent = releaseDate;
  document.getElementById("trending-number").textContent = `#${trendingNumber} IN INDIA`;

  // Add event listener to play trailer on modal open
  modalContent.addEventListener("click", function () {
    modalVideo.play();
  });

  modal.style.display = "flex"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");

  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}

document.querySelector(".close-button").addEventListener("click", closeModal);
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const themeButton = document.querySelector(".theme-toggle");
  themeButton.textContent = document.body.classList.contains("dark-theme")
    ? "🌞"
    : "🌙";
}

function initializePage() {
  initializeCarousel(".carousel_trending", trending);
}

// Sorting function
function sortMovies(movies, criteria) {
  switch (criteria) {
    case "release-date-asc":
      return movies.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    case "release-date-desc":
      return movies.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    case "alphabetical-asc":
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    case "alphabetical-desc":
      return movies.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return movies; // No sorting
  }
}

function updateCarousel(category, sortCriteria) {
  let moviesToDisplay;

  switch (category) {
    case "india":
      moviesToDisplay = india_trending;
      break;
    case "more":
      moviesToDisplay = more_trending;
      break;
    default:
      moviesToDisplay = trending;
      break;
  }

  moviesToDisplay = sortMovies(moviesToDisplay, sortCriteria);
  initializeCarousel(".carousel_trending", moviesToDisplay);
}

document
  .getElementById("filter-select")
  .addEventListener("change", function () {
    const selectedFilter = this.value;
    const selectedSort = document.getElementById("sort-select").value;
    updateCarousel(selectedFilter, selectedSort);
  });

document.getElementById("sort-select").addEventListener("change", function () {
  const selectedSort = this.value;
  const selectedFilter = document.getElementById("filter-select").value;
  updateCarousel(selectedFilter, selectedSort);
});

window.onload = initializePage;

const shows = [
  {
    title: "Gum Hai Kisi Ke Pyaar Mein",
    description: "A gripping tale of love and relationships.",
    image: "./images/gum_hai.jpg",
  },
  {
    title: "Anupama",
    description: "A story of a woman's journey to find herself.",
    image: "./images/anupama.jfif",
  },
  {
    title: "Mehndi Hai Rachne Wali",
    description: "A vibrant drama revolving around family.",
    image: "./images/mehandi.jpg",
  },
];

function createShowCard(show) {
  const card = document.createElement("div");
  card.className = "show-card";

  const img = document.createElement("img");
  img.src = show.image;
  img.alt = show.title;

  const title = document.createElement("h4");
  title.textContent = show.title;

  const description = document.createElement("p");
  description.textContent = show.description;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);

  return card;
}

function displayShows() {
  const container = document.getElementById("show-container");
  shows.forEach((show) => {
    const card = createShowCard(show);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayShows);

document.querySelectorAll(".star-rating").forEach((starRating) => {
  const stars = starRating.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const ratingValue = star.getAttribute("data-value");
      starRating.setAttribute("data-rating", ratingValue);

      stars.forEach((s) => {
        if (s.getAttribute("data-value") <= ratingValue) {
          s.classList.add("filled");
        } else {
          s.classList.remove("filled");
        }
      });
    });
  });
});

// watchlist
let watchlist = [];

function updateWatchlistDisplay() {
  const watchlistContainer = document.getElementById("watchlist-container");
  const emptyMessage = document.getElementById("empty-message");

  watchlistContainer.innerHTML = "";
  if (watchlist.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none"; // Hide the empty message if the watchlist is not empty
    watchlist.forEach((item, index) => {
      const listItem = document.createElement("div");
      watchlistContainer.style.display = "flex";
      watchlistContainer.style.flexDirection = "row";
      watchlistContainer.style.justifyContent = "flex-start";
      watchlistContainer.style.marginLeft = "36px";

      const trailerVideo = document.createElement("video");
      trailerVideo.width = 250;
      trailerVideo.height = 130;
      trailerVideo.controls = true;
      trailerVideo.autoplay = true;
      trailerVideo.loop = true;
      trailerVideo.muted = true;
      const trailerSource = document.createElement("source");
      trailerSource.src = item.trailer;
      trailerSource.type = "video/mp4";
      trailerVideo.appendChild(trailerSource);
      listItem.appendChild(trailerVideo);

      listItem.addEventListener("mouseover", function () {
        const movieTitle = document.createElement("p");
        movieTitle.textContent = item.title;
        listItem.appendChild(movieTitle);
      });
      listItem.addEventListener("mouseout", function () {
        listItem.removeChild(listItem.querySelector("p"));
      });

      watchlistContainer.appendChild(listItem);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const watchlistButtons = document.querySelectorAll(".watchlist-btn");

  Array.prototype.forEach.call(watchlistButtons, function (button) {
    button.addEventListener("click", function (event) {
      const movie = this.closest(".featurette");
      const movieTitle = movie.querySelector("h4").textContent;
      const movieTrailer = movie
        .querySelector(".featurette-video video source")
        .getAttribute("src");

      // Toggle button text and update watchlist
      if (this.textContent === " + Add to Watchlist") {
        this.textContent = " - Remove from Watchlist";
        watchlist.push({ title: movieTitle, trailer: movieTrailer }); // Add movie to watchlist
      } else {
        this.textContent = " + Add to Watchlist";
        watchlist = watchlist.filter((item) => item.title !== movieTitle); // Remove movie from watchlist
      }

      updateWatchlistDisplay();
    });
  });
});

