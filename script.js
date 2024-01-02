function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  // --- RED PANEL ---



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}



locomotiveScroll()





function cursorFuctionality() {
  var pageContent = document.querySelector(".content");
  var cursor = document.querySelector(".cursor");



  pageContent.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      x: e.x,
      y: e.y
    })
  })


  pageContent.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    })
  })


  pageContent.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    })
  })

}


cursorFuctionality()




function page5CursorFunctionality() {
  var pageContent = document.querySelector(".page5");
  var cursor = document.querySelector(".page5-cursor");

  if (pageContent && cursor) { 

    pageContent.addEventListener("mousemove", function (e) {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
     
       
      });
    });

    pageContent.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      
      });
    });

    pageContent.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      
      });
    });

  }
}

page5CursorFunctionality();





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
 
});




  var timeLine=gsap.timeline()


timeLine.from(".loader h3"
, {
  x:10,
 
  opacity:0,
  stagger:0.3,
}

)

timeLine.to(".loader h3",{
  x:-50,
  opacity:0,
  stagger:0.3,
})


timeLine.to(".loader",{
 
  opacity:0,

})

timeLine.to(".loader",{
  display:'none',
  
})


timeLine.from(".main-text span",{
  y:200,
  opacity:0,
  stagger:0.1,
})







