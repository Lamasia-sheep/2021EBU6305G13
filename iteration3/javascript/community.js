init();

function init() {

    initSwiper(); // 初始化轮播图

    initSelectTab(); // 初始化选择栏

}

/**
 * 初始化轮播图
 */
function initSwiper() {
    new Swiper('.swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}

/**
 * 初始化选择栏
 */
function initSelectTab() {

    let _pages = document.querySelectorAll('.bolg-posts, .forum-posts');
    let _selectBtns = document.querySelectorAll('.selected-tab');

    _pages[0].style.display = 'flex';
    _selectBtns[0].classList.add('selected-tab-selected');

    _selectBtns.forEach((v, i) => {

        _selectBtns[i].addEventListener('click', () => {

            _selectBtns.forEach((v, i) => {
                _pages[i].style.display = 'none';
                _selectBtns[i].classList.remove('selected-tab-selected');
            })

            _pages[i].style.display = 'flex';
            _selectBtns[i].classList.add('selected-tab-selected');

        })

    })

}