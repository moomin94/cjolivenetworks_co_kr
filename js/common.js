'use strict';

document.addEventListener("DOMContentLoaded", function(){

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
  
  // Main Img Slide
  const mainImg = document.querySelector('.main-img-wrap');
  const playPauseBtn = document.querySelector('.btn-box .pause');
  const pageNow = document.querySelector('.btn-box .now');
  let count = 1;
  let slideWidth = 100 / 6;
  let autoSlide = setInterval(nextSlide, 3000);
  function nextSlide(){
    if(count == 6){
      clearInterval(autoSlide);
      return;
    } 
    mainImg.style.transform = `translateX(${-count*slideWidth}%)`;
    mainImg.style.transition = 'transform 0.8s ease-in-out';
    count++;
    pageNow.innerText = count;
  };

  playPauseBtn.addEventListener('click', function(){
    if(this.className == 'pause'){
      this.className = 'play';
      this.children[0].className = 'fa-solid fa-play';
      clearInterval(autoSlide);
    }else if(this.className == 'play'){
      clearInterval(autoSlide);
      this.className = 'pause';
      this.children[0].className = 'fa-solid fa-pause';
      autoSlide = setInterval(nextSlide, 3500);
    }
  });

  
});