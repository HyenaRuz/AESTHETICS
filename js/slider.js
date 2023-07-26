let slides = document.querySelectorAll('.slider-item');
let dotsList = document.createElement('ul');
dotsList.classList.add('slider__dots');

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('li');
    dot.classList.add('slider__dot');
    let btn = document.createElement('button');
    btn.classList.add('slider__dot-btn');
    btn.innerText = i + 1;

    btn.onclick = function () {
        document.querySelector('.slider-item.active').classList.remove('active');
        slides[i].classList.add('active')
    };

    dot.appendChild(btn);
    dotsList.appendChild(dot);
}

document.querySelector('.slider').appendChild(dotsList);

slides.forEach(slide => {
    slide.onclick = function () {
        if (event.offsetX > event.target.offsetWidth / 2) {
            if (event.target.nextElementSibling) {
                event.target.classList.remove('active');
                event.target.nextElementSibling.classList.add('active');
            } 
        } else {
            if (event.target.previousElementSibling) {
                event.target.classList.remove('active');
                event.target.previousElementSibling.classList.add('active');
            }
        };
    };
});

// slides[0].classList.remove('active');
// slides[1].classList.add('active');