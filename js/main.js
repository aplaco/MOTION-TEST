const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");

//scss에서 초기 위치값을 수정하는 것이 아닌 set으로 초기위치값 변경
gsap.set(bgVideo, { opacity: 0 });
gsap.set(title, { y: -100, opacity: 0 });
gsap.set(btnOpen, { scale: 5, opacity: 0 });

//로딩 완료시 초기 모션 설정
gsap.to(bgVideo, { opacity: 1, duration: 2 });
gsap.to(title, { y: 0, opacity: 1, duration: 1, delay: 1 });
gsap.to(btnOpen, { scale: 1, opacity: 1, duration: 0.5, delay: 1.5 });