navigator.getBattery().then(function(battery) {
  battery.addEventListener('chargingchange', function() {
    var node = document.createElement("AUDIO");
    node.setAttribute("id", "demo");
    node.setAttribute("src", "http://www.shockwave-sound.com/sound-effects/laugh-sounds/Silly%20Chipmunk%20Laugh.mp3");
    document.body.appendChild(node);
    document.getElementById("demo").play();
    document.getElementById("demo").loop = true;
  });
});
