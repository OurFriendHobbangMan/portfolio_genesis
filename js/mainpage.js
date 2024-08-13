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




// 메뉴 버튼과 모달 기능
const md_btn = document.querySelectorAll(".gnb a");
const modals = document.querySelectorAll(".modal");
const buyButtons = document.querySelectorAll(".buy");
const modelBtn = document.querySelector(".model");
const mdMenuBg = document.querySelector(".md_menu_bg");
const modalBg = document.querySelector(".modal-bg");
const body = document.querySelector("body");

// 현재 열린 모달 창을 닫는 함수
function closeModal() {
    modals.forEach((modal) => {
        modal.style.display = "none";
    });

    md_btn.forEach((btn) => {
        btn.classList.remove("active");
    });

    // 모달 배경도 숨기기
    if (modalBg) {
        modalBg.style.display = "none";
    }

    // 메뉴박스 배경도 숨기기
    if (mdMenuBg) {
        mdMenuBg.style.display = "none";
    }

    currentOpenModal = null;
}

// 현재 열린 모달을 추적하는 변수
let currentOpenModal = null;

// 메뉴 버튼에 이벤트 리스너 추가
md_btn.forEach((el) => {
    el.addEventListener("click", (ev) => {
        if (!el.classList.contains("mypage")) { // 수정 추가 !! 0730
            ev.preventDefault(); // 기본 링크 동작 막기
        } 
        const targetModalId = el.getAttribute("href");
        const targetModal = document.querySelector(targetModalId);

        if (targetModal) {
            if (currentOpenModal === targetModal) {
                // 이미 열려있는 메뉴 클릭 시 닫기
                closeModal();
            } else {
                // 다른 메뉴 클릭 시 기존 메뉴 닫고 새로운 메뉴 열기
                closeModal();
                targetModal.style.display = "block";
                el.classList.add("active");
                if (modalBg) {
                    modalBg.style.display = "block";
                    body.style.overflowY = "hidden";
                }
                currentOpenModal = targetModal;
            }
        }
    });
});

// 모달 배경을 클릭하면 모달 닫기
if (modalBg) {
    modalBg.addEventListener("click", closeModal);
}

// 모달 내부를 클릭해도 모달 닫기
modals.forEach((modal) => {
    modal.addEventListener("click", closeModal);
});

// buy 버튼과 관련 모달

    buyButtons.addEventListener("click", () => {
        const priceModal = document.querySelector(".price_modal");
        // 모든 모달 숨기기  
            modal.style.display = "none";
            
            // 가격 모달만 표시
            priceModal.style.display = "block";
        });



// 모델 버튼과 관련 모달
if (modelBtn) {
    modelBtn.addEventListener("click", (ev) => {
        ev.preventDefault(); // 기본 링크 동작 막기
        if (currentOpenModal === mdMenuBg) {
            closeModal();
        } else {
            closeModal();
            if (mdMenuBg) {
                mdMenuBg.style.display = "block";
                currentOpenModal = mdMenuBg;
            }
        }
    });
}

// 페이지 로드 시 자동으로 슬라이드 시작
startSlider();

// 초기 슬라이드 위치 설정
updateSlidePosition();

// 언어선택 설정



const langSpans = document.querySelectorAll(".fs2_lang span");

langSpans.forEach(function (span) {
    span.addEventListener("click", function () {
        // 모든 언어 span에서 .lang_on 클래스를 제거
        langSpans.forEach(function (otherSpan) {
            otherSpan.classList.remove("lang_on");
        });
        // 클릭한 span에만 .lang_on 클래스를 추가
        span.classList.add("lang_on");
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

