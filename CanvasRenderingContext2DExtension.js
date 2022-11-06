CanvasRenderingContext2D.prototype.progressBar = function (
  x,
  y,
  width,
  height,
  percent,
  colorScheme = ["#AAA", "#0F0"],
  maxPercent = 100
) {
  heatColor = this.fillStyle;
  this.fillStyle = colorScheme[0] == null ? heatColor : colorScheme[0];
  this.fillRect(x, y, width, height);
  this.fillStyle = colorScheme[1] == null ? heatColor : colorScheme[1];
  this.fillRect(x, y, (percent / maxPercent) * width, height);
  this.fillStyle = heatColor;
};

CanvasRenderingContext2D.prototype.decoratedProgressBar = function (
  x,
  y,
  width,
  height,
  percent,
  colorScheme = [
    "#FFF" /*Left frame color*/,
    "#0F0" /*Progress bar color*/,
    "#AAA" /*Empty bar color*/,
    "#FFF" /*Right frame color*/,
  ],
  shapeScheme = [
    width * 0.1 /*Longitud del marco*/,
    height * 0.2 /*Grosor del marco*/,
    Math.min(width, height) * 0.17 /*Espacio entre marco y barra de progreso*/,
  ],
  maxPercent = 100
) {
  heatColor = this.fillStyle;
  // Fix empty values
  if (shapeScheme == null)
    shapeScheme = [width * 0.1, height * 0.2, Math.min(width, height) * 0.17];
  if (shapeScheme[0] == null) shapeScheme[0] = width * 0.1;
  if (shapeScheme[1] == null) shapeScheme[1] = height * 0.2;
  if (shapeScheme[2] == null) shapeScheme[2] = Math.min(width, height) * 0.17;
  if (colorScheme == null) colorScheme = ["#FFF", "#0F0", "#AAA", "#FFF"];

  // Empty progress bar
  this.fillStyle = colorScheme[2] == null ? heatColor : colorScheme[2];
  this.fillRect(
    x + shapeScheme[1] + shapeScheme[2],
    y + shapeScheme[1] + shapeScheme[2],
    width - shapeScheme[1] * 2 - shapeScheme[2] * 2,
    height - shapeScheme[1] * 2 - shapeScheme[2] * 2
  );

  // Filled progress bar
  this.fillStyle = colorScheme[1] == null ? heatColor : colorScheme[1];
  this.fillRect(
    x + shapeScheme[1] + shapeScheme[2],
    y + shapeScheme[1] + shapeScheme[2],
    (percent / maxPercent) * (width - shapeScheme[1] * 2 - shapeScheme[2] * 2),
    height - shapeScheme[1] * 2 - shapeScheme[2] * 2
  );

  // Left frame
  this.fillStyle = colorScheme[0] == null ? heatColor : colorScheme[0];
  this.fillRect(x, y, shapeScheme[0], shapeScheme[1]);
  this.fillRect(x, y, shapeScheme[1], height);
  this.fillRect(x, y + height, shapeScheme[0], -shapeScheme[1]);

  // Right frame
  this.fillStyle = colorScheme[3] == null ? heatColor : colorScheme[3];
  this.fillRect(x + width, y, -shapeScheme[0], shapeScheme[1]);
  this.fillRect(x + width, y, -shapeScheme[1], height);
  this.fillRect(x + width, y + height, -shapeScheme[0], -shapeScheme[1]);

  this.fillStyle = heatColor;
};

CanvasRenderingContext2D.prototype.roundRect = function (
  x,
  y,
  width,
  height,
  radius
) {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  this.beginPath();
  this.moveTo(x + radius, y);
  this.arcTo(x + width, y, x + width, y + height, radius);
  this.arcTo(x + width, y + height, x, y + height, radius);
  this.arcTo(x, y + height, x, y, radius);
  this.arcTo(x, y, x + width, y, radius);
  this.closePath();
  return this;
};
