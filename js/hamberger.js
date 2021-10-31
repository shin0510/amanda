$(function() {
  $('.openbtn2').click(function() {
      $(this).toggleClass('active');
      $('.globalMenuSp').toggleClass('active');
      // $("body").toggleClass("active");
      // $("html").toggleClass("active");
  });
  $('.globalMenuSp a[href]').on('click', function(event) {
    $('.openbtn2').trigger('click');
});
});
$(function(){
  // スクロール時に実行
  $(window).scroll(function(){
    // mainvisualの縦幅取得
    //スクロール量の取得
     let scroll = $(this).scrollTop();
     // 条件分岐
     // スクロール量がメインビジュアルの縦幅より大きければ
     if( scroll > 10){
       $(".scroll").addClass("on");
     }
     // スクロール量がメインビジュアルの縦幅より小さければ
     else{
       $(".scroll").removeClass("on");
     }
  });
})