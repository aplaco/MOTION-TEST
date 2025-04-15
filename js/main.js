const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");
const logo = document.querySelector("h1");
const menus = document.querySelectorAll(".gnb li");
const line = document.querySelector(".line");
const sns = document.querySelectorAll(".sns li");
const copyright = document.querySelector("footer p");

//scss에서 초기 위치값을 수정하는 것이 아닌 set으로 초기위치값 변경
gsap.set(bgVideo, { opacity: 0 });
gsap.set(title, { y: -100, opacity: 0 });
gsap.set(btnOpen, { scale: 5, opacity: 0 });
gsap.set(logo, { y: -100, opacity: 0 });
gsap.set(menus, { y: -100, opacity: 0 });
gsap.set(line, { width: "0%" });
gsap.set(sns, { y: -100 });
gsap.set(copyright, { y: -100 });

//로딩 완료시 초기 모션 설정
gsap.to(bgVideo, { opacity: 0.8, duration: 2 });
gsap.to(title, { y: 0, opacity: 1, duration: 1, delay: 1 });
gsap.to(btnOpen, { scale: 1, opacity: 1, duration: 0.5, delay: 1.5 });
gsap.to(logo, { y: 0, opacity: 1, duration: 1, delay: 2 });
gsap.to(menus, { y: 0, opacity: 1, duration: 1, delay: 2, stagger: 0.2 });
gsap.to(line, { width: "100%", duration: 1, delay: 2 });
gsap.to(sns, { y: 0, duration: 0.5, delay: 2.5, stagger: 0.2 });
gsap.to(copyright, { y: 0, duration: 0.5, delay: 3 });