import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('#header');

backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));