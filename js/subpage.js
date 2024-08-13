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

const wdwIcons = document.querySelectorAll(".wdw_icon");
const wdwImgs = document.querySelectorAll(".wdw_icon img");

// 각각의 wdwIcons 요소에 대해 마우스 오버 이벤트를 추가
wdwIcons.forEach((icon, index) => {
    // 각 아이콘에 마우스 오버 이벤트 추가
    icon.addEventListener("mouseover", () => {
        // 해당 아이콘의 이미지 src를 변경
        const img = wdwImgs[index];  // index를 사용하여 wdwImgs에서 이미지 선택
        img.src = "img/ico-new-window-point.png";
    });

    // 마우스가 아이콘을 벗어났을 때 원래 이미지로 복원하는 기능 추가
    icon.addEventListener("mouseout", () => {
        const img = wdwImgs[index];  // index를 사용하여 wdwImgs에서 이미지 선택
        img.src = "img/ico-new-window.png";  // 원래 이미지의 경로로 설정
    });
});

const wdIcon = document.querySelector(".wd_icon");
const wdImg = document.querySelector(".wd_icon img");


// 호버 이벤트

wdIcon.addEventListener("mouseover", () => {

    wdImg.src = "img/ico-worldwide-point.png"
  });

  // 마우스 아웃 이벤트

wdIcon.addEventListener("mouseout", () => {
    
    wdImg.src = "img/ico-worldwide.png"
});

  

const pvIcon = document.querySelector(".pv_icon");
const pvImg = document.querySelector(".pv_icon img");

pvIcon.addEventListener("mouseover", () => {
    pvImg.src = "img/ico-privacy-center-point.png"
});


pvIcon.addEventListener("mouseout", () => {
    pvImg.src = "img/ico-privacy-center.png"
});

