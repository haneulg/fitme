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
const swipers = document.querySelectorAll('.store_card');

swipers.forEach(el => {
    new Swiper(el, {
        navigation:{
            nextEl: el.querySelector('.srote_next'),
            prevEl: el.querySelector('.srote_prev')
        }
    });
});


/*interview*/

// 인터뷰 목록(tr) 모두 선택
const items = document.querySelectorAll('.interview_item');

// 상단에 변경될 요소들 선택
const mainImg = document.getElementById('mainImg');
const mainDate = document.getElementById('mainDate');
const mainTitle = document.getElementById('mainTitle');
const mainDesc = document.getElementById('mainDesc');

// 각 인터뷰 목록 클릭 시 내용 변경
items.forEach(item => {

    item.addEventListener('click', () => {

        // 이미지 교체 전 살짝 페이드아웃
        mainImg.style.opacity = '0';

        setTimeout(() => {

            // data-img 값으로 메인 이미지 변경
            mainImg.src = item.dataset.img;

            // data-date 값으로 날짜 변경
            mainDate.textContent = item.dataset.date;

            // data-title 값으로 제목 변경
            mainTitle.textContent = item.dataset.title;

            // data-desc 값으로 인터뷰 정보 변경
            mainDesc.textContent = item.dataset.desc;

            // 이미지 다시 보이기
            mainImg.style.opacity = '1';

        }, 150);

    });

});


// 비디오연결
const monthlyItems = document.querySelectorAll("#manthly .july");

monthlyItems.forEach(item => {

    const video = item.querySelector(".store_video");

    item.addEventListener("mouseenter", () => {
        video.play();
    });

    item.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;   // 처음부터 다시
    });

});





/*==================================
        Filter Button Active
==================================*/

const filterBtns = document.querySelectorAll(".filter .tags button");

filterBtns.forEach((btn) => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        // 현재 버튼이 속한 그룹
        const group = this.closest(".tags");

        // 같은 그룹의 active 제거
        group.querySelectorAll("button").forEach((button) => {
            button.classList.remove("active");
        });

        // 현재 버튼 active
        this.classList.add("active");

    });

});


//스토어 돋보기 누르면 팝업창
const popupBtns = document.querySelectorAll(".popup_btn");

popupBtns.forEach(function(btn){

    btn.addEventListener("click",function(){

        const popupId = this.dataset.popup;

        document.getElementById(popupId).classList.add("active");

    });

});

// 닫기버튼
const closeBtns = document.querySelectorAll(".store_close_btn");

closeBtns.forEach(function(btn){

    btn.addEventListener("click",function(){

        this.closest(".store_popup").classList.remove("active");

    });

});