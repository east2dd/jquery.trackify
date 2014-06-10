jquery.trackify
===============

jquery scroll and resize trigger a event to element with vertical invisible percentage of element's on window.

This plugin fire the "trackify:update" event with vertical invisible percentage of the element when window's scroll and resize event occurs.

== Usage ==
Example:

<div class="featured-overlay">
</div>

<script>
$(function(){
    $('.featured-overlay').trackify();
    $('.featured-overlay').bind("trackify:update", function(event, elem, percent){
        $(this).stop();
        $(this).animate({opacity: percent}, 600);
    });
});
</script>

<script>
$(function(){
    $('.featured-overlay').trackify(function(elem, percent){
        $(elem).stop();
        $(elem).animate({opacity: percent}, 600);
    });
});
</script>