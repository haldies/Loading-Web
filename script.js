document.addEventListener("DOMContentLoaded", function () {
    var loadingVideo = document.getElementById("loading-video");
    var video = document.getElementById("video");
    var skipButton = document.getElementById("skip-button");
    var content = document.getElementById("main");
    var clickToEnter = document.getElementById("ClickToEnter");
    var contentHome = document.getElementById("home");
    var contentRoadmap = document.getElementById("roadmap");
    var contentWhitepaper = document.getElementById("whitepaper");
    var contentSosials = document.getElementById("sosials");
    var contentTokenomics = document.getElementById("tokenomics");
    var btnEsc = document.getElementById("btn-esc");

    btnEsc.addEventListener("click", function () {
    loadingVideo.style.display = "none";
    content.style.display = "flex";
    video.style.display = "none";
    contentHome.style.display = "flex";
    contentRoadmap.style.display = "flex";
    contentWhitepaper.style.display = "flex";
    contentSosials.style.display = "flex";
    contentTokenomics.style.display = "flex";
    });


    clickToEnter.addEventListener("click", function () {
        video.style.display = "block";
        video.play();
        clickToEnter.style.display = "none";
        skipButton.style.display = "block";
    });
    video.addEventListener("ended", function () {
        video.style.display = "none";
        content.style.display = "flex";
        loadingVideo.style.display = "none";
        contentHome.style.display = "flex";
        contentRoadmap.style.display = "flex";
        contentWhitepaper.style.display = "flex";
        contentSosials.style.display = "flex";
        contentTokenomics.style.display = "flex";



    });

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            loadingVideo.style.display = "none";
            content.style.display = "flex";
            video.style.display = "none";
            contentHome.style.display = "flex";
            contentRoadmap.style.display = "flex";
            contentWhitepaper.style.display = "flex";
            contentSosials.style.display = "flex";
            contentTokenomics.style.display = "flex";
        }
    });

});
