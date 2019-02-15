
$(".image-scale").mouseover(function () {
  var id = $(this).find('img').attr('id');
  $("#overlay-" + id).css('opacity', '1');
});

$(".image-scale").mouseleave(function () {
  var id = $(this).find('img').attr('id');
  $("#overlay-" + id).css('opacity', '0');
});

//Illustration By Rick Granados
$("#svg-square-icon").on('click', function() {
  drawSVGPaths('svg', 2222, 500, 400);
})

jQuery.extend(jQuery.easing, {
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }
});

function SVG(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function replaceRectsWithPaths(parentElement) {

  var rects = $(parentElement).find('rect');

  $.each(rects, function () {

    var rectX = $(this).attr('x');
    var rectY = $(this).attr('y');

    var rectX2 = parseFloat(rectX) + parseFloat($(this).attr('width'));
    var rectY2 = parseFloat(rectY) + parseFloat($(this).attr('height'));

    var convertedPath = 'M' + rectX + ',' + rectY + ' ' + rectX2 + ',' + rectY + ' ' + rectX2 + ',' + rectY2 + ' ' + rectX + ',' + rectY2 + ' ' + rectX + ',' + rectY;

    $(SVG('path'))
      .attr('d', convertedPath)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(rects).remove();
}

function replaceLinesWithPaths(parentElement) {

  var lines = $(parentElement).find('line');

  $.each(lines, function () {

    var lineX1 = $(this).attr('x1');
    var lineY1 = $(this).attr('y1');

    var lineX2 = $(this).attr('x2');
    var lineY2 = $(this).attr('y2');

    var convertedPath = 'M' + lineX1 + ',' + lineY1 + ' ' + lineX2 + ',' + lineY2;


    $(SVG('path'))
      .attr('d', convertedPath)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(lines).remove();
}

function replaceCirclesWithPaths(parentElement) {

  var circles = $(parentElement).find('circle');

  $.each(circles, function () {

    var cX = $(this).attr('cx');
    var cY = $(this).attr('cy');
    var r = $(this).attr('r');
    var r2 = parseFloat(r * 2);

    var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';

    $(SVG('path'))
      .attr('d', convertedPath)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(circles).remove();
}


function replaceEllipsesWithPaths(parentElement) {

  var ellipses = $(parentElement).find('ellipse');

  $.each(ellipses, function () {

    var cX = $(this).attr('cx');
    var cY = $(this).attr('cy');
    var rX = $(this).attr('rx');
    var rY = $(this).attr('ry');

    var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-rX) + ', 0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + rX * 2 + ',0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + (-rX * 2) + ',0 ';

    $(SVG('path'))
      .attr('d', convertedPath)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(ellipses).remove();
}


function replacePolygonsWithPaths(parentElement) {

  var polygons = $(parentElement).find('polygon');

  $.each(polygons, function () {

    var points = $(this).attr('points');
    var polyPoints = points.split(/[ ,]+/);
    var endPoint = polyPoints[0] + ', ' + polyPoints[1];

    $(SVG('path'))
      .attr('d', 'M' + points + ' ' + endPoint)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(polygons).remove();
}

function replacePolylinesWithPaths(parentElement) {

  var polylines = $(parentElement).find('polyline');

  $.each(polylines, function () {

    var points = $(this).attr('points');

    $(SVG('path'))
      .attr('d', 'M' + points)
      .attr('fill', $(this).attr('fill'))
      .attr('stroke', $(this).attr('stroke'))
      .attr('stroke-width', $(this).attr('stroke-width'))
      .attr('stroke-linecap', $(this).attr('stroke-linecap'))
      .insertAfter(this);

  });

  $(polylines).remove();
}

function hideSVGPaths(parentElement) {

  var paths = $(parentElement).find('path');

  $.each(paths, function () {

    var totalLength = this.getTotalLength();

    $(this).css({
      'stroke-dashoffset': totalLength,
      'stroke-dasharray': totalLength + ' ' + totalLength
    });
  });
}

function drawSVGPaths(_parentElement, _timeMin, _timeMax, _timeDelay) {

  var paths = $(_parentElement).find('path');

  $.each(paths, function (i) {

    var totalLength = this.getTotalLength();

    $(this).css({
      'stroke-dashoffset': totalLength,
      'stroke-dasharray': totalLength + ' ' + totalLength
    });

    $(this).delay(_timeDelay * i).animate({
      'stroke-dashoffset': 0
    }, {
      duration: Math.floor(Math.random() * _timeMax) + _timeMin,
      easing: 'easeInOutQuad'
    });
  });
}

function replaceWithPaths(parentElement) {
  replaceRectsWithPaths(parentElement);
  replaceLinesWithPaths(parentElement);
  replaceEllipsesWithPaths(parentElement);
  replaceCirclesWithPaths(parentElement);
  replacePolygonsWithPaths(parentElement);
  replacePolylinesWithPaths(parentElement);
}

function startSVGAnimation(parentElement) {
  drawSVGPaths(parentElement, 500, 700, 25);
}
function startSVGAnimationMain(parentElement) {
  drawSVGPaths(parentElement, 1400, 1200, 444);
}
function hyjneshaNfron(parentElement) {
  drawSVGPaths(parentElement, 2555, 4000, 550);
}

replaceWithPaths($('svg'));


$(window).scroll(function () {
  if ($(this).scrollTop() > 0) { // this refers to window
    $("#nav-logo").show(100);
    $(".logo-icon").hide(300);
  } else {
    $("#nav-logo").hide(100);
    $(".logo-icon").show(300);
  }
});

var isScrolled = true;
$(document).on('scroll', function () {
  if ($(this).scrollTop() <= $('#banner-loc').position().top && isScrolled) {
    startSVGAnimation($('#svg-icon-code'));
    isScrolled = false;
  }
})

startSVGAnimationMain($('#code-debugcon'));
hyjneshaNfron($('#hnn-pr'));


// spekaers js

$(function () {

  $('.md-trigger').on('click', function () {
    console.log($(this).attr('data-nr'));
    var dataNr = $(this).attr('data-nr');
    $("#name-speaker").text(speakers.speakersks[dataNr].name);
    $("#occupation").text(speakers.speakersks[dataNr].occupation);
    $("#paragraph-1").text(speakers.speakersks[dataNr].p1);
    $("#paragraph-2").text(speakers.speakersks[dataNr].p2);
    $("#days-text").text(speakers.speakersks[dataNr].daysText);
    $("#days-subject").text(speakers.speakersks[dataNr].daysSubject);
    $("#image-speaker").attr('src', speakers.speakersks[dataNr].img);
    $('.md-modal').addClass('md-show');
    if ($(".md-modal").hasClass("md-show")) {
      $('body').css('overflow','hidden');
    }
    startSVGAnimation($('#code-debugcon-overlay'));
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) $('.md-close').click(); // esc
  });

  $('.md-close').on('click', function () {
    $('.md-modal').removeClass('md-show');
    $('body').css('overflow','unset');
  });

});

