/*** Title */
/****************************************
Project 1- A Ramdom Quote Generator 
Coder Name- Ahirina Rivera 
Start- 06/08/2019
End- 06/13/2019
*****************************************/

/*** Array of Objects (Quotes) */
var quotes = [ 
    {
        quote: "Disregard Females, Adquire Currency.", 
        source: "The Notorius B.I.G.",
        citation: "Urbandictionary",
        year: "1995.", 
    },
    {
        quote: " I'm Not A Great Programmer, I'm Just A Good Programmer With Great Habits.",
        source: "Kent Beck.",
        citation: "Goodreads",
        year: "2012.", 
    },
    {
        quote: "Bad Programmers Worry About The Code. Good Programmers Worry About The Data Structures And Their Relationships.",
        source: "Linus Torvalds",
        citation: "Quotefancy",
        year: "2006.",
    },
    {
        quote: "Every Time You Fall Down, It Gives You An Opportunity To Question Yourself, Question Your Integrity. It's Not About The Actual Failure Itself — It's How You Respond To It.",
        source: "Abby Wambach",
        citation: "Cosmopolitan",
        year: "2009.",
    },
    {
        quote: "One Good Thing About Music, When It Hits You, You Feel No Pain.",
        source: "Bob Marley",
        citation: "Cmuse",
        year: "1976.",
    }
];
console.log ()

/*** Function That Gets Random Quote */
function getRandomQuote () {
    
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];

if(random === currentNumber) {
    random;
}
else {
    currentNumber = random;
}
return random
};
    

/*** Function That Prints Quotes & Gets A Random Color Background */
function printQuote () 
{ 
    var htmlString = "";
    var randomQuote = getRandomQuote(quotes);
    htmlString += '<p class="quote">'  + randomQuote.quote + '</p>';
    htmlString += '<p class="source">' + randomQuote.source; 
    if(randomQuote.citation) {
        htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year) {
        htmlString += '<span class ="year">' + randomQuote.year + '</span>'; 
    }
    htmlString += '</p>';  
    document.getElementById('quote-box').innerHTML = htmlString;
    
    random_bg_color();
 };

/*** Gives A Random Color Backgroud */
function random_bg_color() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + red + ','+ green + ','+ blue +")";
    document.body.style.background = bgColor;
};

printQuote(); 
setInterval(function(){ printQuote() }, 25000);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
