const quotes = {
  quotes: [
    {
      id: 1,
      category: "Programming",
      quote: "Believe you can and you're halfway there. - Theodore Roosevelt",
    },
    {
      id: 2,
      category: "Dad Jokes",
      quote:
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs!",
    },
    {
      id: 3,
      category: "Puns",
      quote:
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    },
    {
      id: 4,
      category: "Tech",
      quote:
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    },
    {
      id: 5,
      category: "Science",
      quote:
        "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    },
  ],
};

const getJokes = async () => {
  try {
    const myJoke = document.querySelector("#myQuote");
    let x = Math.floor(Math.random() * 5);

    myJoke.innerHTML = quotes.quotes[x].quote;
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
};

window.addEventListener("load", () => {
  getJokes();
});
