/********************* topBanner */
///////////// 🔖  topBanner swiper
  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".swiper_wrapper");
    const slides = document.querySelectorAll(".swiper_slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // 초기 세팅
    wrapper.style.transition = "transform 0.5s ease-in-out";
    wrapper.style.willChange = "transform";

    // 반복 슬라이드
    setInterval(() => {
      currentIndex++;
      if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      wrapper.style.transform = `translateY(-${currentIndex * 40}px)`;
    }, 3000); // 3초마다 전환
  });
///////////// 🔖 topBanner close_btn
document.querySelector('.top_close_btn a').addEventListener('click', function(e) {
    e.preventDefault();
    const banner = document.querySelector('.top_banner');
    banner.style.transition = 'opacity 0.5s ease';
    banner.style.opacity = '0';
    setTimeout(() => {
      banner.style.display = 'none';
    }, 500); // 0.5초 후 display none 처리
  });


/****************** aside_menu */
////////////// 🔖 aside_menu slide
 document.querySelector('.btn_cate').addEventListener('click', function () {
    const asideMenu = document.getElementById('aside_menu');
    const dimSlider = document.getElementById('dim_slider');
    // display: none → block 으로 먼저 보이게 함
    asideMenu.style.display = 'flex';
    dimSlider.style.display = 'block';
    asideMenu.style.transition = 'transform 0.4s ease';
    asideMenu.style.transform = 'translateX(-100%)'; // 시작 위치
    // reflow 강제 트리거
    void asideMenu.offsetWidth;

    // 슬라이드 인
    asideMenu.style.transform = 'translateX(0)';
  });
///////////// 🔖 aside_menu 내부에서 close_btn
document.querySelector('.btn_close').addEventListener('click', function () {
    const closeBtn = document.querySelector('.btn_close');
    const asideMenu = document.getElementById('aside_menu');
    const dimSlider = document.getElementById('dim_slider');
    // display: none → block 으로 먼저 보이게 함
    asideMenu.style.display = 'none';
    dimSlider.style.display = 'none';
    // reflow 강제 트리거
    void asideMenu.offsetWidth;
  });


/****************** visual */
////////////// 🔖  visual Slide Swiper
const swiper = new Swiper('.swiper_container', {
    loop: true,                // 무한 루프
    autoplay: {
      delay: 3000,             // 자동 전환 시간 (ms)
      disableOnInteraction: false // 사용자 상호작용 후에도 자동 재생 유지
    },
    pagination: {
      el: '.swiper_pagination',
      clickable: true          // 페이지네이션 클릭 가능
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,

    // ✅ 터치 및 마우스 드래그 스와이프 활성화
    simulateTouch: true,       // 마우스 드래그로도 슬라이드 가능
    touchRatio: 1,             // 터치 민감도 (1 기본값)
    touchAngle: 45,            // 슬라이드가 시작될 수 있는 터치 각도
    grabCursor: true,          // 마우스 커서에 손 모양 표시
  });
  /////////////// 🔖 swiper_pagination 기능
  /*
  const swiper = new Swiper('.swiper_container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper_pagination',
      clickable: true // ✅ 페이지네이션 클릭 가능하게
    },
    simulateTouch: true,
    grabCursor: true
  });
  */

//////////////// 🔖 header 스크롤시에 가장 상단에 붙이기
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('fixed-header');
    } else {
      header.classList.remove('fixed-header');
    }
  });


/****************** BEST ITEM */  
//////////////// 🔖 BEST ITEM 슬라이드 기능
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
});

//////////////// 🔖 버튼 클릭시, 스타일 유지 기능
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // 링크 이동 방지 (필요시 제거 가능)

    document.querySelectorAll('.menu-link').forEach(el => {
      el.classList.remove('active');
    });

    this.classList.add('active');
  });
});


/****************** answer */  
//////////////// 🔖 무엇이든 물어보세요 아코디언 기능
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.answer .toggle');

  toggles.forEach(function (toggle) {
    const btn = toggle.querySelector('.btn');
    btn.addEventListener('click', function () {
      toggle.classList.toggle('active');
    });
  });
});


/****************** popup */
///////////// 🔖 팝업 기능 구현
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeTodayBtn = document.getElementById("closeToday");
  const closeOnceBtn = document.getElementById("closeOnce");
  const track = document.querySelector(".slide-track");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  const hideUntil = localStorage.getItem("hidePopupUntil");
  const now = new Date();

  if (!hideUntil || new Date(hideUntil) < now) {
    popup.style.display = "flex";
    document.body.classList.add("noscroll");
  }

  const closePopup = () => {
    popup.style.display = "none";
    document.body.classList.remove("noscroll");
  };

  closeOnceBtn.addEventListener("click", closePopup);
  closeTodayBtn.addEventListener("click", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem("hidePopupUntil", tomorrow.toISOString());
    closePopup();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000);
});

