
    var quotes = [{quote:"“Be yourself; everyone else is already taken.”",
                   "author": "― Oscar Wilde"}, 
    {quote: "“So many books, so little time.”", "author":"― Frank Zappa" },
   {quote : "“A room without books is like a body without a soul.”", "author": "― Marcus Tullius Cicero"},
   {quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","author":" ― Bernard M. Baruch"},
   {quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", "author":" ― Dr. Seuss"},
   {quote : "“You only live once, but if you do it right, once is enough.”" , "author" : "― Mae West"}
 ]
 function getRandomQuote(){
    var quotesTotal =(Math.random()*quotes.length);
    document.getElementById("demo").innerHTML= quotes[quotesTotal].quote;
 }
// }
// for( var i=0; i<quotes.length ; i++){
//  document.getElementById("demo").innerHTML= ` <h4>${quotes[i].quote}</h4>`;

// }
