var CTXCOLOR = ['black', 'blue', 'black', 'blue', 'black', 'blue', 'black', 'blue'];
var XNUM = 60,
  YNUM = 100,
  gaw = 450,
  gah = 270;
list1 = [];
list2 = [];
data_length = 121;
for (var i = 0; i < data_length; i++) {
  list1.unshift(Math.floor(Math.random() * 101));
}

var density_change_1 = document.getElementById('density-change-2');
var density_change_2 = document.getElementById('density-change-4');
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

var g1 = new Grid(30, 5, 'grid-1', 100, 270, CTXCOLOR, 0).setPenWidth(1).drawGrid();
var g2 = new Grid(4, 5, 'grid-2', 450, 270, CTXCOLOR, 2).setPenWidth(1).drawGrid();
var g3 = new Grid(30, 5, 'grid-3', 100, 270, CTXCOLOR, 4).setPenWidth(1).drawGrid();
var g4 = new Grid(4, 5, 'grid-4', 450, 270, CTXCOLOR, 6).setPenWidth(1).drawGrid();
var c1 = new Cur('curgraph-1', list1, density_change_1.value, num_change_3.value, 450, 270, CTXCOLOR, 3).drawGraph();
var c2 = new Cur('curgraph-2', list1, density_change_2.value, num_change_7.value, 450, 270, CTXCOLOR, 7).drawGraph();
var b1 = new Bar("bar-1", list1, 270, "data-1", "%");
var b2 = new Bar("bar-2", list1, 270, "data-2", "GB");


density_change_1.addEventListener('change', function () {
  c1.setNums(parseInt(this.value) * parseInt(num_change_3.value) + 1);
  document.getElementById("time-1").innerText = parseInt(this.value) * parseInt(num_change_3.value) + "秒";
})
density_change_2.addEventListener('change', function () {
  c2.setNums(parseInt(this.value) * parseInt(num_change_7.value) + 1);
  document.getElementById("time-2").innerText = parseInt(this.value) * parseInt(num_change_7.value) + "秒";
});
num_change_1.addEventListener('change', function () {
  g1.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
})
num_change_2.addEventListener('change', function () {
  g1.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})
num_change_3.addEventListener('change', function () {
  g2.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
  c1.setNums(parseInt(density_change_1.value) * parseInt(this.value) + 1);
  document.getElementById("time-1").innerText = parseInt(this.value) * parseInt(density_change_1.value) + "秒";
})
num_change_4.addEventListener('change', function () {
  g2.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})
num_change_5.addEventListener('change', function () {
  g3.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
})
num_change_6.addEventListener('change', function () {
  g3.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})
num_change_7.addEventListener('change', function () {
  g4.setUnit(60 / parseInt(this.value), 0).refresh().drawGrid();
  c2.setNums(parseInt(density_change_2.value) * parseInt(this.value) + 1);
  document.getElementById("time-2").innerText = parseInt(this.value) * parseInt(density_change_2.value) + "秒";
})
num_change_8.addEventListener('change', function () {
  g4.setUnit(0, 100 / parseInt(this.value)).refresh().drawGrid();
})
color_change_1.addEventListener('change', function () {
  g1.setPenColor(this.value).refresh().drawGrid();
})
color_change_2.addEventListener('change', function () {
  console.log(this.value);
  b1.setColor(this.value);
})
color_change_3.addEventListener('change', function () {
  g2.setPenColor(this.value).refresh().drawGrid();
})
color_change_4.addEventListener('change', function () {
  c1.setPenColor(this.value).refresh().drawGraph();
})
color_change_5.addEventListener('change', function () {
  g3.setPenColor(this.value).refresh().drawGrid();
})
color_change_6.addEventListener('change', function () {
  console.log(this.value);
  b2.setColor(this.value);
})
color_change_7.addEventListener('change', function () {
  g4.setPenColor(this.value).refresh().drawGrid();
})
color_change_8.addEventListener('change', function () {
  c2.setPenColor(this.value).refresh().drawGraph();
})




function Grid(x, y, id, xw, yh, color, index) {
  this.canvas = document.getElementById(id);
  console.log(this.canvas);
  this.ctx = this.canvas.getContext("2d");
  this.color = color;
  this.index = index;
  this.ctx.strokeStyle = color[index];
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
    this.color[this.index] = color;
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
    this.ctx.lineWidth = 5;
    this.drawLine(0, 0, 0, this.yheight);
    this.drawLine(0, 0, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, this.xwidth, 0);
    this.drawLine(this.xwidth, this.yheight, 0, this.yheight);
    this.ctx.lineWidth = 0.5;

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
    this.ctx.strokeStyle = this.color[this.index];
    // this.ctx.lineWidth = CTXWIDTH
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

function Bar(id, list, yh, data, str) {
  this.bar = document.getElementById(id);
  this.display = document.getElementById(data);
  this.list = list;
  this.height = yh;
  this.hpx = list[0] / 100 * this.height;
  this.str = str;
  this.bar.style.height = list[0] / 100 * this.height - 3 + "px";
  if (this.str == "%") {
    this.display.innerText = this.list[0] + this.str;
  } else {
    this.display.innerText = (this.list[0] / 100 * 8.0).toFixed(2) + this.str;
  }
  this.setHeight = function () {
    this.bar.style.height = list[0] / 100 * this.height - 3 + "px";
    if (this.str == "%") {
      this.display.innerText = this.list[0] + this.str;
    } else {
      this.display.innerText = (this.list[0] / 100 * 8.0).toFixed(2) + this.str;
    }
  }
  this.setColor = function (color) {
    this.bar.style.backgroundColor = color;
  }
}

function Cur(id, list, unit, cl, xw, yh, color, index) {
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.unit = unit;
  this.colmunLength = cl;
  this.nums = unit * cl + 1;
  this.dataSet = list;
  this.xwidth = xw;
  this.yheight = yh;
  this.color = color;
  this.index = index;
  this.ctx.strokeStyle = this.color[this.index];
  this.gapY = yh / 100;
  this.gapX = xw / (this.nums - 1);
  this.drawBaseX = xw;
  this.drawBaseY = yh;
  this.setNums = function (num) {
    this.nums = num;
    this.gapX = xw / (this.nums - 1);
  }
  this.drawGraph = function () {
    for (var i = 0; i < this.nums; i++) {
      this.drawLine(this.drawBaseX - i * this.gapX, this.drawBaseY - this.dataSet[i] * this.gapY, this.drawBaseX - (i + 1) * this.gapX, this.drawBaseY - this.dataSet[i + 1] * this.gapY);
    }
    return this;
  }
  this.setPenColor = function (color) {
    this.ctx.strokeStyle = color;
    this.color[this.index] = color;
    return this;
  }
  this.drawLine = function (fromX, fromY, toX, toY) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color[this.index];
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  this.refresh = function () {
    this.canvas.height = this.canvas.height;
    return this;
  }
}


function test() {
  setInterval(function () {
    list1.pop();
    list1.unshift(Math.floor(Math.random() * 101));
    c1.refresh().drawGraph();
    c2.refresh().drawGraph();
    b1.setHeight();
    b2.setHeight();
  }, 1000);
}
test();