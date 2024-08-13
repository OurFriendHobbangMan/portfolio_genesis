const notice = document.querySelector(".notice");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const play = document.querySelector(".play img");

let num = 1; // 초기 슬라이드 인덱스 (1부터 시작)
let interval; // 자동 슬라이드를 위한 interval 변수
let isPlaying = true; // 현재 슬라이드 재생 상태

const slides = Array.from(notice.children);
const totalSlides = slides.length;

// 첫 번째와 마지막 슬라이드 복제 및 추가
notice.append(slides[0].cloneNode(true));
notice.prepend(slides[totalSlides - 1].cloneNode(true));

// 초기 슬라이드 위치 설정
notice.style.marginTop = `-${num * 80}px`;

// 슬라이드 이동 함수
function moveSlide() {
    notice.style.transition = 'margin-top 0.5s';
    notice.style.marginTop = `-${num * 80}px`;
}

// 슬라이드 점프 함수
function jumpSlide() {
    notice.style.transition = 'none';
    notice.style.marginTop = `-${num * 80}px`;
}

// 다음 슬라이드로 이동
function nextSlide() {
    num++;
    moveSlide();
    if (num > totalSlides) {
        num = 1;
        setTimeout(jumpSlide, 500);
    }
}

// 이전 슬라이드로 이동
function prevSlide() {
    num--;
    moveSlide();
    if (num < 1) {
        num = totalSlides;
        setTimeout(jumpSlide, 500);
    }
}

// 자동 슬라이딩 시작
function startAutoPlay() {
    interval = setInterval(nextSlide, 2000);
    play.src = "source/ico-pause-white-type2.png"; // 재생 중일 때는 일시정지 아이콘 표시
    play.style.width = "13px";
    isPlaying = true;
}

// 자동 슬라이딩 정지
function stopAutoPlay() {
    clearInterval(interval);
    play.src = "img/play_icon.png"; // 정지 상태일 때는 재생 아이콘 표시
    play.style.width = "18px";
    isPlaying = false;
}

// 버튼 이벤트 리스너 추가
next.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
});

prev.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
});

play.addEventListener("click", () => {
    if (isPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
});

// 초기 자동 슬라이딩 시작
startAutoPlay();
