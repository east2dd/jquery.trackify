/*
* title: jquery trackify plugin
* author: Xing
* email: xingxing2d@gmail.com
* date: 2014/03/26
* Usage:

    <script>
    $(function(){
        $('.featured-overlay').trackify();
        $('.featured-overlay').bind("trackify:update", function(event, elem, percent){
            $(this).stop();
            $(this).animate({opacity: percent}, 600);
        });
    });
    </script>

     ==== OR ====

    <script>
    $(function(){
        $('.featured-overlay').trackify(function(elem, percentage){
            $(elem).stop();
            $(elem).animate({opacity: percent}, 600);
        });
    });
    </script>
*/

(function ( $ ) {
  
  var element = null

  function checkInView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        var rateFromTop = (docViewTop - elemTop)/element.height();
        var rateFromBottom = (elemBottom - docViewBottom)/element.height();

        rate = getInvisiblePercent(rateFromTop) + getInvisiblePercent(rateFromBottom)

        if(rate <= 0){
          rate = 0;
        }

        if(rate >= 1){
          rate = 1;
        }

        elem.trigger("trackify:update", [elem, rate]);
        return rate;
      }

  function getInvisiblePercent(percentage) {
    if(percentage <= 0){
      percentage = 0;
    }

    if(percentage >= 1){
      percentage = 1;
    }

    return percentage;
  }

  $.fn.trackify = function(trackFunc) {
      element = this
      myFunc = trackFunc;

      $(window).bind("scroll resize", function() {

        percentage = checkInView(element);
        if(trackFunc){
          trackFunc(element, percentage);
        }
        
      });
  };
})( jQuery );