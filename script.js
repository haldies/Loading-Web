document.addEventListener("DOMContentLoaded", function() {
    var loadingVideo = document.getElementById("loading-video");
    var video = document.getElementById("video");
    var skipButton = document.getElementById("skip-button");
    var content = document.getElementById("content");
    var clickToEnter = document.getElementById("ClickToEnter");

    clickToEnter.addEventListener("click", function() {
        video.style.display = "block";
        video.play();
        clickToEnter.style.display = "none";
        skipButton.style.display = "block";
    });

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            loadingVideo.style.display = "none";
            video.style.display = "none";
        }
    });
});