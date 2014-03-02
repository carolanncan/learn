// var video = document.getElementsByTagName('video');
var video = document.createElement('video');
document.body.getElementsByClassName('video')[0].appendChild(video);
var playPause = document.getElementsByClassName("play-pause")[0];
var videoIsPlaying = false;
var slider = document.getElementById('volume');

video.setAttribute("src", "http://www.w3schools.com/html/mov_bbb.mp4")


playPause.addEventListener("click", function(e){
    if (!videoIsPlaying){
        video.play();
        this.innerHTML = "&#xf04c;";
        videoIsPlaying = true
        startTracking();
    } else {
        video.pause();
        this.innerHTML = "&#xf04b;";
        videoIsPlaying = false
        stopTracking();
    };
})

slider.onchange = function(){
  video.volume = this.value;
}

var progress = document.getElementById('progress');
var videoTimer;

var startTracking = function(){
  videoTimer = setInterval(function(){
     var value = (video.currentTime / video.duration *100).toFixed(2);
     progress.setAttribute = value + "%";
     progress.style.width = value + "%";
     if (value == 100) { 
      stopTracking();
      playPause.innerHTML = "&#xf04b;";
      videoIsPlaying = false;
    }
   },60);
}

var stopTracking = function(){
  clearInterval(videoTimer)
}
