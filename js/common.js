'use strict';

document.addEventListener("DOMContentLoaded", function(){

  // prevent a
  document.querySelectorAll('a').forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
    });
  });

  // top btn
  const topBtn = document.querySelector('.top-btn');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 450){
      topBtn.classList.add('on');
    }else{
      topBtn.classList.remove('on');
    };
    topBtn.addEventListener('click', function(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  });

  // search btn - area toggle
  const searchBtn = document.querySelector('#header .search');
  const searchWrap = document.querySelector('.search-wrap');
  const searchCloseBtn = searchWrap.querySelector('.close');
  searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchWrap.classList.add('on');
  })
  searchCloseBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchWrap.classList.remove('on');
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
  window.addEventListener('scroll',()=>{
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

  // main slide play & pause btn
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

  //width change event
  const sectionFirst = document.querySelector('section#first');
  const aiWrap = document.querySelector('.ai-wrap');
  window.addEventListener('scroll',()=>{
      let scrollTop = window.scrollY;
      let widthNum = scrollTop / (sectionFirst.offsetHeight) * 100;
      aiWrap.style.width = widthNum + '%';
      if(scrollTop >= sectionFirst.offsetHeight){
        aiWrap.style.width = '100%';
      };
  });

  // AI area text-wrap animation
  const aiTitle = document.querySelector('section#first .text-wrap > h3');
  const aiText = document.querySelector('section#first .text-wrap > p');
  const aiBtn = document.querySelector('section#first .text-wrap > a');
  const contTitle = document.querySelector('section#second .text-wrap > h3');
  const contText = document.querySelector('section#second .text-wrap > p');
  const contBtn = document.querySelector('section#second .text-wrap > a');
  window.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY;
      if(scrollTop >= aiWrap.offsetTop + 500){
        aiTitle.classList.add('on');
        aiText.classList.add('on');
        aiBtn.classList.add('on');
        // aiText.classList.add('on');
        // aiBtn.classList.add('on');
      }else{
        aiTitle.classList.remove('on');
        aiText.classList.remove('on');
        aiBtn.classList.remove('on');
      }
      if(scrollTop >= document.querySelector('section#second').offsetTop - 500){
        contTitle.classList.add('on');
        contText.classList.add('on');
        contBtn.classList.add('on');
      }else{
        contTitle.classList.remove('on');
        contText.classList.remove('on');
        contBtn.classList.remove('on');
      }
  });

  // third section core-wrap text opacity change
  // third section service-wrap text opacity change
  const thirdSection = document.querySelector('section#third');
  const coreTitle = document.querySelector('.core-wrap .title-area');
  const coreList = document.querySelectorAll('.core-list li');
  const serviceList = document.querySelectorAll('.service-list li');
  window.addEventListener('scroll', function(){
    if(window.scrollY >= thirdSection.offsetTop - window.outerHeight/2) {
      coreTitle.classList.add('on');
    }else{
      coreTitle.classList.remove('on');
    };
    coreList.forEach(function(item){
      if(window.scrollY >= item.offsetTop + thirdSection.offsetTop - window.outerHeight/2){
        item.classList.add('on');
      }else{
        item.classList.remove('on');
      }
    });
    serviceList.forEach(function(item){
      if(window.scrollY >= item.offsetTop + thirdSection.offsetTop - window.outerHeight/2){
        item.classList.add('on');
      }else{
        item.classList.remove('on');
      }
    });
  });

  // third section service-wrap bg-color change
  const serviceWrap = document.querySelector('.service-wrap');
  window.addEventListener('scroll', function(){
    if(window.scrollY >= serviceWrap.offsetTop + thirdSection.offsetTop) {
      thirdSection.classList.add('on');
      serviceWrap.classList.add('on');
    }else{
      thirdSection.classList.remove('on');
      serviceWrap.classList.remove('on');
    }
  });

  // footer select box toggle
  const select = document.querySelectorAll('.select');
  select.forEach(function(item){
    item.addEventListener('click', function(){
      item.classList.toggle('on');
    })
  })

});
