

navigator.getBattery().then(function(battery) {

  console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  console.log("Battery level: " + battery.level * 100 + "%");
  console.log("Battery charging time: " + battery.chargingTime + " seconds");
  console.log("Battery discharging time: " + battery.dischargingTime + " seconds");

  battery.addEventListener('chargingchange', function() {
    var node = document.createElement("AUDIO");
    node.setAttribute("id", "demo");
    node.setAttribute("src", "http://www.shockwave-sound.com/sound-effects/laugh-sounds/Silly%20Chipmunk%20Laugh.mp3");
    document.body.appendChild(node);
    document.getElementById("demo").play();
    document.getElementById("demo").loop = true;

    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });

  battery.addEventListener('levelchange', function() {
    console.log("Battery level: " + battery.level * 100 + "%");
  });

  battery.addEventListener('chargingtimechange', function() {
    console.log("Battery charging time: " + battery.chargingTime + " seconds");
  });

  battery.addEventListener('dischargingtimechange', function() {
    console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
  });

});
