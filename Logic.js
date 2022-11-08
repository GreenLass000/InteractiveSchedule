function sizeScaled(w, h) {
    const ratio = w / h;
    const width = window.innerWidth - window.innerWidth * .05;
    const height = window.innerHeight - window.innerHeight * .05;

    console.log(ratio + "\n" + width + "\n" + height);

    if (width / ratio > height) {
        return [height * ratio, height];
    } else {
        return [width, width / ratio];
    }
}