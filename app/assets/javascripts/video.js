// var video = document.createElement('video');
var video = document.getElementById("video");
var playPause = document.getElementsByClassName("play-pause")[0];
var videoIsPlaying = false;
var slider = document.getElementById('volume');

video.setAttribute("src", "http://goo.gl/jb2VGx")

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
var video.Timer;

var startTracking = function(){
  videoTimer = setInterval(function(){
     var value = parseInt(video.currentTime / video.duration)*100;
     progress.setAttribute = value + "%";
     progress.style.width = value + "%";
     console.log(value + "%");
   },60);
}

var stopTracking = function(){
  clearInterval(videoTimer)
}
