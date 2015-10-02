$(document).ready(function() {
   $(".fancybox").attr('rel', 'gallery').fancybox({
      helpers: {title: {type: 'inside'}}
   });
   $(".fancyvideo").fancybox({
      helpers: {media: {}}
   });
});