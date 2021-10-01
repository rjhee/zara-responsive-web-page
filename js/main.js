$(function () {
  // pc버전 매거진 리스트에 마우스 오버시 이미지 보이기
  for (let order = 0; order < 6; order++) {
    $('.magazine-list')
      .children()
      .eq(order)
      .mouseover(function () {
        $('.magazine > div').css(
          'background-color',
          'rgba(255, 255, 255, 0.475)'
        );
        $('.magazine-bgImg').css({
          backgroundImage: `url(./images/magazine${order}.jpg)`,
        });
        $('.magazine').css('background-color', 'transparent');
      });

    $('.magazine-list')
      .children()
      .eq(order)
      .mouseout(function () {
        $('.magazine > div').css('background-color', '#fff');
        $('.magazine-bgImg').css({
          backgroundImage: 'none',
        });
      });

    // 테블릿, 모바일 버전 매거진 리스트 클릭시 이미지 보이기
    if (window.innerWidth < 1214) {
      $('.magazine-list li')
        .children()
        .eq(order)
        .click(function () {
          $('.magazine > div').css(
            'background-color',
            'rgba(255, 255, 255, 0.475)'
          );
          $('.magazine-bgImg').css({
            backgroundImage: `url(./images/magazine${order}.jpg)`,
          });
          $('.magazine').css('background-color', 'transparent');
        });
    }
  }

  // 컬렉션 이미지 슬라이드
  let itemWidth = $('.collection-list li').width();

  function collectionNext() {
    $('.collection-list').animate({ left: -itemWidth }, 3000, function () {
      $('.collection-list>li').eq(0).appendTo('.collection-list');
      $('.collection-list').css('left', '0');
    });
  }

  setInterval(collectionNext, 3000);

  $('.right-btn').click(function () {
    collectionNext();
    return false;
  });

  // pc버전 html background-img 높이
  let allHeight = $('html').outerHeight();
  $('.background-img-pc').css('height', `${allHeight}px`);

  $(window).resize(function () {
    // pc버전 html background-img 높이
    let allHeight = $('html').outerHeight();
    $('.background-img-pc').css('height', `${allHeight}px`);

    // 모바일버전 하단 background-image 높이
    let collectionH = $('.collection').outerHeight();
    let magazineH = $('.magazine').outerHeight();
    let footerH = $('footer').outerHeight();

    $('.background-img-tablet').css(
      'height',
      `${collectionH + magazineH + footerH + 300}px`
    );
  });

  // recycle 스크롤top 자석처럼 붙이기
  $(window).scroll(function () {
    let recycleTop = $('.main-recycle').offset().top;
    let userScrollTop = $(this).scrollTop();

    $('.main-checkers').on('mousewheel', function (e) {
      var wheel = e.originalEvent.wheelDelta;

      if (wheel > 0) {
      } else {
        if (
          userScrollTop > recycleTop - 400 &&
          userScrollTop < recycleTop - 100
        ) {
          $('html').scrollTop(recycleTop);
        }
      }
    });
    $('.collection').on('mousewheel', function (e) {
      var wheel = e.originalEvent.wheelDelta;

      if (wheel > 0) {
        $('html').scrollTop(recycleTop);
      }
    });
  });

  // 모바일 버전 삼단바메뉴 클릭시 메뉴 보이기
  $('.hamburger-btn').click(function () {
    let nav = $('.nav-cover').css('display');

    if (nav == 'none') {
      $('.nav-cover').css('display', 'flex');
    }
  });

  $('.close-btn').click(function () {
    $('.nav-cover').css('display', 'none');
  });

  // search 버튼 클릭시 검색창 보이기

  $('.search-menu-btn').click(function () {
    $('.search').css('display', 'flex');
    $('.nav-cover').css('display', 'none');
  });

  $('.search-close-btn').click(function () {
    $('.search').css('display', 'none');
    if (window.innerWidth > 660) {
      $('.nav-cover').css('display', 'flex');
    }
  });

  // 윈도우 사이즈가 변경될때 네비게이션 메뉴 없애고 보이기
  $(window).resize(function () {
    if (window.innerWidth > 660) {
      $('.nav-cover').css('display', 'flex');
    } else {
      $('.nav-cover').css('display', 'none');
    }
  });
});
