// import quotes from "./content/quotes.js";
import quotes from "./content/quotes.js";

function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to avoid delay

// Function to display a random quote
function displayRandomQuote() {
  console.log("displayRandomQuote called");
  const quoteContainer = document.getElementById("quote");
  console.log("quotes:", quotes); // Added console.log statement
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log("randomQuote:", randomQuote);
  quoteContainer.textContent = randomQuote;
}

// Call the function to display a random quote when the page loads
document.addEventListener("DOMContentLoaded", displayRandomQuote);

// Get the buttons and add event listeners
const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");
const defaultThemeButton = document.getElementById("default-theme");

lightThemeButton.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  localStorage.setItem("theme", "light-theme");
});

darkThemeButton.addEventListener("click", () => {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark-theme");
});

defaultThemeButton.addEventListener("click", () => {
  document.body.classList.remove("light-theme");
  document.body.classList.remove("dark-theme");
  localStorage.setItem("theme", "");
});

// Get the dropdown and add event listener
const backgroundColorDropdown = document.getElementById("background-color");

backgroundColorDropdown.addEventListener("change", () => {
  document.body.style.backgroundColor = backgroundColorDropdown.value;
  localStorage.setItem("backgroundColor", backgroundColorDropdown.value);
});

// Load theme and background color from local storage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }

  const savedBackgroundColor = localStorage.getItem("backgroundColor");
  if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
    backgroundColorDropdown.value = savedBackgroundColor;
  }
});
