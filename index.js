'use strict'


//слайдер
const wrapper = document.querySelector('.slider_wrapper')

const slider = document.querySelector('.slider')

const slide_quantity = slider.children.length

const slider_items = document.getElementsByClassName('.slide')

const sldde_img = document.querySelector('.slide__img')

const slide_img_width = document.querySelector('.slide').getBoundingClientRect().width

const step = slide_img_width

wrapper.style.width = slide_img_width + 'px'


//кнопки 
const next_button = document.querySelector('.slider_next')

const prev_button = document.querySelector('.slider_prev')

let position = 0

const slideNext = () => {
    position -= step

    if( position <= -(slide_quantity* slide_img_width)) {
      position = 0
    }

    slider.style.transform = `translateX(${position}px)`;
    
}

next_button.addEventListener('click', slideNext)

const slidePrev = () => {
  position += step

  if( position >= step) {
    position = -(slide_quantity * slide_img_width - step)
  }

  slider.style.transform = `translateX(${position}px)`;
}

prev_button.addEventListener('click', slidePrev)

//автоплей
//  let timer = setInterval(slideNext, 2000) //время в миллисекундах (1 к 1000)


//  $(document).ready(() => timer)
