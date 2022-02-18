const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
});

new WOW().init();

$('.drawer-icon').on('click', function(){
  $(this).toggleClass('is-active');
  $(".drawer-content").toggleClass('is-active');
  $(".drawer-background").toggleClass('is-active');
});


// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});
// スクロール検知
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

// jQuery('.header__nav ul li a').click(function() {
//   jQuery('.header__nav ul li a').removeClass( 'is-active' );
//   jQuery(this).addClass( 'is-active' );
//   return false;
// });


$(function() {
 $('.header-nav li a').click(function() {
  $('.header-nav li a').removeClass('is-active');
  $(this).addClass('is-active');
 });

 $('.qa-box-q').click(function() {
  $(this).next().slideToggle();
  $(this).children('.qa-box-icon').toggleClass('is-open');
 });
//  $('.js-close-button').click(function(e) {
//    e.preventDefault();
//    var target = $(this).data("target");
//    target.hide();
//    return false;
//  });

});

// モーダル
jQuery('.js-close-button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data("target");
  jQuery(target).hide();

  return false;
});
jQuery('.js-open-button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data("target");
  jQuery(target).show();
  return false;
});






