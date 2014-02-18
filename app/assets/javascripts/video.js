var song = document.createElement('video');
var playPause = document.getElementsByClassName("play-pause")[0];
var songIsPlaying = false;
var slider = document.getElementById('volume');

song.setAttribute("src", "http://avengethevirgins.net/wp-content/uploads/2013/08/Drake-Hold-On-Were-Going-Home.mp3")

playPause.addEventListener("click", function(e){
    if (!songIsPlaying){
        song.play();
        this.innerHTML = "Pause";
        songIsPlaying = true
        startTracking();
    } else {
        song.pause();
        this.innerHTML = "Play";
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
     var value = parseInt(song.currentTime / song.duration)*100; 
     progress.setAttribute = value + "%";
     console.log(value + "%");
   },60);
}

var stopTracking = function(){
  clearInterval(songTimer)
}
