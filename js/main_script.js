/*header*/
document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
    const mainBanner = document.getElementById("main_banner");

    let lastScroll = 0;

    window.addEventListener("scroll", function () {

        let currentScroll = window.pageYOffset;

        // 메인배너 높이
        let bannerHeight = mainBanner.offsetHeight;

        // 메인배너 안에 있을 때
        if (currentScroll <= bannerHeight) {
            header.classList.remove("hide");
            lastScroll = currentScroll;
            return;
        }

        // 아래로 스크롤
        if (currentScroll > lastScroll) {
            header.classList.add("hide");
        }

        // 위로 스크롤
        else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

});





/*Initialize Swiper*/
var swiper = new Swiper('.styling', {
    slidesPerView: 5,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    loop: true,
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

/*지도*/
const points = document.querySelectorAll(".point");
const infoBoxes = document.querySelectorAll(".info-box");

points.forEach(function (point) {

    point.addEventListener("mouseenter", function () {

        // 점 active 제거
        points.forEach(function (item) {
            item.classList.remove("active");
        });

        // 내용 숨김
        infoBoxes.forEach(function (box) {
            box.classList.remove("active");
        });

        // 현재 점 활성화
        point.classList.add("active");

        // 연결된 내용 표시
        const target = point.dataset.target;

        document
            .querySelector("#" + target)
            .classList.add("active");

    });

});

/*그래프*/
const tracks = document.querySelectorAll('.graph-track');
const maxCell = 20; // 그래프 전체 칸 개수

tracks.forEach((track, rowIndex) => {
    const count = Number(track.dataset.count); // 채워질 칸 개수
    const color = track.dataset.color; // 그래프 색상

    for (let i = 0; i < maxCell; i++) {
        const cell = document.createElement('span');

        cell.classList.add('graph-cell');
        cell.style.setProperty('--bar-color', color);

        if (i < count) {
            cell.classList.add('on');
            cell.style.setProperty('--delay', i + rowIndex * 4);
        }

        track.appendChild(cell);
    }
});

const graphSection = document.querySelector('.graph-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            graphSection.classList.add('active');
            observer.unobserve(graphSection);
        }
    });
}, {
    threshold: 0.3
});

observer.observe(graphSection);

/*Reviews*/
var swiper = new Swiper('.reviews', {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
        nextEl: '.Reviews_next',
        prevEl: '.Reviews_prev',
    },
    loop: true,
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}


/*project*/
var swiper = new Swiper(".project", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,
});



/* Fitme_styling */
// 돋보기 누르면 팝업창
const popupBtns = document.querySelectorAll(".popup_btn");

popupBtns.forEach(function (btn) {

    btn.addEventListener("click", function () {

        const popupId = this.dataset.popup;

        document.getElementById(popupId).classList.add("active");

    });

});

// 닫기버튼
const closeBtns = document.querySelectorAll(".store_close_btn");

closeBtns.forEach(function (btn) {

    btn.addEventListener("click", function () {

        this.closest(".store_popup").classList.remove("active");

    });

});



/*Initialize Swiper*/
const swipers = document.querySelectorAll('.store_card');

swipers.forEach(el => {
    new Swiper(el, {
        navigation: {
            nextEl: el.querySelector('.srote_next'),
            prevEl: el.querySelector('.srote_prev')
        }
    });
});
