$(document).ready(function () {
  var mytrack = document.querySelector('.mytrack');
  var playButton = document.querySelector('.playButton');
  var duration = document.querySelector('.fullDuration');
  var currentTime = document.querySelector('.currentTime');
  var barSize = 640;
  var bar = document.querySelector('.defaultBar');
  var progressBar = document.querySelector('.progressBar');


  duration.innerHTML = mytrack.duration;
  playButton.addEventListener('click', playOrPause, false);
  bar.addEventListener('click', clickedBar, false);


  function playOrPause() {

    if (!mytrack.paused && !mytrack.ended) {
      mytrack.pause();
      // playButton.innerHTML= "";
      window.clearInterval(updateTime);
    }
    else {
      mytrack.play();
      // playButton.innerHTML  = "";
      updateTime = setInterval(update, 500);

    }
  }

  mytrack.addEventListener("loadedmetadata", function () {

    var minutes = parseInt(mytrack.duration / 60);
    var seconds = parseInt(mytrack.duration % 60);
    duration.innerHTML = minutes + ':' + seconds;
  });

  function update() {
    if (!mytrack.ended) {
      var playedMinutes = parseInt(mytrack.currentTime / 60);
      var playedSeconds = pad(parseInt(mytrack.currentTime % 60));
      currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
      var size = parseInt(mytrack.currentTime * barSize / mytrack.duration);
      progressBar.style.width = size + "px";

    }
    else {
      currentTime.innerHTML = "0.00";
      playButton.innerHTML = "▶";
      window.clearInterval(updateTime);
      progressBar.style.width = "0px";
    }
  }


  function clickedBar(e) {
    if (!mytrack.ended) {
      var mouseX = e.pageX - bar.offsetLeft;
      var newTime = mouseX * mytrack.duration / barSize;

      mytrack.currentTime = newTime;
      progressBar.style.width = mouseX + 'px';
    }
  }
});
