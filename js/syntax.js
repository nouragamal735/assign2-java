
    var quotes = [
      {quote:"“Be yourself; everyone else is already taken.”",
                   author: "― Oscar Wilde"}, 
    {quote: "“So many books, so little time.”",
     author:"― Frank Zappa" },
   {quote : "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero"},
   {quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
   author:" ― Bernard M. Baruch"},
   {quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author:" ― Dr. Seuss"},
   {quote : "“You only live once, but if you do it right, once is enough.”" ,
    author : "― Mae West"}
 ]
//  function getRandomQuote(){
//  for (var i=0; i <quotes.length; i++){
//  return quotes[i].quote;
//  var x =quotes[i].quote;
//  document.getElementById("demo").innerHTML= x;
//  }
//  getRandomQuote();
// }
 function getRandomQuote(){
    var quotesTotal =Math.round(Math.random()*quotes.length);
   
    document.getElementById("demo").innerHTML= (quotes[quotesTotal].quote);
    document.getElementById("auth").innerHTML= (quotes[quotesTotal].author)
 }
