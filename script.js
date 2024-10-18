// import quotes from "./content/quotes.js";
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

const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Your time is limited, don't waste it living someone else's life.",
  "It is not our abilities that show what we truly are… it is our choices. - Harry Potter and the Chamber of Secrets, J.K. Rowling",
  "Not all those who wander are lost. - The Fellowship of the Ring, J.R.R. Tolkien",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do or do not. There is no try. - The Empire Strikes Back, Yoda",
  "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven. - Paradise Lost, John Milton",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Oh, The Places You'll Go!, Dr. Seuss",
  "What we achieve inwardly will change outer reality. - Meditations, Marcus Aurelius",
  "It's the possibility of having a dream come true that makes life interesting. - The Alchemist, Paulo Coelho",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The world is a book and those who do not travel read only one page. - St. Augustine",
  "Don't cry because it's over, smile because it happened. - Dr. Seuss",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Harry Potter and the Prisoner of Azkaban, J.K. Rowling",
  "It does not do to dwell on dreams and forget to live. - Harry Potter and the Philosopher's Stone, J.K. Rowling",
  "To live is the rarest thing in the world. Most people exist, that is all. - The Picture of Dorian Gray, Oscar Wilde",
  "There is some good in this world, and it's worth fighting for. - The Two Towers, J.R.R. Tolkien",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "The best way out is always through. - Robert Frost",
  "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
  "You cannot swim for new horizons until you have courage to lose sight of the shore. - William Faulkner",
  "If you want to fly, you have to give up the things that weigh you down. - Toni Morrison",
  "There are no mistakes, only opportunities. - Tina Fey",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "You can't build a reputation on what you are going to do. - Henry Ford",
  "Act as if what you do makes a difference. It does. - William James",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "If you can dream it, you can do it. - Walt Disney",
  "The secret of getting ahead is getting started. - Mark Twain",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
  "It is never too late to be what you might have been. - George Eliot",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "The best revenge is massive success. - Frank Sinatra",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Limit your 'always' and your 'nevers.' - Amy Poehler",
  "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
  "If you don’t like the road you’re walking, start paving another one. - Dolly Parton",
  "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "You are enough just as you are. - Meghan Markle",
  "Sometimes life is going to hit you in the head with a brick. Don't lose faith. - Steve Jobs",
  "Fall seven times, stand up eight. - Japanese Proverb",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "The only way to achieve the impossible is to believe it is possible. - Alice in Wonderland, Lewis Carroll",
  "You can’t wait for inspiration. You have to go after it with a club. - Jack London",
  "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. - Dr. Seuss",
  "The big lesson in life, baby, is never be scared of anyone or anything. - Frank Sinatra",
  "Life isn't about finding yourself. It's about creating yourself. - George Bernard Shaw",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "You are never too small to make a difference. - Greta Thunberg",
  "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "I can't go back to yesterday because I was a different person then. - Alice in Wonderland, Lewis Carroll",
  "Whatever you are, be a good one. - Abraham Lincoln",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Do what you feel in your heart to be right—for you'll be criticized anyway. - Eleanor Roosevelt",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "It’s no use going back to yesterday, because I was a different person then. - Alice in Wonderland, Lewis Carroll",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
  "You can, you should, and if you’re brave enough to start, you will. - Stephen King",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are the one that possesses the keys to your being. You carry the passport to your own happiness. - Diane von Furstenberg",
  "A goal is not always meant to be reached; it often serves simply as something to aim at. - Bruce Lee",
  "A ship is safe in harbor, but that's not what ships are for. - John A. Shedd",
  "Shoot for the moon. Even if you miss, you'll land among the stars. - Norman Vincent Peale",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "All our dreams can come true, if we have the courage to pursue them. - Walt Disney",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "The only journey is the one within. - Rainer Maria Rilke",
  "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
  "Change the way you look at things and the things you look at change. - Wayne Dyer",
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteContainer = document.getElementById("quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteContainer.textContent = randomQuote;
}

// Call the function to display a random quote when the page loads
window.onload = displayRandomQuote;
