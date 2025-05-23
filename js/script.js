/***
 * `quotes` array
 * An array of quote objects.
 * Each object contains the following properties:
 * - quote: the text of the quote
 * - source: the name of the person who said the quote
 * - citation (optional): the season or work it comes from
 * - year (optional): the year the quote originated
 * - voice (optional) : which actor does the character's voice
 * - episodes (optional) : total number of character episodes
 ***/

let quotes = [
  {
    quote: "There is always a choice.",
    source: "Viktor",
    citation: "Arcane Season 1",
    year: 2021,
    episodes: 14,
    image: "./img/viktor.png",
  },

  {
    quote: "Sometimes taking a leap forward means leaving a few things behind.",
    source: "Ekko",
    citation: "Arcane Season 2",
    year: 2024,
    image: "./img/ekko.png",
  },

  {
    quote:
      "I never would have given you to them. Not for anything. Don’t cry. You’re perfect.",
    source: "Silco",
    citation: "Arcane Season 1",
    year: 2021,
    image: "./img/silco.png",
  },

  {
    quote: "Always with you, sis.",
    source: "Jinx",
    citation: "Arcane Season 2",
    year: 2024,
    voice: "Ella Purnell",
    episodes: 15,
    image: "./img/jinx.png",
  },

  {
    quote: "We don’t hand over our people.",
    source: "Sevika",
    citation: "Arcane Season 2",
    year: 2024,
    image: "./img/sevika.png",
  },

  {
    quote: "No great science should ever put lives in danger.",
    source: "Heimerdinger",
    citation: "Arcane Season 1",
    year: 2021,
    voice: "Mick Wingert",
    image: "./img/heimerdinger.png",
  },

  {
    quote: "It’s been real, Cupcake. Thanks. For everything.",
    source: "Vi",
    citation: "Arcane Season 1",
    year: 2021,
    voice: "Hailee Steinfield",
    episodes: 16,
    image: "./img/vi.png",
  },

  {
    quote: "There is beauty in imperfections. They made you who you are.",
    source: "Jayce",
    citation: "Arcane Season 2",
    year: 2024,
    voice: "Kevin Alejandro",
    episodes: 17,
    image: "./img/jayce.png",
  },

  {
    quote:
      "You’ve got a good heart. Don’t ever lose it. No matter how the world tries to break you. Protect the family.",
    source: "Vander",
    citation: "Arcane Season 1",
    year: 2021,
    image: "./img/vander.png",
  },

  {
    quote: "Love and legacy are the sacrifices we make for progress.",
    source: "Mel",
    citation: "Arcane Season 1",
    year: 2021,
    episodes: 14,
    image: "./img/mel.png",
  },
];

/***
 * `getRandomQuote` function
 * Selects and returns a random quote object from the `quotes` array.
 * It generates a random index between 0 and quotes.length - 1,
 * then uses it to access and return a quote object.
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/**
 * `printQuote` function
 * Selects a random quote object, builds an HTML string containing the quote and its details,
 * and injects it into the #quote-box element on the page.
 * If the quote object contains a citation or a year, those are conditionally included in the output.
 */
function printQuote() {
  let randomQuote = getRandomQuote();

  /**
   * `colorQuote` function
   * Matches the source of the current random quote to a predefined background gradient.
   * If a match is found, the body's background is updated with the corresponding linear gradient.
   * This visually reinforces the identity of each character from the Arcane universe.
   */

  function colorQuote() {
    let sourceColor = {
      Jinx: "linear-gradient(to right, #3B808D, #C8617A)",
      Silco: "linear-gradient(to right, #A56E45, #1A1A1D)",
      Heimerdinger: "linear-gradient(to right, #97938F, #604D2E)",
      Jayce: "linear-gradient(to right, #B9B295, #7F7348)",
      Sevika: "linear-gradient(to right, #334539, #1A1A18)",
      Viktor: "linear-gradient(to right, #E1D5C9, #060608)",
      Mel: "linear-gradient(to right, #675C2C, #060608)",
      Ekko: "linear-gradient(to right, #F6FFFD, #39403A)",
      Vi: "linear-gradient(to right, #9860A0, #411629)",
      Vander: "linear-gradient(to right, #41422E, #5C1E1E)",
    };

    if (sourceColor[randomQuote.source]) {
      document.body.style.background = sourceColor[randomQuote.source];
    }
  }

  colorQuote();

  let html = `
  <div class="quote-wrapper fade-in">
    <div class="quote-content">
      <img src="${randomQuote.image}" alt="${randomQuote.source}" class="character-img">
      <p class="quote">"${randomQuote.quote}"</p>
    </div>
    <div class="quote-meta">
      <p class="source">
        <strong>${randomQuote.source}, ${randomQuote.citation}, ${randomQuote.year}</strong>`;

  if (randomQuote.voice) {
    html += `<span class="voice"> Voice by : ${randomQuote.voice},</span>`;
  }

  if (randomQuote.episodes) {
    html += `<span> Seen in : ${randomQuote.episodes} episodes.</span>`;
  }
  html += `</p></div>`;
  const quoteBox = document.getElementById("quote-box");

  quoteBox.innerHTML = html;
  const wrapper = quoteBox.querySelector(".quote-wrapper");
  wrapper.classList.remove("fade-in");
  void wrapper.offsetWidth;
  wrapper.classList.add("fade-in");
}
printQuote();

/*
 * Adds a click event listener to the "Show another quote" button.
 * When the button is clicked, the printQuote function is called to display a new random quote.
 */

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

/*
 * Automatically calls the printQuote function every 15 seconds.
 * This keeps the page content dynamic and regularly refreshed.
 */
setInterval(printQuote, 15000);
