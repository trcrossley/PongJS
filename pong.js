var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrane ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.height = height;
canvas.width = width;
var context = canvas.getContext('2d');

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
};
