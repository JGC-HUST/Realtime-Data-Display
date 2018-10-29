var XNUM = 60,
  YNUM = 100,
  gaw = 390,
  gah = 240;
function Grid(x, y, id, xw, yh) {
  this.canvas = document.getElementById(id);
  console.log(this.canvas);
  this.ctx = this.canvas.getContext("2d");
  this.xunit = x;
  this.yunit = y;
  this.xwidth = xw;
  this.yheight = yh;
  this.data = [];
  this.setData = function (Data) {
    this.data = Data;
  }
  this.setPenColor = function (color) {
    this.ctx.strokeStyle = color;
  }
  this.setPenWidth = function (width) {
    // this.ctx.translate(width / 2, width / 2);
    this.ctx.lineWidth = width;
    return this;
  }
  this.drawGrid = function () {
    var nx = 60 / this.xunit;
    var ny = 100 / this.yunit;
    this.drawLine(0, 0, 0, this.yheight);
    this.drawLine(0, 0, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, 0, this.yheight);
    intervalx = xw / (nx);
    intervaly = yh / (ny);
    for (var i = 1; i < nx; i++) {
      this.drawLine(i * intervalx, 0, i * intervalx, gah);
    }
    for (var i = 1; i < ny; i++) {
      this.drawLine(0, i * intervaly, gaw, i * intervaly);
    }
  }
  this.drawLine = function (fromX, fromY, toX, toY) {
    this.ctx.beginPath();
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
new Grid(30, 5, 'grid-1', 80, 240).setPenWidth(1).drawGrid();
new Grid(5, 5, 'grid-2', 390, 240).setPenWidth(1).drawGrid();
new Grid(30, 5, 'grid-3', 80, 240).setPenWidth(1).drawGrid();
new Grid(5, 5, 'grid-4', 390, 240).setPenWidth(1).drawGrid();