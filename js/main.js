$(function () {
  let allHeight = $('html').outerHeight();
  $('.background-img').css('height', allHeight);

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
          backgroundImage: `url(/images/magazine${order}.jpg)`,
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
  }

  let itemWidth = $('.collection-list li').width();
  function product_next() {
    $('.collection-list').animate({ left: -itemWidth }, 3000, function () {
      $('.collection-list>li').eq(0).appendTo('.collection-list');
      $('.collection-list').css('left', '0');
    });
  }

  let clear1 = setInterval(product_next, 3000);

  $('.right-btn').click(function () {
    product_next();
    return false;
  });

  // product_next();
  // $(window).scroll(function () {
  //   let userScroll = $(this).scrollTop();
  //   let recycle = $('.main-recycle').offset().top;
  //   console.log(userScroll);
  //   if (userScroll > recycle) {
  //     let recycleImg = $('.main-recycle-img').offset().top;
  //     $('html').scrollTop(recycleImg);
  //     $('.main-recycle-img').eq(0).hide();
  //     $('.main-recycle-img').eq(1).show();
  //   }

  //   if (userScroll < recycle) {
  //     $('html').scrollTop(userScroll);
  //   }
  // });
});
