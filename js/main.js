var indexValue = 1;
showImg(indexValue);
function img_slide(e) {showImg(indexValue = e);} 
function showImg(e) {
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.img-sliders span')
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for(i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "black";
    }
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "white";
}
