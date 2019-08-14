

// პირველი გვერდი არჩევა
$(document).ready(function() {
  $("#Layer_1").click(function() {
    $("#up1_1").toggle(500)
  });
});

// არჩევანი
// var display = document.getElementById("quoteDisplay");
// var quote;
// function choose1i() {
//   quote = Math.floor(Math.random() * 50);
//   display.innerHTML = quotes[quote];
// }
// function bestQuote() {
//   display.innerHTML = quotes[42];
// }
//
// var quotes = ["შენ გასუქდი 0.2 კილოგრამით" "შენ გასუქდი 0.3 კილოგრამით"]



// მეორე გვერდის არჩევა
$(document).ready(function() {
  $("#Layer_2").click(function() {
    $("#up1_2").toggle(500);
  });
});
// მესამე გვერდის არჩევა
$(document).ready(function() {
  $("#Layer_3").click(function() {
    $("#up1_3").toggle(500);
  });
});
