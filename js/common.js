'use strict';

document.addEventListener("DOMContentLoaded", function(){

  // search btn - area toggle
  const searchBtn = document.querySelector('#header .search');
  const searchWrap = document.querySelector('.search-wrap');
  const searchCloseBtn = searchWrap.querySelector('.close');
  searchBtn.addEventListener('click', function(){
    searchWrap.classList.add('on');
    document.body.style.overflow = 'hidden';
  })
  searchCloseBtn.addEventListener('click', function(){
    searchWrap.classList.remove('on');
    document.body.style.overflow = 'auto';
  })

  // all menu toggle
  const allMenuBtn = document.querySelector('.all-menu');
  const allMenuWrap = document.querySelector('.all-menu-wrap');
  const allMenuCloseBtn = document.querySelector('#header .close');

  allMenuBtn.addEventListener('click', function(){
    headerWrap.classList.add('dark');
    allMenuWrap.classList.add('on');
    document.body.style.overflow = 'hidden';
    headerWrap.classList.remove('on');
    navWrap.classList.remove('on');
  });

  allMenuCloseBtn.addEventListener('click', function(){
    headerWrap.classList.remove('dark');
    allMenuWrap.classList.remove('on');
    document.body.style.overflow = 'auto';
  });

  // nav toggle
  const navLi = document.querySelectorAll('#gnb>li');
  const navWrap = document.querySelector('.gnb-all-wrap');
  const navList = document.querySelectorAll('.gnb-list');
  const navListLi = document.querySelectorAll('.gnb-list>ul>li');
  const headerWrap = document.querySelector('#header-wrap');
  navLi.forEach((item,index) => {
    item.addEventListener('mouseenter', function(){
      headerWrap.classList.add('on');
      item.classList.add('on');
    });
    item.addEventListener('mouseleave',function(){
      item.classList.remove('on');
    })
    item.addEventListener('mouseover',function(){
      navWrap.classList.add('on');
      navList.forEach((i) => {
        i.classList.remove('on');
      })
      navList[index].classList.add('on');
    });
  });
  navListLi.forEach(item => {
    item.addEventListener('mouseover',function(){
      item.classList.add('on');
    });
    item.addEventListener('mouseleave',function(){
      item.classList.remove('on');
    });
  });
  navList.forEach((item,index) => {
    item.addEventListener('mouseover',function(){
      navLi[index].classList.add('on');
    })
    item.addEventListener('mouseleave',function(){
      navLi[index].classList.remove('on');
    })
  })
  headerWrap.addEventListener('mouseleave', function(){
    headerWrap.classList.remove('on');
    navWrap.classList.remove('on');
  });

  // scroll up down event
  let before = 0;
  window.addEventListener('scroll',(ev)=>{
    if(window.scrollY <= 4){
      headerWrap.classList.remove('on');
      headerWrap.classList.add('fixed');
    }else if(before < window.scrollY) {
      headerWrap.classList.remove('fixed');
    }else {
      headerWrap.classList.add('fixed');
      headerWrap.classList.add('on');
      headerWrap.addEventListener('mouseleave', function(){
        if(window.scrollY > 3){
          headerWrap.classList.remove('fixed');
        };
      });
    };
  	before = window.scrollY;
  });

  // Main Img Slide
  // const mainImg = document.querySelector('.main-img-wrap');
  // const pageNow = document.querySelector('.btn-box .now');
  // let count = 1;
  // let slideWidth = 100 / 6;
  // let autoSlide = setInterval(nextSlide, 3000);
  // function nextSlide(){
  //   if(count == 6){
  //     clearInterval(autoSlide);
  //     return;
  //   }
  //   mainImg.style.transform = `translateX(${-count*slideWidth}%)`;
  //   mainImg.style.transition = 'transform 0.8s ease-in-out';
  //   count++;
  //   pageNow.innerText = count;
  // };
  //
  const playPauseBtn = document.querySelector('.btn-wrap .pause');
  playPauseBtn.addEventListener('click', function(){
    if(this.className == 'pause'){
      swiper.autoplay.stop();
      this.className = 'play';
      this.children[0].className = 'fa-solid fa-play';
    }else if(this.className == 'play'){
      swiper.autoplay.start();
      this.className = 'pause';
      this.children[0].className = 'fa-solid fa-pause';
    }
  });


});
