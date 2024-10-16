var i = 0;
var images = [
    "https://picsum.photos/id/237/700/400",
    "https://picsum.photos/id/238/700/400",
    "https://picsum.photos/id/239/700/400",
    "https://picsum.photos/id/240/700/400"
];

function updateImage() {
    document.slide.src = images[i];
}

window.onload = updateImage;

document.getElementById('prevBtn').addEventListener("click", () => {
    i = (i === 0) ? images.length - 1 : i - 1;
    updateImage();
});

document.getElementById('nextBtn').addEventListener("click", () => {
    i = (i === images.length - 1) ? 0 : i + 1;
    updateImage();
});