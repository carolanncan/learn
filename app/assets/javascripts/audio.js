var song = document.createElement('audio');

var playPause = document.getElementsByClassName("play-pause")[0];
var songIsPlaying = false;
var slider = document.getElementById('volume');

song.setAttribute("src", "http://avengethevirgins.net/wp-content/uploads/2013/08/Drake-Hold-On-Were-Going-Home.mp3")

playPause.addEventListener("click", function(e){
    if (!songIsPlaying){
        song.play();
        this.innerHTML = "&#xf04c;";
        songIsPlaying = true
        startTracking();
    } else {
        song.pause();
        this.innerHTML = "&#xf04b;";
        songIsPlaying = false
        stopTracking();
    };
})

slider.onchange = function(){
  song.volume = this.value;
}

var progress = document.getElementById('progress');
var songTimer;

var startTracking = function(){
  songTimer = setInterval(function(){
    var value = (song.currentTime / song.duration * 100).toFixed(2);
    progress.setAttribute = value + "%";
    progress.style.width = value + "%";
  }, 60);
}

var stopTracking = function(){
  clearInterval(songTimer)
}

