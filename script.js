$(document).ready(function() {
  var barWidth = $('#progressbar').width();
  var timeCount;
  var $progressBar = $('#progressbar')
  function startProgress() {

    console.log($('#progressbar').width())

    $('#progressbar').css('width', function(number) {
      console.log(typeof(number));
      console.log(number=1+'px')
      return number+1+'px';
    })
  }


  function increaseWidth() {

    console.log(barWidth);
    barWidth += 1;
    console.log(barWidth);
    $('#progressbar').css('width', barWidth + 'px')
    return barWidth;
  }
  // startProgress()
  // console.log($('#progressbar').css('width'));

  function animateWidth(width, speed) {
    // var speed = 10000;
    $progressBar.animate({
      width: width}, {
      duration: speed,
      easing: 'linear',

    }
  )};
  // while(barWidth <= 100) {
  //   setInterval(increaseWidth(), 50000);
  // }
  var barStyle = document.getElementById('progressbar').style.width
  console.log(barStyle);
  // animateWidth('100px',5000)
  // animateWidth('200px', 2500)
  // animateWidth('300px', 1000)
  // document.getElementById('progressbar').innerHTML = $('#progressbar').width().toString()


})

// http://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_progressbar_labels_js2
