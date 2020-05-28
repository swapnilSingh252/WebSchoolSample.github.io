
function count(e_id,date,l_id){
  // Set the date we're counting down to
  var countDownDate = new Date(date).getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById(e_id).innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    document.getElementById(l_id).style.backgroundImage = "linear-gradient(to right, #3c00ff, #0071ff, #009bff, #00baee, #30d3d0)";
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(e_id).innerHTML = "Deadline Finished!";
      document.getElementById(l_id).style.backgroundImage = "linear-gradient(to right top, #ff0000, #f51414, #ea2020, #df2929, #d33030)";
    }

  }, 1000);
  }
  count("li1","May 29, 2020 12:00:00","l1");
  count("li2","May 19, 2020 12:00:00","l2");
  count("li3","May 17, 2020 12:00:00","l3");
  count("li4","May 25, 2020 12:00:00","l4");
  count("li5","Jun 21, 2020 12:00:00","l5");
  count("li6","May 18, 2020 12:00:00","l6");
  count("li7","May 22, 2020 12:00:00","l7");
  count("li8","May 30, 2020 12:00:00","l8");
  
  count("v1","May 22, 2020 12:00:00");
  count("v2","May 25, 2020 12:00:00");
  
//   var elemSub = document.querySelector("#s");
//   var t= document.getElementById(e_id);
//   elemSub.addEventListener("click",function(){
//   t.innerHTML="Submitted";
//   console.log(t);
  
// })