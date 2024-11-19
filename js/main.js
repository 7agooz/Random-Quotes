var quotes = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      writer: "Oscar Wilde",
      pic: "https://images.gr-assets.com/authors/1673611182p5/3565.jpg",
    },
    {
      quote: "“So many books, so little time.”",
      writer: "Frank Zappa",
      pic: "https://images.gr-assets.com/authors/1696236573p5/22302.jpg",
    },
    {
      quote: "“A room without books is like a body without a soul.”",
      writer: "Marcus Tullius Cicero",
      pic: "https://images.gr-assets.com/authors/1197881416p5/13755.jpg",
    },
    {
      quote: "“You only live once, but if you do it right, once is enough.”",
      writer: "Mae West",
      pic: "https://images.gr-assets.com/authors/1198551937p5/259666.jpg",
    },
    {
      quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      writer: "Mahatma Gandhi",
      pic: "https://images.gr-assets.com/authors/1356810912p5/5810891.jpg",
    },
  ];
  
  
  var lastQuote = '';
  function changeQuote() {
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuote);
    lastQuote = randomIndex;
    var randomQuote = quotes[randomIndex];
    var cartona = `
      <div class="pic col-md-6 text-center">
        <img src="${randomQuote.pic}" />
      </div>
      <div class="quotes text-center col-md-6">
        <h3>${randomQuote.quote}</h3>
        <h4>${randomQuote.writer}</h4>
      </div>
    `;
    document.getElementById("demo").innerHTML = cartona;
  }
  

