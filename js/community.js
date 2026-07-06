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
        
        



/* =========================================

        REVIEW 대표 이미지 변경

========================================= */

// 모든 리뷰 목록 선택
const reviewItems = document.querySelectorAll(".review_item");

// 대표 이미지
const reviewMainImg = document.getElementById("reviewMainImg");

// 작성자
const reviewUser = document.getElementById("reviewUser");

// 키 / 몸무게
const reviewSpec = document.getElementById("reviewSpec");

// 리뷰 내용
const reviewText = document.getElementById("reviewText");

// 매장명
const reviewStore = document.getElementById("reviewStore");


// =========================================
// 리뷰 클릭
// =========================================

reviewItems.forEach(item=>{

    item.addEventListener("click",()=>{

        // 이미지 페이드 아웃
        reviewMainImg.style.opacity="0";

        // 0.15초 후 내용 변경
        setTimeout(()=>{

            // 대표 이미지 변경
            reviewMainImg.src=item.dataset.img;

            // 작성자 변경
            reviewUser.textContent=item.dataset.user;

            // 키/몸무게 변경
            reviewSpec.textContent=item.dataset.spec;

            // 리뷰 변경
            reviewText.textContent=item.dataset.text;

            // 매장명 변경
            reviewStore.textContent=item.dataset.store;

            // 다시 나타남
            reviewMainImg.style.opacity="1";

        },150);

    });

});



/* =======================================
   Community 리뷰 하트 저장
======================================= */

const reviewHeart = document.querySelector("#review .heart");

if(reviewHeart){

    reviewHeart.addEventListener("click",function(e){

        e.preventDefault();

        // 현재 메인 리뷰 정보 가져오기
        const imgSrc = document.getElementById("reviewMainImg").src;
const user = document.getElementById("reviewUser").textContent;
const store = document.getElementById("reviewStore").textContent;
const spec = document.getElementById("reviewSpec").textContent;

        // 이미 저장되어 있는지 확인
        const isExist = savedStyles.some(
            style => style.img === imgSrc
        );

        if(isExist){
            alert("이미 저장된 스타일입니다.");
            return;
        }

        // 저장
        savedStyles.push({
    img: imgSrc,
    user: user,
    spec: spec,
    store: store
});
        // localStorage 업데이트
        localStorage.setItem(
            "savedStyles",
            JSON.stringify(savedStyles)
        );

        // Catch 팝업 다시 그리기
        renderSavedStyles();

    });

}




// 돋보기 누르면 팝업창
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
