

// პირველი გვერდი არჩევა
$(document).ready(function() {
  $("#Layer_1").click(function() {
    $("#up1_1").toggle(500)
  });
    $("#up1_1").animate({height:'100vh'});
});

$(document).ready(function(){
  $(".button1").click(function() {
    $("#show1-1").show(0);
    $("#show1").hide(0);
    $("show1-2").hide(0);
  });
});

$(document).ready(function(){
  $(".button2").click(function() {
    $("#show1-2").show(0);
    $("#show1").hide(0);
    $("#show1-1").hide(0);
  });
});



// არჩევანი

// var display = document.getElementById("quoteDisplay1");
// var quote;
// function button1() {
//   quote = Math.floor(Math.random() * 50);
//   display.innerHTML = quotes[quote];
// });
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
