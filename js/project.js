/*header*/ 
 document.addEventListener("DOMContentLoaded", function () {

            const header = document.getElementById("header");
            const mainBanner = document.getElementById("header");

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
        