
/*aos*/  
AOS.init({
            /*aos의 전반적인 옵션 조절*/
            duration: 600,//애니메이션 기본 속도
            once: true,//애니메이션이 처음 한번만 실행됨
            easing: "ease-in-out",//애니메이션 속도의 변화 지정.ease, ease-in, ease-pit, ease-in-out이 있다.
        });  



/*catch_btn*/        
const catchBtn = document.querySelector(".catch_btn");
        const popup = document.querySelector("#catch_popup");
        const closeBtn = document.querySelector(".close_btn");

        catchBtn.addEventListener("click", function (e) {
            e.preventDefault();
            popup.classList.add("active");
        });

        closeBtn.addEventListener("click", function () {
            popup.classList.remove("active");
        });
        const tabs = document.querySelectorAll(".tab");

        tabs.forEach(tab => {

            tab.addEventListener("click", function () {

                document.querySelectorAll(".tab").forEach(t => {
                    t.classList.remove("active");
                });

                document.querySelectorAll(".tab_content").forEach(c => {
                    c.classList.remove("active");
                });

                this.classList.add("active");

                document
                    .getElementById(this.dataset.tab)
                    .classList.add("active");

            });

        });

/*catch_btn 팝업창(하트)*/

const hearts = document.querySelectorAll("#Reviews .heart");
const savedList = document.getElementById("saved_style_list");

// 저장된 스타일 불러오기
let savedStyles =
    JSON.parse(localStorage.getItem("savedStyles")) || [];

// 화면 출력
function renderSavedStyles() {

    if (!savedList) return;

    savedList.innerHTML = "";

    savedStyles.forEach(style => {

        savedList.innerHTML += `
    <div class="saved_card">
        <img src="${style.img}" alt="">

        <div class="saved_info">
            <h3>${style.user}</h3>
            <span>${style.spec || ""}</span>
            <p>${style.store}</p>
        </div>
    </div>
`;
    });

}

// 페이지 열릴 때 불러오기
renderSavedStyles();

hearts.forEach((heart) => {

    heart.addEventListener("click", function (e) {

        e.preventDefault();

        const card = this.closest(".swiper-slide");

        const imgSrc = card.querySelector(".img").src;
        const user = card.querySelector("h2").innerHTML;
        const store = card.querySelector(".name").innerText;

        // 중복 체크
        const isExist = savedStyles.some(
            style => style.img === imgSrc
        );

        if (isExist) {
            alert("이미 저장된 스타일입니다.");
            return;
        }

        savedStyles.push({
    img: imgSrc,
    user: user,
    spec: spec,
    store: store
});

        localStorage.setItem(
            "savedStyles",
            JSON.stringify(savedStyles)
        );

        renderSavedStyles();

    });

});

/* catch_btn 팝업창(플러스) */

const plusBtns = document.querySelectorAll(".plus_button");
const savedStoreList = document.getElementById("saved_store_list");

// 저장된 매장 불러오기
let savedStores =
    JSON.parse(localStorage.getItem("savedStores")) || [];

// 화면 출력 함수
function renderSavedStores() {

    if (!savedStoreList) return;

    savedStoreList.innerHTML = "";

    savedStores.forEach(store => {

        savedStoreList.innerHTML += `
            <div class="saved_card">
                <img src="${store.img}" alt="">
                <h3>${store.name}</h3>
            </div>
        `;

    });
}

// 페이지 열릴 때 저장된 목록 출력
renderSavedStores();

plusBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const card = this.closest(".store_catch");

        const imgSrc =
            card.querySelector(".store_catch_img").src;

        const storeName =
            card.querySelector(".name").innerText;

        // 중복 체크
        const isExist = savedStores.some(
            store => store.name === storeName
        );

        if (isExist) {
            alert("이미 저장된 매장입니다.");
            return;
        }

        // 배열에 추가
        savedStores.push({
            name: storeName,
            img: imgSrc
        });

        // localStorage 저장
        localStorage.setItem(
            "savedStores",
            JSON.stringify(savedStores)
        );

        // 다시 그리기
        renderSavedStores();

    });

});/*catch 팝업창 여기까지*/