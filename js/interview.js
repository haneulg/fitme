/* ===========================
   인터뷰 게시글 목록
   - 새 게시글을 추가할 때는 아래에 객체만 추가하면 됩니다.
=========================== */
const posts = [
    {
        title: "[STILL] 정하람 대표 인터뷰",
        url: "interview1.html"
    },
    {
        title: "[UNFOLD] 최민준 대표 인터뷰",
        url: "interview2.html"
    },
    {
        title: "[FITME] 김민수 대표 인터뷰",
        url: "interview3.html"
    },
    {
        title: "[MOOD ATTIC] 박지은 대표 인터뷰",
        url: "interview4.html"
    }
];


/* ===========================
   현재 페이지 파일명 가져오기
   예)
   https://.../interview2.html
   → interview2.html
=========================== */
const currentPage = location.pathname.split("/").pop();


/* ===========================

   현재 페이지가 posts 배열의 몇 번째인지 찾기
=========================== */
const currentIndex = posts.findIndex(post => post.url === currentPage);


/* ===========================
   이전글 / 현재글 / 다음글 요소 선택
=========================== */
const prev = document.getElementById("prev_post");
const current = document.getElementById("current_post");
const next = document.getElementById("next_post");


/* ===========================
   현재 게시글 제목 출력
=========================== */
current.textContent = posts[currentIndex].title;
current.href = posts[currentIndex].url;


/* ===========================
   이전 게시글이 있을 경우 출력
=========================== */
if (currentIndex > 0) {
    prev.textContent = posts[currentIndex - 1].title;
    prev.href = posts[currentIndex - 1].url;
}


/* ===========================
   다음 게시글이 있을 경우 출력
=========================== */
if (currentIndex < posts.length - 1) {
    next.textContent = posts[currentIndex + 1].title;
    next.href = posts[currentIndex + 1].url;
}


/* ===========================
   이전 화살표 클릭
   → 이전 게시글로 이동
=========================== */
document.querySelector(".prev_btn").onclick = () => {
    if (currentIndex > 0) {
        location.href = posts[currentIndex - 1].url;
    }
};


/* ===========================
   다음 화살표 클릭
   → 다음 게시글로 이동
=========================== */
document.querySelector(".next_btn").onclick = () => {
    if (currentIndex < posts.length - 1) {
        location.href = posts[currentIndex + 1].url;
    }
};




// img_box3 비디오연결
const monthlyItems = document.querySelectorAll("#layout .img_box3");

monthlyItems.forEach(item => {

    const video = item.querySelector(".img3_video");

    item.addEventListener("mouseenter", () => {
        video.play();
    });

    item.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;   // 처음부터 다시
    });

});