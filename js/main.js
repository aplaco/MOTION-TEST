import { splitText } from "./splitText.js";

const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");
const logo = document.querySelector("h1");
const menus = document.querySelectorAll(".gnb li");
const line = document.querySelector(".line");
const sns = document.querySelectorAll(".sns li");
const copyright = document.querySelector("footer p");
const slogan = document.querySelector(".textBox h2");

splitText(slogan);
const letters = document.querySelectorAll(".textBox h2 span");

//각 모션을 동기화처리하기 위해 timeline객체 생성후 변수에 할당
const tl = gsap.timeline();

gsap.set(bgVideo, { opacity: 0 });
gsap.set(letters, { opacity: 0, scale: 3 });
gsap.set(btnOpen, { scale: 5, opacity: 0 });
gsap.set(logo, { y: -100, opacity: 0 });
gsap.set(menus, { y: -100, opacity: 0 });
gsap.set(line, { width: "0%" });
gsap.set(sns, { y: -100 });
gsap.set(copyright, { y: -100 });

//로딩 완료시 초기 모션 설정
gsap.to(bgVideo, { opacity: 0.8, duration: 2 });
tl.to(letters, {
  opacity: 1,
  duration: 1,
  scale: 1,
  delay: 1,
  stagger: 0.1,
});
tl.to(btnOpen, { scale: 1, opacity: 1, duration: 0.5 });
tl.to(logo, { y: 0, opacity: 1, duration: 1 });
tl.to(menus, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
tl.to(line, { width: "100%", duration: 1 });
tl.to(sns, { y: 0, duration: 0.5, stagger: 0.2 });
tl.to(copyright, { y: 0, duration: 0.5 });
