$(document).ready(function(){
    // code for controlling number limit
    $(".number-control").keypress(function (e) {
        if ($(this).val().length == 10) {
            return false
        }
    })
    // code for controlling slide time for images
    var myCarousel = document.querySelector('#carouselControls')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1400,
        wrap: false
    })
    // code for "/" coming after 3 numbers and after 4 numbers
    $('#consumer-number').bind('keyup keydown', function(event) {
        var thisVal = event.target.value;
        var inputLength = event.target.value.length;
        if(inputLength === 3 || inputLength === 8){
          thisVal += '/';
          $(event.target).val(thisVal);
        }
      })
})