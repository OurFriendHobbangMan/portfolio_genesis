// 슬라이더 기능
const noticesContainer = document.querySelector(".notice");
const notices = document.querySelectorAll(".notice li");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const play = document.querySelector(".play");
const p_img = document.querySelector(".play img");

let num = 0;
const slideHeight = 80; // 슬라이드 높이
const totalSlides = notices.length;
let interval;

// 첫 번째 슬라이드를 복제하여 컨테이너 끝에 추가
const firstClone = notices[0].cloneNode(true);
noticesContainer.appendChild(firstClone);

function updateSlidePosition(instant = false) {
    noticesContainer.style.transition = instant ? 'none' : 'margin-top 1s ease';
    noticesContainer.style.marginTop = `-${num * slideHeight}px`;
}

function nextSlide() {
    num++;
    updateSlidePosition();
    if (num === totalSlides) {
        setTimeout(() => {
            num = 0;
            updateSlidePosition(true);
        }, 1000); // 트랜지션 시간과 동일하게 조정
    }
}

function prevSlide() {
    if (num === 0) {
        num = totalSlides - 1;
        updateSlidePosition(true);
        setTimeout(() => {
            num--;
            updateSlidePosition();
        }, 20);
    } else {
        num--;
        updateSlidePosition();
    }
}

function startSlider() {
    interval = setInterval(nextSlide, 4000); // 4초 간격으로 슬라이드 전환
}

function stopSlider() {
    clearInterval(interval);
    interval = null;
}

play.addEventListener("click", () => {
    if (interval) {
        stopSlider();
        p_img.src = "img/play_icon.png";
    } else {
        startSlider();
        p_img.src = "img/pause_icon.png";
    }
});

// 이전 및 다음 버튼에 이벤트 리스너 추가
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// 페이지 로드 시 자동으로 슬라이드 시작
startSlider();

// 초기 슬라이드 위치 설정
updateSlidePosition();

// 언어 선택 기능
document.addEventListener("DOMContentLoaded", function () {
    const langSpans = document.querySelectorAll(".fs2_lang span");

    langSpans.forEach(function (span) {
        span.addEventListener("click", function () {
            langSpans.forEach(function (otherSpan) {
                otherSpan.classList.remove("lang_on");
            });
            span.classList.add("lang_on");
        });
    });
});

// 호버 효과
const car = document.querySelector(".bl_n1");
const car_img = document.querySelector(".bl_n1 img");

car.addEventListener("mouseover", () => {
    car_img.src = "img/Build-And-Price_black_60x60_hover.gif";
});

const bct = document.querySelector(".bl_n2");
const bct_img = document.querySelector(".bl_n2 img");

bct.addEventListener("mouseover", () => {
    bct_img.src = "img/Price_black_60x60_hover.gif";
});

const ride = document.querySelector(".bl_n3");
const ride_img = document.querySelector(".bl_n3 img");

ride.addEventListener("mouseover", () => {
    ride_img.src = "img/Book-a-Test-Drive_black_60x60_hover.gif";
});

const ct_log = document.querySelector(".bl_n4");
const ct_log_img = document.querySelector(".bl_n4 img");

ct_log.addEventListener("mouseover", () => {
    ct_log_img.src = "img/Download-E-Brochure_black_60x60_hover.gif";
});

// 메뉴 버튼과 모달 기능
const md_btn = document.querySelectorAll(".gnb a");
const modals = document.querySelectorAll(".modal");
const buyButtons = document.querySelectorAll(".buy");

// 현재 열린 모달 창을 닫는 함수
function closeModal() {
    modals.forEach((modal) => {
        modal.style.display = "none";
    });

    md_btn.forEach((btn) => {
        btn.classList.remove("active");
    });

    // 모달 배경도 숨기기
    const modalBg = document.querySelector(".modal-bg");
    if (modalBg) {
        modalBg.style.display = "none";
    }
}

// 메뉴 버튼에 이벤트 리스너 추가
md_btn.forEach((el) => {
    el.addEventListener("click", (ev) => {
        const targetModalId = ev.target.getAttribute("href");

        const body = document.querySelector("body");

        // 모든 모달 숨기기
        modals.forEach((modal) => {
            modal.style.display = "none";
            body.style.overflowY = "auto";
        });

        // 클릭한 메뉴와 연결된 모달만 표시
        if (targetModalId) {
            const targetModal = document.querySelector(targetModalId);

            if (targetModal) {
                targetModal.style.display = "block";
                body.style.overflowY = "hidden";
            }
        }

        // 메뉴 버튼 활성화 상태 업데이트
        md_btn.forEach((btn) => {
            btn.classList.remove("active");
        });
        ev.target.classList.add("active");

        // 모달 화면을 클릭하면 모달 닫기
        const modalBg = document.querySelector(".modal-bg");
        if (modalBg) {
            modalBg.style.display = "block";
            modalBg.addEventListener("click", closeModal);
        }
    });
});

// buy 버튼과 관련 모달
buyButtons.addEventListener("click", () => {
        // 모든 모달 숨기기
        modals.forEach((modal) => {
            modal.style.display = "none";
        });

        // 가격 모달만 표시
        const priceModal = document.querySelector(".price_modal");
        if (priceModal) {
            priceModal.style.display = "block";
        }
    });


// model 버튼과 관련 모달
const modelBtn = document.querySelector(".model");
const mdMenuBg = document.querySelector(".md_menu_bg");

if (modelBtn) {
    modelBtn.addEventListener("click", () => {
        modals.forEach((modal) => {
            modal.style.display = "none";
        });

        if (mdMenuBg) {
            mdMenuBg.style.display = "block";
            modelBtn.addEventListener("click", closeModal);
        }
    });
}

