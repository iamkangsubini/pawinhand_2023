//1. 모바일, 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open
//속성: 보이기
//이벤트: 클릭시
//메서드: 
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 뉴 m_nav_open
//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인 에러메세지 또는 null, undefined 표시주의
console.log(m_nav_open, m_nav, close);

//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';

//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체.이벤트
m_nav.addEventListener('click',function(){
    //2-2.모바일 메뉴 보이기(객체.속성.속성=값)
    m_nav_open.style.display = 'block';
});

//3. x 버튼 클릭 시 모바일 메뉴 숨기기
//객체.이벤트
close.addEventListener('click',function(){
    //3=2.모바일 메뉴 숨기기
    m_nav_open.style.display = 'none';
});

//main-swiper-slide
//const 변수명 = new Swiper(`적용대상`);
//const 변수명 = new Swiper(`적용대상`, {속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    //자동재생
    autoplay:{
        delay:10000,//슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false,//버튼 클릭후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드 ->첫번째슬라이드 자연스러운 변경
    /* effect:'fade', */ //제자리 자연스러운 슬라이드 효과
    direction: 'horizontal',
    navigation: { //이전, 다음 내비게이션 연결
        //next,prev 객체 연결 시 부모를 적으면 body 안에 있는 모든 swiper-next,prev를 인식하기 때문에 개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }
    // direction:'vertical'
});
const bin_slide = new Swiper('#bin_slide',{
    autoplay: {
        delay:10000, 
        disableOnInteraction:false, 
    },
    loop:true,//마지막 슬라이드->첫번째슬라이드 자연스러운 변경
    //effect:'fade', //제자리 변경 슬라이드
    navigation: {
        nextEl: '#bin_slide .swiper-button-next',
        prevEl: '#bin_slide .swiper-button-prev',
    },
});
// pawin-slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
})
//입양정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto', //breakopoints옵션추가시 'auto',한번에 보이는 슬라이드 개수
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1000},
    loop:true,
    // swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        //해상도 순서는 작은 해상도 -> 큰 해상도 순으로 작성.
        400:{slidesPerView:2}, //400~899
        700:{slidesPerView:2}, //700이상일때
        900:{slidesPerView:3}, //900이상일때
        1160:{slidesPerView:4}, //1160이상일 경우 슬라이드 4개 표시
    }
});