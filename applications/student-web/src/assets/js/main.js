$(document).ready(function () {
  //Code so that if a li has the class active and the submenu is visible, it slides up, and vice versa. Also shows that if li doesnt has class active it will switch to that li clicked and slideup an visible submenu and dropdow the one under the li clicked
  $("#topnav a").click(function () {
    $('#botnav li').removeClass('active');
    var el = $(this).parent();
    if (el.hasClass('active') && $(this).next().is(':visible')) {
      var active = el.siblings('.active');
      $(this).next().slideUp();
    }
    else if (el.hasClass('active') && !$(this).next().is(':visible')) {
      var active = el.siblings('.active');
      $(this).next().slideDown();
    }
    else if (!el.hasClass('active')) {
      $(this).next().slideDown();
      var active = el.siblings('.active');
      active.children('ul:first').slideUp();
      active.removeClass('active');
      el.addClass('active');
    }
  });
  $('#botnav a').click(function () {
    $('li').addClass('active');
    $('#topnav li').removeClass('active');
  });

  //scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $('#scrollTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // switch tab in div course-info
  var tabs = $('.tab-nav').find('a'),
    tabContents = $('#content-tabs').children('.content-tab');

  // Switch Tab Handler
  tabs.on('click', function (e) {
    e.preventDefault();
    var contentTab = $(this).attr('href');
    //tabs btn
    tabs.removeClass('open');
    $(this).addClass('open');
    //tabs content
    tabContents.removeClass('open');
    $(contentTab).addClass('open');
  });

  //dropdown toeic in courses-info
  var panels = $('.toeic-infos');
  var panelsButton = $('.dropdown-toeic');
  // panels.hide();

  //Click dropdown
  panelsButton.click(function () {
    //get data-for attribute
    var dataFor = $(this).attr('data-for');
    var idFor = $(dataFor);

    //current button
    var currentButton = $(this);
    idFor.slideToggle(400, function () {
      //Completed slidetoggle
      if (idFor.is(':visible')) {
        currentButton.html('<i class="fas fa-chevron-up"></i>');
      }
      else {
        currentButton.html('<i class="fas fa-chevron-down"></i>');
      }
    })
  });

  //dropdown toeic in courses-info
  var panelsUnit = $('.unit-info');
  var panelsButtonUnit = $('.dropdown-unit');
  // panelsUnit.hide();

  //Click dropdown
  panelsButtonUnit.click(function () {
    //get data-for attribute
    var dataForUnit = $(this).attr('data-for');
    var idForUnit = $(dataForUnit);

    //current button
    var currentButtonUnit = $(this);
    idForUnit.slideToggle(400, function () {
      //Completed slidetoggle
      if (idForUnit.is(':visible')) {
        currentButtonUnit.html('<i class="fas fa-chevron-up"></i>');
      }
      else {
        currentButtonUnit.html('<i class="fas fa-chevron-down"></i>');
      }
    })
  });

  //dropdown topic in home-page mobile
  var panelsUnit = $('.topic-infos');
  var panelsButtonUnit = $('.dropdown-topic');
  panelsUnit.hide();

  //Click dropdown
  panelsButtonUnit.click(function () {
    //get data-for attribute
    var dataForUnit = $(this).attr('data-for');
    var idForUnit = $(dataForUnit);

    //current button
    var currentButtonUnit = $(this);
    idForUnit.slideToggle(400, function () {
      //Completed slidetoggle
      if (idForUnit.is(':visible')) {
        currentButtonUnit.html('<i class="fas fa-chevron-down"></i>');
      }
      else {
        currentButtonUnit.html('<i class="fas fa-chevron-right"></i>');
      }
    })
  });


  function update() {
    if (!mytrack.ended) {
      var playedMinutes = parseInt(mytrack.currentTime / 60);
      var playedSeconds = pad(parseInt(mytrack.currentTime % 60));
      currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
      var size = parseInt(mytrack.currentTime * barSize / mytrack.duration);
      progressBar.style.width = size + "px";

    }
    else {
      currentTime.innerHTML = "0.00";
      playButton.innerHTML = "▶";
      window.clearInterval(updateTime);
      progressBar.style.width = "0px";
    }
  }


  function clickedBar(e) {
    if (!mytrack.ended) {
      var mouseX = e.pageX - bar.offsetLeft;
      var newTime = mouseX * mytrack.duration / barSize;

      mytrack.currentTime = newTime;
      progressBar.style.width = mouseX + 'px';
    }
  }

  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  $("li.nav-item").click(function (e) {
    e.preventDefault();
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
});
  // from 0 to N
  function animationOfCount() {
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 2000,
            easing: $(this).data("esing"),
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
  }