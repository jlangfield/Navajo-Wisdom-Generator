const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
// getQuotes();
newQuote();


// To display duplicates in console

function findDuplicates(array) {
    const seen = new Map();
    const duplicates = [];

    for (const quote of array) {
        const key = `${quote.text.trim().toLowerCase()}|${quote.author.trim().toLowerCase()}`;
        
        if (seen.has(key)) {
            // Duplicate found, add both the current and previous objects to duplicates array
            duplicates.push(seen.get(key));
            duplicates.push(quote);
        } else {
            seen.set(key, quote);
        }
    }

    return duplicates;
}

// Update 'localQuotes' number to show duplicates for each array

const duplicateQuotes = findDuplicates(localQuotes);

if (duplicateQuotes.length > 0) {
    console.log('Duplicates found:');
    duplicateQuotes.forEach((quote, index) => {
        console.log(`Duplicate ${index + 1}:`);
        console.log(quote);
        console.log('---');
    });
} else {
    console.log('No duplicates found in the array.');
}
