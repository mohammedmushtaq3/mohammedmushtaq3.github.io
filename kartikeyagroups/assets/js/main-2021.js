$(document).ready(function () {
  // marquee
  if ($(".marquee").length) {
    let tickerSpeed = 0.75;
    let flickity = null;
    let isPaused = false;
    const slideshowEl = document.querySelector(".marquee ul");

    const update = function () {
      if (isPaused) return;
      if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    const pause = function () {
      isPaused = true;
    };

    const play = function () {
      if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: false,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      cellAlign: "center",
      selectedAttraction: 0.015,
      friction: 0.25,
    });

    flickity.x = 0;

    slideshowEl.addEventListener("mouseenter", pause, false);
    slideshowEl.addEventListener("focusin", pause, false);
    slideshowEl.addEventListener("mouseleave", play, false);
    slideshowEl.addEventListener("focusout", play, false);

    flickity.on("dragStart", function () {
      isPaused = true;
    });

    update();
  }
  /*-- end copyrighted content --*/
  gsap.registerPlugin(ScrollTrigger, EasePack);

  // 1. pin scene using gsap scroll
  if ($("#opening-scene").length) {
    ScrollTrigger.create({
      trigger: "#opening-scene",
      start: 0,
      end: $(window).height() * 1.5,
      pin: "#opening-scene",
      scrub: true,
      toggleClass: { targets: ".banner-bg, .mtn-icon", className: "hide" },
    });
    gsap.to(".tower", {
      scale: 3.0,
      y: "-50%",
      x: "-15%",
      ease: ExpoScaleEase.config(1, 3.5, Power2.easeInOut),
      scrollTrigger: {
        start: 0,
        end: $(window).height() * 1.5,
        scrub: true,
      },
    });
    gsap.to(".background", {
      scale: 2.5,
      y: "-30%",
      ease: ExpoScaleEase.config(1, 2, Power2.easeInOut),
      scrollTrigger: {
        start: 0,
        end: $(window).height() * 1.5,
        scrub: true,
      },
    });
    gsap.to(".background2", {
      scale: 1.25,
      y: "18%",
      ease: ExpoScaleEase.config(1, 1.75, Power2.easeInOut),
      scrollTrigger: {
        start: 0,
        end: $(window).height() * 1.5,
        scrub: true,
      },
    });
    gsap.to(".sky", {
      x: "2%",
      ease: Power2.easeInOut,
      scrollTrigger: {
        start: 0,
        end: $(window).height() * 1.5,
        scrub: true,
      },
    });
  }
  ScrollTrigger.create({
    trigger: "#footer",
    start: "top bottom",
    scrub: true,
    toggleClass: { targets: ".ind, .mtn-icon", className: "hide" },
  });

  // draw lines on callouts
  if ($(".lines-callout").length) {
    /*
  $('.draw-line path').each(function(item){
      var thisLine = $(this);
    var lineLength = item.getTotalLength();
    $(this).css("stroke-dasharray", lineLength);
    $(this).css("stroke-dashoffset", lineLength);

      var parent = $(this).parent().parent('.line-wrap');
      gsap.to($(this), {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: parent,
          scrub: true
        }
      });

  });
*/
  }
  /*
$('.btn.draw-circle').each(function(item){
    var thisLine = $(this).find('path');
    var lineLength = thisLine.getTotalLength();
    thisLine.css("stroke-dasharray", lineLength);
    thisLine.css("stroke-dashoffset", lineLength);

      var parent = $(this);
      gsap.to(thisLine, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: parent,
          scrub: true,
          reverse:false
        }
      });

  });
*/

  // custom cursor follow

  if ($("html").hasClass("no-touchevents")) {
    if ($(".cursor").length) {
      /* --
       * follow cursor adapted from codepen --
       * Copyright (c) 2021 by Pierre Vion (https://codepen.io/pierrinho/pen/zmLdwZ)
       */

      Array.prototype.forEach.call(document.querySelectorAll("[data-color]"), function (media) {
        const circle = document.querySelector(".cursor");
        const color = media.getAttribute("data-color");
        TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

        media.addEventListener("pointerenter", function (e) {
          TweenMax.to(circle, 0.3, { scale: 1, opacity: 1, background: color });
          positionCircle(e, media, circle);
        });

        media.addEventListener("pointerleave", function (e) {
          TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
          positionCircle(e, media, circle);
        });
      });

      document.querySelector('[data-parent="cursor"]').addEventListener("pointermove", function (e) {
        positionCircle(e);
      });
      function positionCircle(e) {
        var rect = document.querySelector('[data-parent="cursor"]').getBoundingClientRect();
        var relX = e.pageX - rect.left;
        var relY = e.pageY - rect.top - window.scrollY;
        TweenMax.to(".cursor", 0.15, { x: relX, y: relY });
      }
    }
  }

  // parallax featured items
  if ($("html").hasClass("no-touchevents")) {
    if ($('[data-parent="parallax-block"]').length) {
      const parallaxBlocks = gsap.utils.toArray(".parallax-block");
      parallaxBlocks.forEach(function (block) {
        var winWidth = $(window).width();
        var parent = block.closest('[data-parent="parallax-block"]');
        if (winWidth > 768) {
          var depth = block.dataset.depth;
        } else {
          var depth = block.dataset.depth768;
        }

        const movement = -(block.offsetHeight * depth);
        if (depth != 0) {
          gsap.to(block, {
            scrollTrigger: {
              trigger: parent,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              force3D: true,
              invalidateOnRefresh: true,
            },
            y: movement,
            ease: "none",
          });
        } else {
          //ScrollTrigger.kill(true);
          console.log("killed");
        }
      });

      document.addEventListener("resize", function (e) {
        ScrollTrigger.refresh();
      });

      /*

           const parallaxBlocks = gsap.utils.toArray('.parallax-block');
          parallaxBlocks.forEach(block => {
              var parent = block.closest('[data-parent="parallax-block"]');
              const depth = block.dataset.depth;
              const movement = -(block.offsetHeight * depth);

              gsap.to(block, { 
                scrollTrigger: {
                  trigger: parent,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                  force3D:true
                },
               y: movement, 
               ease: "none"
            });
               });
  
*/
    }
  }
});
