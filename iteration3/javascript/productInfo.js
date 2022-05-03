let _sub = document.querySelector('.select-number-sub');
let _add = document.querySelector('.select-number-add');
let _input = document.querySelector('.select-number-input');
let _count = 1;

_input.value = _count;

_sub.addEventListener('click', () => {
    if (_count === 1) return;
    _count--;
    _input.value = _count;
})

_add.addEventListener('click', () => {
    _count++;
    _input.value = _count;
})

function inputChange() {
    _count = parseInt(_input.value);
}

function orderNow() {
    alert('order now! count: ' + _count)
}