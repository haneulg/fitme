
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


/*여기서 부터 수정*/
/*catch_btn 팝업창(하트)*/

const hearts = document.querySelectorAll(".heart");
const savedList = document.getElementById("saved_style_list");

// 카드(이미지 + 닉네임 + 매장명을 담고 있는 부모)를 클래스명 상관없이 찾아 올라가는 함수
function findStyleCard(el) {
    let node = el.parentElement;

    while (node) {
        if (node.querySelector(".img") && node.querySelector("h2") && node.querySelector(".name")) {
            return node;
        }
        node = node.parentElement;
    }

    return null;
}

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

        const card = findStyleCard(this);

        if (!card) return; // 카드 구조를 못 찾으면 조용히 무시 (에러 방지)

        const imgSrc = card.querySelector(".img").src;

        const h2 = card.querySelector("h2");
        const specEl = h2.querySelector("span");
        const spec = specEl ? specEl.innerText : "";
        const user = specEl ? h2.firstChild.textContent.trim() : h2.innerText.trim();

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

// 카드(이미지+이름을 담고 있는 부모)를 클래스명 상관없이 찾아 올라가는 함수
function findStoreCard(el) {
    let node = el.parentElement;

    while (node) {
        if (node.querySelector(".store_catch_img") && node.querySelector(".name")) {
            return node;
        }
        node = node.parentElement;
    }

    return null;
}

// 저장된 매장 불러오기
let savedStores =
    JSON.parse(localStorage.getItem("savedStores")) || [];

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

renderSavedStores();

plusBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const card = findStoreCard(this);

        if (!card) return; // 카드 구조를 못 찾으면 조용히 무시 (에러 방지)

        const imgSrc = card.querySelector(".store_catch_img").src;
        const storeName = card.querySelector(".name").innerText;

        const isExist = savedStores.some(
            store => store.name === storeName
        );

        if (isExist) {
            alert("이미 저장된 매장입니다.");
            return;
        }

        savedStores.push({
            name: storeName,
            img: imgSrc
        });

        localStorage.setItem(
            "savedStores",
            JSON.stringify(savedStores)
        );

        renderSavedStores();

    });

});

/*수정끝*/