const cards = document.querySelectorAll(".vd-card");
const myVideo = document.querySelectorAll("video");
let data;

const pauseVideo = () => {
    myVideo.forEach((items) => {
        items.pause();
    })
}
pauseVideo()

cards.forEach(items => items.addEventListener(
    'mouseenter', () => {
        items.querySelector("video").play();
        data = items.getAttribute("poster");
    }
));

cards.forEach(items => items.addEventListener(
    'mouseleave', () => {
        items.querySelector("video").pause();
    }
));
