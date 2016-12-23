$(document).ready(function() {
  var barWidth = $('#progressbar').width();
  var timeCount;
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
    $('#progressbar').animate({
      width: width}, {
      duration: speed,
      easing: 'linear',

    }
  )};
  // while(barWidth <= 100) {
  //   setInterval(increaseWidth(), 50000);
  // }
  // console.log(barWidth);

  animateWidth('100px',5000)
  animateWidth('200px', 2500)
  animateWidth('300px', 1000)
})
