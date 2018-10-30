var num_change_1 = document.getElementById('num-change-1');
var num_change_2 = document.getElementById('num-change-2');
var num_change_3 = document.getElementById('num-change-3');
var num_change_4 = document.getElementById('num-change-4');
var num_change_5 = document.getElementById('num-change-5');
var num_change_6 = document.getElementById('num-change-6');
var num_change_7 = document.getElementById('num-change-7');
var num_change_8 = document.getElementById('num-change-8');

var color_change_1 = document.getElementById('color-change-1');
var color_change_2 = document.getElementById('color-change-2');
var color_change_3 = document.getElementById('color-change-3');
var color_change_4 = document.getElementById('color-change-4');
var color_change_5 = document.getElementById('color-change-5');
var color_change_6 = document.getElementById('color-change-6');
var color_change_7 = document.getElementById('color-change-7');
var color_change_8 = document.getElementById('color-change-8');

num_change_1.addEventListener('change', function () {
  console.log(this.value);
  g1.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
})
num_change_2.addEventListener('change', function () {
  console.log(this.value);
  g1.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})
num_change_3.addEventListener('change', function () {
  console.log(this.value);
  g2.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
})
num_change_4.addEventListener('change', function () {
  console.log(this.value);
  g2.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})

color_change_3.addEventListener('change', function() {
  console.log(this.value);
  g2.setPenColor(this.value).refresh().drawGrid().setPenColor('black');
})




var XNUM = 60,
  YNUM = 100,
  gaw = 450,
  gah = 270;
  CTXCOLOR = "black";
  CTXWIDTH = "1px";
  list2 = [];
  data_length = 121;
  for (var i = 0; i < data_length; i++) {
    list2.unshift(Math.floor(Math.random()*101));
  }
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
    return this;
  }
  this.refresh = function () {
    this.canvas.height = this.canvas.height;
    return this;
  }
  this.setPenColor = function (color) {
    this.ctx.strokeStyle = color;
    CTXCOLOR = color;
    return this;
  }
  this.setPenWidth = function (width) {
    // this.ctx.translate(width / 2, width / 2);
    this.ctx.lineWidth = width;
    return this;
  }
  this.setUnit = function (xu, yu) {
    this.xunit = xu || this.xunit;
    this.yunit = yu || this.yunit;
    return this;
  }
  this.drawGrid = function () {
    var nx = 60 / this.xunit;
    var ny = 100 / this.yunit;
    CTXWIDTH = "1px";
    this.drawLine(0, 0, 0, this.yheight);
    this.drawLine(0, 0, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, 0, this.yheight);
    CTXWIDTH = "1px";
    intervalx = xw / (nx);
    intervaly = yh / (ny);
    for (var i = 1; i < nx; i++) {
      this.drawLine(i * intervalx, 0, i * intervalx, gah);
    }
    for (var i = 1; i < ny; i++) {
      this.drawLine(0, i * intervaly, gaw, i * intervaly);
    }
    return this;
  }
  this.drawLine = function (fromX, fromY, toX, toY) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = CTXCOLOR;
    this.ctx.lineWidth = CTXWIDTH
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
function Bar() {

}

function Cur(id, list, showNum, xw, yh) {
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.dataSet = list;
  this.nums = showNum;
  this.xwidth = xw;
  this.yheight = yh;
  this.gapY = yh / 100;
  this.gapX = xw / showNum;
  this.drawBaseX = xw;
  this.drawBaseY = yh;
  this.drawGraph = function() {
    for(var i = 0;i < showNum;i++) {
      this.drawLine(this.drawBaseX-i*this.gapX, this.drawBaseY-this.dataSet[i]*this.gapY, this.drawBaseX-(i+1)*this.gapX, this.drawBaseY-this.dataSet[i+1]*this.gapY);
    }
    return this;
  }
  this.drawLine = function (fromX, fromY, toX, toY) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = CTXCOLOR;
    this.ctx.lineWidth = CTXWIDTH
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  this.refresh = function() {
    this.canvas.height = this.canvas.height;
    return this;
  }
}
var g1 = new Grid(30, 5, 'grid-1', 100, 270).setPenWidth(1).drawGrid();
var g2 = new Grid(5, 5, 'grid-2', 450, 270).setPenWidth(1).drawGrid();
var g3 = new Grid(30, 5, 'grid-3', 100, 270).setPenWidth(1).drawGrid();
var g4 = new Grid(5, 5, 'grid-4', 450, 270).setPenWidth(1).drawGrid();

var c3 = new Cur('curgraph-1', list2, 61, 450, 270).drawGraph();

function test() {
  setInterval(function(){
    list2.pop();
    list2.unshift(Math.floor(Math.random()*101));
    window.c3.refresh().drawGraph();
  }, 1000);
}
test();