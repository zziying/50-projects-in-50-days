const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
const blurring = () => {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const int = setInterval(blurring, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}