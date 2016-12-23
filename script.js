$(document).ready(function() {
  var timeCount;
  function startProgress() {

    console.log($('#progressbar').css('width'));

    $('#progressbar').css('width', function(number) {
      typeof(number)
      return number + 1;
    })
  }

  startProgress()

})
