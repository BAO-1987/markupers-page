import gsap from '../vendor/gsap.min.js';

const text = document.querySelector('.stub__title');

const splitText = (el) => {
  el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    return `<span class="word">` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
      `</span>`;
  });
  return el;
};

const split = splitText(text);

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
  TweenMax.from(el, 2.5, {
    opacity: 0,
    scale: .1,
    x: random(-300, 300),
    y: random(-200, 200),
    z: random(-300, 300),
    delay: idx * 0.02,
    repeat: 0,
  })
});
