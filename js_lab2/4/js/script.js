numm = 0;
imgslide = new Array();
imgslide[0] = new Image();
imgslide[1] = new Image();
imgslide[2] = new Image();

imgslide[0] = "img/img1.jpg";
imgslide[1] = "img/img2.jpg";
imgslide[2] = "img/img3.jpg";

function dem(n) {
    if (n == 1) {
        numm++;
        if (numm == 3) {
            numm = 0;
        }
    } else {
        numm--;
        if (numm == -1) {
            numm = 2;
        }
    }
    document.images[0].src = imgslide[numm];
}