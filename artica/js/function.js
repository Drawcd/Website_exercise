/**
 * Created by Administrator on 2017-07-19.
 */

$(function() {

  // gnb
  $('.btn-menu-toggle').data({
    'open': 'false'
  }).on('click', function() {

    if ($(this).data('open') == 'false') {

      $('.gnb').css({
        right: 0
      });
      $(this).data({
        'open': 'true'
      });

    } else {

      $('.gnb').css({
        right: -340
      });
      $(this).data({
        'open': 'false'
      });

    }

  });

  $('.btn-menu-close').on('click', function() {
    $('.gnb').css({
      right: -340
    });
    $('.btn-menu-toggle').data({
      'open': 'false'
    });
  });

  $('.gnb-link').on('click', function(e) {

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    $('body').stop().animate({
      scrollTop: scrollPosition
    });

  });









  // portfolio list

  var prevLineNumber = -1; // 리스트 상세내용이 선택되어 보이지 않는 상태

  $('.pofol-list-item>.thumb').on('click', function() {
    var indexNumber = $(this).parent().index('.pofol-list-item');
    var lineNumber = Math.floor(indexNumber / 4);
    var detailTop = parseInt($('.detail-wrap').css('top')) + (lineNumber * 230);
    if (prevLineNumber == -1) {

      $(this).next().css({
        top: detailTop,
        height: 486,
        transition: 'height 1s ease-out'
      });

      for (var k = 0; k <= 3; k++) {
        $('.pofol-list-item').eq(lineNumber * 4 + k).css({
          'padding-bottom': 490
        });
      }

      prevLineNumber = lineNumber;

    } else if (prevLineNumber == lineNumber) {

      $('.detail-wrap').css({
        height: 0,
        // transition: 'none'
      });

      $(this).next().css({
        top: detailTop,
        height: 486
      });

      for (var l = 0; l <= 3; l++) {
        $('.pofol-list-item').eq(lineNumber * 4 + l).css({
          'padding-bottom': 490
        });
      }

      prevLineNumber = lineNumber;

    } else {

      $('.detail-wrap').css({
        height: 0,
        transition: 'height 1s ease-out'
      });

      for (var j = 0; j <= 3; j++) {
        $('.pofol-list-item').eq(prevLineNumber * 4 + j).css({
          'padding-bottom': 0
        });
      }

      $(this).next().css({
        top: detailTop,
        height: 486
      });

      for (var i = 0; i <= 3; i++) {
        $('.pofol-list-item').eq(lineNumber * 4 + i).css({
          'padding-bottom': 490
        });
      }

      prevLineNumber = lineNumber;

    }

    /*
               if( indexNumber >= 0 && indexNumber <=3 ){
                 for(var i=0; i<=3; i++){
                  $('.pofol-list-item').eq(i).css({'padding-bottom' : 490});
                }
              } else if( indexNumber >= 4 && indexNumber <= 7 ){
                for(var j=4; j<=7; j++){
                  $('.pofol-list-item').eq(j).css({'padding-bottom' : 490});
                }
              }
          */

  });

  $('.pofol-list-item .btn-pop-close').on('click', function() {

    var indexNumber = $(this).parents('.pofol-list-item').index('.pofol-list-item');

    var lineNumber = Math.floor(indexNumber / 4);

    $('.detail-wrap').css({
      height: 0
    });

    for (var k = 0; k <= 3; k++) {
      $('.pofol-list-item').eq(lineNumber * 4 + k).css({
        'padding-bottom': 0
      });
    }

  });









  // about us - my story
  $('.item-photo-mask').on('click', function() {

    $('.item-story-wrap').css({
      height: 0
    });

    $(this).parent().next().css({
      height: 279,
      transition: 'height 1s ease-out'
    });

    $('.section5').css({
      'padding-bottom': 279,
      transition: 'padding-bottom 1s ease-out'
    });

    $('.js-item-story-close').one('click', function() {
      $(this).parents('.item-story-wrap').css({
        height: 0,
        transition: 'height 1s ease-out'
      });

      $('.section5').css({
        'padding-bottom': 0,
        transition: 'padding-bottom 1s ease-out'
      });

    });

  });

  // our skills
  // bar graph
  $('.skill-list').on('click', function() {
    var barAmount = ['p90', 'p80', 'p93', 'p85'];
    // each 매개변수 ( i , xx) 두개를 넣을 경우 i= 인덱스 번호 xx=인덱스값
    $('.skill-list-item>.bar').each(function(index) {
      $(this).addClass(barAmount[index]);
    });
  });

  // number count
  $('.career-list').on('click', function() {
    var count = 0;
    var countTime = setInterval(function() {
      if (count <= 230) {
        $('.career-number').eq(0).text(count);
      }
      if (count <= 22) {
        $('.career-number').eq(1).text(count);
      }
      if (count <= 2380) {
        $('.career-number').eq(2).text(count);
      }
      if (count <= 5890) {
        $('.career-number').eq(3).text(count);
      }
      if (count > 50890) {
        clearInterval(countTime);
      }
      count++;
    }, 20);

  });

  // inview
  $('.section5').on('inview', function(visible) {
    console.log(visible);
  });



  //End
});
