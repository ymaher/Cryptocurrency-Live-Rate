var btn = document.getElementById('btn');
var coinCointainer = document.getElementById('coinCointainer');
btn.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    var myData = JSON.parse(myRequest.responseText);
    createHTML(myData);
  };
  myRequest.send();
});

function createHTML(data){
  var myString = ""

  myString += "<p> The Current Price of Ripple is: " + data.prices.XRP + "</p>";
  myString += "<p> The lowest Price of Ripple in 24 hrs: " + data.stats.XRP.min_24hrs + "</p>";
  myString += "<p> The highest Price of Ripple in 24 hrs: " + data.stats.XRP.max_24hrs + "</p>";
  myString += "<p> The last trade Price of Ripple is: " + data.stats.XRP.last_traded_price + "</p><br><br>";
  coinCointainer.insertAdjacentHTML('beforeend',myString);
}
