const changeColor = document.getElementById("startButton");
const green = "#00ff00";
const red = "#ff0000";
const text = document.getElementById("text");

//source https://www.w3schools.com/howto/howto_js_countdown.asp
function timer(waitSeconds) {
  var countDownDate = new Date().getTime() + 1000 * waitSeconds;
  chrome.storage.local.set({ countDownDate });

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    // Display the result in the element with id="demo"
    text.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      text.innerHTML = "EXPIRED";
      changeGreen();
    }
  }, 1000);
}

main();
function main() {
    
  chrome.storage.local.get("def", ({ def }) => {
    if (def == 0) {
      changeColor.style.backgroundColor = red;
      chrome.storage.local.get("countDownDate", ({ countDownDate }) => {
        
        console.log(countDownDate)
        var now=new Date().getTime()
        console.log(now)
        
        var time=Math.floor((countDownDate-now)/1000);
        console.log(time)
        timer(time);
      });
    } else {
      changeColor.style.backgroundColor = green;
    }
  });
}

function button() {
  chrome.storage.local.get("def", ({ def }) => {
    if (def == 0) {
      return;
    } else {
      chrome.storage.local.set({ def: 0 });
      changeColor.style.backgroundColor = red;

      timer(10 * 60);
    }
  });
}

function changeGreen() {
  changeColor.style.backgroundColor = green;
  chrome.storage.local.set({ def: 1 });
}

changeColor.addEventListener("click", async () => {
  button();
});
