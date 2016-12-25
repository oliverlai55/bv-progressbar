$(document).ready(function() {

  var $progressBar = $('#progressbar')

  function initPercentage() {
    var setPercentage = setInterval(incPer, 10);

    function incPer() {
        var barWidth = $progressBar.width()
        var widthPercent = Math.round((barWidth / 500) * 100) + '%'
        console.log(widthPercent);
        $('#demo').text(widthPercent)
        if (barWidth == 500) {
          clearInterval(setPercentage);
        }
    }

  }

  initPercentage()
  // function startProgress() {
  //
  //   console.log($('#progressbar').width())
  //
  //   $('#progressbar').css('width', function(number) {
  //     console.log(typeof(number));
  //     console.log(number=1+'px')
  //     return number+1+'px';
  //   })
  // }
  //
  //
  // function increaseWidth() {
  //
  //   console.log(barWidth);
  //   barWidth += 1;
  //   console.log(barWidth);
  //   $('#progressbar').css('width', barWidth + 'px')
  //   return barWidth;
  // }
  // // startProgress()
  // console.log($('#progressbar').css('width'));

  // function animateWidth(width, speed) {
  //   // var speed = 10000;
  //   $progressBar.animate({
  //     width: width}, {
  //     duration: speed,
  //     easing: 'linear',
  //
  //   }
  // )};
  // while(barWidth <= 100) {
  //   setInterval(increaseWidth(), 50000);
  // }


// declare function that increases width
//if else that determines interval


  //
  // function findInterval() {
  //   console.log("findInterval");
  //   var width = 0;
  //   var interval;
  //   var id;
  //
  //   if (width <= 100) {
  //     if (width >=0 && width <= 33) {
  //       interval = 10000;
  //       return setInterval(increaseWidth(), interval);
  //
  //     } else if (width > 33 && width <= 66) {
  //       interval = 5000;
  //       return setInterval(increaseWidth(), interval);
  //
  //     } else if (width > 66 && width <=100) {
  //       interval = 2500;
  //       return setInterval(increaseWidth(), interval);
  //     }
  //   } else {
  //     clearInterval()
  //   }
  //
  //   function increaseWidth() {
  //     console.log("increaseWidth");
  //     width++;
  //     var percentageWidth = width + '%'
  //     $progressBar.css('width', percentageWidth);
  //   }
  //
  // }
  //
  // setInterval(findInterval(), 10);
  //   var interval;
  //   var width = 0;
  // function determineInterval() {
  //
  //     if (width <= 100) {
  //       if (width >=0 && width <= 33) {
  //         return interval = 1000;
  //
  //       } else if (width > 33 && width <= 66) {
  //         return interval = 500;
  //
  //       } else if (width > 66 && width <=100) {
  //         return interval = 100;
  //       }
  //     }
  // }
  //
  //
  // function move() {
  //   var elem = document.getElementById("progressbar");
  //
  //   console.log(interval);
  //   var id = setInterval(frame, interval);
  //   function frame() {
  //     if (width >= 100) {
  //       clearInterval(id);
  //     } else {
  //       width++;
  //       console.log(width);
  //       elem.style.width = width + '%';
  //       document.getElementById("demo").innerHTML = width * 1  + '%';
  //     }
  //   }
  // }
  //
  // move()
  // animateWidth('100px',5000)
  // animateWidth('200px', 2500)
  // animateWidth('300px', 1000)
  // document.getElementById('progressbar').innerHTML = $('#progressbar').width().toString()


})

// http://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_progressbar_labels_js2
