$(function() {
  $('.openbtn2').click(function() {
      $(this).toggleClass('active');
      $('.globalMenuSp').toggleClass('active');
      $("body").toggleClass("active");
      $("html").toggleClass("active");
  });
  $('.globalMenuSp a[href]').on('click', function(event) {
    $('.openbtn2').trigger('click');
});
});