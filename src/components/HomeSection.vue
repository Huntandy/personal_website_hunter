<template>
  <!-- Start header -->
  <header class="header d-flex scrollTarget" id="header">
    <nav class="navbar navbar-expand-lg bg-transparent">
      <!-- <nav class="navmenu"> -->
      <div class="container-fluid" id="thisone">
        <a class="navbar-brand d-flex" href="#">
          <img
            src="@/assets/images/logo2.png"
            alt="Logo"
            width="50"
            height="50"
            class="d-inline-block align-text-top"
          />
          <p>HunterC</p>
        </a>
        <div class="switch">
          <input
            id="language-toggle"
            class="check-toggle check-toggle-round-flat"
            type="checkbox"
            :checked="isZH"
            @change="languageChange"
          />
          <label for="language-toggle"></label>
          <span class="on">EN</span>
          <span class="off">中</span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#" data-target="header">{{
                home
              }}</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#" data-target="bout-me">{{ about }}</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#" data-target="what-i-do">{{ skills }}</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#" data-target="portfolio">{{ project }}</a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link" href="#" data-target="contact">{{ contact }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- End header -->

  <!-- STart Main -->
  <main class="main">
    <section class="banner">
      <img src="@/assets/images/mountains.jpg" alt="" data-aos="fade-in" />
      <div class="overlay">
        <h1 data-aos="fade-up" data-aos-delay="100">{{ bannerName }}</h1>
        <h2>{{ bannerIdentity }}</h2>
        <div class="logos">
          <a
            href="https://www.instagram.com/oprkt_htc_10/"
            class="ig"
            target="_blank"
          ></a>
          <a
            href="https://www.facebook.com/hunter.chen.9803/"
            class="fb"
            target="_blank"
          ></a>
          <a href="https://github.com/Huntandy" class="gh" target="_blank"></a>
        </div>
      </div>
    </section>
    <section id="bout-me" class="bout-me scrollTarget d-flex">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 photograph">
            <!-- photograph -->
            <div class="img"></div>
            <div class="hollow-object"></div>
          </div>
          <div class="col-lg-6 intro">
            <!-- intro -->
            <div class="txt-container">
              <p class="title" v-if="isEN">ABOUT ME</p>
              <p class="title" v-if="isZH">關於我</p>
              <h1 v-if="isEN">I'm Hunter Chen</h1>
              <h1 v-if="isZH">我是陳柏諺</h1>
              <p class="content" v-if="isEN">
                This part is going to be a short intro of me.This part is going to be a
                short intro of me. This part is going to be a short intro of me.This part
                is going to be a short intro of me. This part is going to be a short intro
                of me.This part is going to be a short intro of me. This part is going to
                be a short intro of me.This part is going to be a short intro of me.
              </p>
              <p class="content" v-if="isZH">
                自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。
              </p>
              <p class="content" v-if="isEN">
                This part is going to be a short intro of me.This part is going to be a
                short intro of me. This part is going to be a short intro of me.This part
                is going to be a short intro of me. This part is going
              </p>
              <p class="content" v-if="isZH">
                自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。自我介紹。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="what-i-do" class="what-i-do scrollTarget">
      <div class="container">
        <div class="wid-titles">
          <p class="title" v-if="isEN">WHAT I DO</p>
          <p class="title" v-if="isZH">技能</p>
          <h1 v-if="isEN">SPECIALIZING IN</h1>
          <h1 v-if="isZH">我擅長...</h1>
        </div>
        <div class="specialization row">
          <div class="first card col-md-6">
            <div class="img__title">
              <div class="img-container">
                <div class="img"></div>
              </div>
              <p class="title" v-if="isEN">Front-end<br />Development</p>
              <p class="title" v-if="isZH">前端網頁開發</p>
            </div>
            <p class="content" v-if="isEN">
              I am proficient in HTML,CSS, able to use Javascript, and learning Vue. <br>
              This website was built with Vue.js(Vue framework).
            </p>
            <p class="content" v-if="isZH">
              熟悉HTML與CSS, 會使用Javascript, 正在學習Vue. <br>
              這個網頁就是使用Vue.js(Vue框架)所做的。
            </p>
          </div>
          <div class="second card col-md-6">
            <div class="img__title">
              <div class="img-container">
                <div class="img"></div>
              </div>
              <p class="title" v-if="isEN">English-Typing</p>
              <p class="title" v-if="isZH">英文打字</p>
            </div>
            <p class="content" v-if="isEN">
              Be able to type more than 60 words per minute.
            </p>
            <p class="content" v-if="isZH">
              每分鐘速度可達60字以上。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio" class="portfolio scrollTarget">
      <div class="container">
        <div class="txt-container">
          <p class="title" v-if="isEN">PORTFOLIO</p>
          <p class="title" v-if="isZH">作品集</p>
          <h1 v-if="isEN">LATEST PROJECTS</h1>
          <h1 v-if="isZH">最新專案</h1>
        </div>
        <div class="project-cards row">
          <div class="card">
            <div class="first project-img">
            </div>
            <div class="p__button">
              <p class="project-name" v-if="isEN">Personal Website (This website)</p>
              <p class="project-name" v-if="isZH">個人網頁(這個網頁)</p>
              <a href="#"  aria-current="page" data-target="header" v-if="isEN"> 
                <button class="demo">View Demo</button>
              </a>
              <a href="#" aria-current="page" data-target="header" v-if="isZH">
                <button class="demo"> 查看作品 </button>
              </a>  
            </div>
          </div>
          <div class="card">
            <div class="second project-img"></div>
            <div class="p__button">
              <p class="project-name" v-if="isEN">Coming Soon</p>
              <p class="project-name" v-if="isZH">敬請期待</p>
              <a href="#" v-if="isEN"> 
                <button class="demo">View Demo</button>
              </a>
              <a href="#" v-if="isZH">
                <button class="demo"> 查看作品 </button>
              </a>  
            </div>
          </div>
          <div class="card">
            <div class="third project-img"></div>
            <div class="p__button">
              <p class="project-name" v-if="isEN">Coming Soon</p>
              <p class="project-name" v-if="isZH">敬請期待</p>
              <a href="#" v-if="isEN"> 
                <button class="demo">View Demo</button>
              </a>
              <a href="#" v-if="isZH">
                <button class="demo"> 查看作品 </button>
              </a>  
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="contact scrollTarget">
      <div class="container">
        <h1 v-if="isEN">Have any project in mind ?</h1>
        <h1 v-if="isZH">您有任何專案的構想嗎?</h1>
        <button class="contact-btn" v-if="isEN">Contact Me</button>
        <button class="contact-btn" v-if="isZH">聯絡我</button>
      </div>
    </section>
  </main>

  <!-- End Main -->

  <!-- Start footer -->
  <footer class="footer">
    <!-- <h3>LOGO</h3> -->
    <h3 v-if="isEN">Visit Date: {{monthUSA}} {{date}}, {{year}}</h3>
    <h3 v-if="isZH">造訪日期: {{year}} 年 {{month}} 月 {{date}} 日</h3>
    <p id="copyright">COPYRIGHT © 2023 CV Hunter.</p>
  </footer>
  <!-- End footer -->
  <!-- Scroll Top Button -->
  <a
    href="#"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center"
  >
    <!-- <i class="bi bi-arrow-up-short"></i> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.65em"
      height="1.65em"
      fill="currentColor"
      class="bi bi-arrow-up-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
      />
    </svg>
  </a>
</template>

<script>
// export default {
//   name: 'HomeSection',
//   // props: {
//   //   msg: String
//   // }
export default {
  name: "HomeSection",
  //  Vue 2

  // data() {
  //   return {
  //     year: new Date().getFullYear()
  //   }
  // },
  // mounted() {
  //   const copyrightElement = document.getElementById("copyright");
  //   const updatedContent = copyrightElement.textContent.replace("©", `© ${this.year}`);
  //   copyrightElement.textContent = updatedContent;
  // }
};
</script>

// Vue 3
<script setup>
import { ref, onMounted } from "vue";
const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth()+1);
const monthUSA = ref(new Date().toLocaleString('en-US', { month: 'long' }));
const date = ref(new Date().getDate());


let zh = {
    bannerName: `我是陳柏諺`, bannerIdentity: `前端網頁開發技術學習者`, home: `首頁`, about: `關於我`,
    skills: `我的技能`, project: `專案成就`, contact: `聯絡我`
  };
  let en = {
    bannerName : `I'm Hunter Chen.`, bannerIdentity : `Front-End Development Learner`, home : `Home`, about : `About`, 
    skills : `Skills`, project : `Project`, contact : `Contact`
  };
const isZH = ref(false);
const isEN = ref(true);

let bannerName, bannerIdentity, home, about, skills, project, contact;
bannerName = en.bannerName; bannerIdentity = en.bannerIdentity; home = en.home; about = en.about; skills = en.skills; project = en.project; contact = en.contact; 
const languageChange = (event) => {
  isEN.value = !(event.target.checked);
  isZH.value = event.target.checked;
  if (isZH.value) {
    bannerName = zh.bannerName; bannerIdentity = zh.bannerIdentity; home = zh.home; about = zh.about; 
    skills = zh.skills; project = zh.project; contact = zh.contact; 
  } else {
    bannerName = en.bannerName; bannerIdentity = en.bannerIdentity; home = en.home; about = en.about; 
    skills = en.skills; project = en.project; contact = en.contact; 
  }
};

let scrollTargets = ref([]);

onMounted(() => {
  // scrollTargets.value = Array.from(document.querySelectorAll('.scrollTarget'));
  scrollTargets.value = Array.from(document.querySelectorAll(".scrollTarget"));
  document.querySelectorAll("a[data-target]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)

      // Get the target div ID from the data-target attribute of the clicked link
      const targetDivId = link.getAttribute("data-target");
      const targetDiv = document.getElementById(targetDivId);
      console.log(targetDiv);
      
      // Scroll to the target <div>
      targetDiv.scrollIntoView({
        behavior: "smooth", // You can change this to 'auto' for instant scrolling
        block: "start", // Scroll to the top of the target div
      });
    });
  });

  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);
});
// function translate(key,lang){
//   if(isZH==true){ return zh[key] }
//   else {return en[key]}
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  display: flex;
}
// scss
// feature 1 : nested structure
// feature 2 : variable   example : $primary-color: #f2f2f2;
// feature 10 : & can refer to parent example: &:hover { color: $primary-color; }
// feature 3 : mixin example: @mixin border-radius($radius) { border-radius: $radius; }
// feature 4 : if statement example: @if $color == red { background: red; } @else if $color == blue { background: blue; } @else { background: green; }
// feature 5 : for loop example: @for $i from 1 through 4 { .item-#{$i} { width: 100% * $i; } }
// feature 6 : while loop example: @while $i < 4 { .item-#{$i} { width: 100% * $i; } $i: $i + 1; }
// feature 7 : mixin example: @include border-radius(5px);
// feature 8 : @extend example: .item-1 { @extend .item-2; @extend .item-3; }
// feature 9 : @at-root example: @at-root .item-1 { @at-root .item-2 { @at-root .item-3 { } } }
/*GLOBAL*/
@media screen {
  * {
    box-sizing: border-box;
  }

  :root {
    --factor1: 1;
    --factor2: 2;
  }

  html,
  body {
    font-family: "微軟正黑體";
  }

  html {
    font-size: 16px;
  }

  nav {
    height: 80px;
  }
  .container-fluid {
    align-items: center;
  }
  .container-fluid .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-brand {
    font-size: 2rem;
    color: white;
  }
  .navbar-brand:hover,
  .nav-link:hover {
    color: lightgray;
  }
}

/* Across Section */
@media screen {
  p.title {
    color: #4c70ef;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0;
    text-align: left;
  }
  .bout-me .txt-container p.content,
  .what-i-do p.content {
    width: 100%;
    color: #b0adad;
    font-size: 18px;
    overflow-wrap: break-word;
    text-align: left;
    /* word-break:break-all; */
    /* white-space:pre; */
  }
  h1 {
    color: white;
    font-weight: bold;
    font-size: 2em;
    margin: 0.67em 0;
  }
  button {
    background-color: #558fff;
    height: 41px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 20px;
    border: none;
  }

  button:hover {
    background-color: #0056b3;
  }
}

header {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  justify-content: center;

  nav {
    width: 90%;

    .navbar-brand {
      flex-direction: row;
      justify-content: center;
      align-items: center;

      p {
        margin: 0;
      }
    }
    .navbar-brand:focus {
      color: white;
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    a.nav-link {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a.nav-link:focus {
      color: lightgray;
    }
  }
  .switch {
    position: relative;
    /* display: inline-block; */
    margin: 0 2px;
    margin-top: 10px;
  }

  .switch > span {
    position: absolute;
    pointer-events: none;
    font-family: "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    width: 50%;
    text-align: center;
  }

  input.check-toggle-round-flat:checked ~ .off {
    color: white;
  }

  input.check-toggle-round-flat:checked ~ .on {
    color: #0c0f16;
  }

  .switch > span.on {
    top: 9px;
    left: -2px;
    padding-left: 20px;
    color: white;
  }

  .switch > span.off {
    font-size: 14px;
    top: 7px;
    right: -15px;
    font-family: ‘Noto Sans TC’, sans-serif;
    font-weight: 900;
    color: #0c0f16;
  }

  .check-toggle {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }
  .check-toggle + label {
    /* display: block; */
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input.check-toggle-round-flat + label {
    padding: 2px;
    padding-left: 10px;
    width: 97px;
    height: 35px;
    background-color: white;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:before,
  input.check-toggle-round-flat + label:after {
    /* display: block; */
    position: absolute;
    content: "";
  }

  input.check-toggle-round-flat + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: white;

    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }

  input.check-toggle-round-flat + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    /* width: 48px; */
    width: 47%;
    background-color: #0c0f16;
    -webkit-border-radius: 52px;
    -moz-border-radius: 52px;
    -ms-border-radius: 52px;
    -o-border-radius: 52px;
    border-radius: 52px;
    -webkit-transition: margin 0.2s;
    -moz-transition: margin 0.2s;
    -o-transition: margin 0.2s;
    transition: margin 0.2s;
  }

  input.check-toggle-round-flat:checked + label:after {
    margin-left: 44px;
  }
  button.navbar-toggler {
    background-color: transparent;
  }
}

/*---------------------------------
 Main
----------------------------------*/
main {
  background-color: #212121;
  flex-direction: column;
  * {
    display: flex;
  }
}
/* BANNER */
.banner {
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  height: inherit;
  flex-direction: column;

  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
  }
  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 0.5rem;
      font-weight: bold;
      /* font-size:55px; */
      font-size: 3.4375rem;
    }
    h2 {
      font-weight: normal;
      font-size: 35px;
      margin-top: 20px;
    }
    h1,
    h2 {
      color: white;
      font-family: "Ubuntu", sans-serif;
    }
    h1,
    h2,
    div {
      z-index: 1;
    }
    .logos {
      display: flex;
      width: 100%;
      z-index: 10;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .ig {
        background-image: url(@/assets/images/ig-logo.png);
      }
      .fb {
        background-image: url(@/assets/images/fb-logo.png);
      }
      .gh {
        background-image: url(@/assets/images/gh-logo.png);
      }
      .ig,
      .fb,
      .gh {
        height: 3.5rem;
        width: 3.5rem;
        margin: 20px;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}

/*ABOUT ME*/
.bout-me {
  height: 500px;
  width: 100%;
  justify-content: center;

  * {
    position: relative;
  }
  .container,
  .row {
    width: 100%;
    height: 407px;
    margin: 0;
    padding: 0;
    align-self: center;
    flex-direction: row;
  }
  .row {
    .photograph {
      width: 50%;
      /* height:100%;  */
      padding-left: 1.15625rem;
      padding-right: 1.15625rem;
      border: 0px;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .img {
        top: calc(41px * 2);
        right: calc(7px * 2);
        z-index: 2;
        background-image: url(@/assets/images/101501.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .hollow-object {
        bottom: calc(41px * 2);
        left: calc(7px * 2);
        z-index: 0;
        border: 1px solid #d9d9d9;
        overflow: hidden;
      }
      .img,
      .hollow-object {
        width: calc(263px * 1);
        height: calc(190px * 1);
        scale: 2;
        align-self: center;
        border-top-left-radius: 32px;
        border-bottom-right-radius: 32px;
      }
    }
    .intro {
      width: 50%;
      padding-left: 10px;
      padding-right: 10px;

      .txt-container {
        flex-direction: column;
        color: white;

        p.title {
          padding-top: 26px;
          line-height: 1;
        }
      }
    }
  }
}

/*WHAT I DO*/
.what-i-do {
  height: 500px;
  justify-content: center;

  .container {
    /* height: 360px;  */
    width: 64%;
    align-self: center;
    flex-direction: column;

    .wid-titles {
      margin-bottom: 25px;
      flex-direction: column;

      * {
        align-items: center;
        justify-content: center;
      }
    }
    .specialization {
      flex-direction: row;
      flex-wrap: nowrap;

      p {
        word-wrap: break-word;
      }
      .first {
        margin-right: 10px;

        .img {
          background-image: url(@/assets/images/computer.png);
          margin-left: 7px;
        }
      }
      .second {
        margin-left: 10px;

        .img {
          background-image: url(@/assets/images/keyboard.png);
        }
      }
      .card {
        width: 50%;
        /* height:206px; */
        background-color: #292c36;
        border-radius: 16px;

        .img__title {
          width: 310px;
          height: 72px;
          margin-top: 23px;
          margin-bottom: 12px;
          flex-direction: row;
          align-items: center;

          .img-container {
            width: 66px;
            height: 66px;
            background-color: #38405a;
            border-radius: 10px;
            margin-left: 23px;
            justify-content: center;
            align-items: center;

            .img {
              width: 42px;
              height: 42px;
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
          p.title {
            font-size: 24px;
            width: 200px;
            color: white;
            font-weight: 600;
            align-items: flex-start;
            margin: 0px 0px 0px 15px;
          }
        }
        p.content {
          width: 100%;
          overflow-wrap: break-word;
          margin-left: 23px;
          align-self: center;
          /* overflow-y: auto; */
        }
      }
    }
  }
}

/*PORTFOLIO*/
.portfolio {
  height: 700px;
  justify-content: center;

  .container {
    width: 1180px;
    height: 77%;
    align-self: center;
    flex-direction: column;

    .txt-container {
      flex-direction: column;

      * {
        align-items: center;
        justify-content: center;
      }
      p.title {
        margin-top: 14px;
      }
    }
    .project-cards,
    .row {
      width: 100%;
      height: 75%;
      flex-direction: row;
      justify-content: space-between;
      /* border:1px solid lightcoral; */

      .card {
        width: 33%;
        /* height: 100%; */
        border-radius: 10px;
        background-color: #292c36;
        padding: 0;

        .project-img {
          width: 100%;
          height: 67%;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .first.project-img {
          background-image: url(@/assets/images/my-web-demo.png);
        }
        .second.project-img,.third.project-img {
          border: 2px solid white;
        }
        p{
          margin-top: 1rem ;
          margin-bottom: 1rem ;
        }
        .p__button {
          flex-direction: column;
          justify-content: space-between;

          .project-name {
            font-size: 20px;
            font-weight: 600;
            color: white;
            margin-left: 20px;
          }
          button.demo {
            width: 128px;
            margin-bottom: 0.5 rem;
          }
        }
      }
    }
  }
}

/* CONTACT */
.contact {
  height: 500px;
  justify-content: center;

  .container {
    width: 64%;
    height: 277px;
    background-color: #292c36;
    align-self: center;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;

    h1 {
      padding: 0 2.5%;
      justify-content: center;
    }
    button.contact-btn {
      width: 133px;
      margin: 0;
      align-self: center;
    }
  }
}

/*---------------------------------
 Footer
----------------------------------*/
footer {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  width: 100%;
  background-color: #292c36;
  color: white;
  justify-content: center;

  * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    margin-block-start: 1em;
    margin-bottom: 0px;
    font-size: 1.17em;
    font-weight: bold;
  }
  p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 12px;
  }
}

/*---------------------------------
 Widget
----------------------------------*/
/* Scroll To Top Button */
@media screen {
  .scroll-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
    /* background-color: var(--primary-color); */
    background-color: #4c70ef;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    transition: all 0.4s;
  }

  .scroll-top svg {
    /* font-size: 24px; */
    color: whitesmoke;
    line-height: 0;
  }

  .scroll-top:hover {
    /* background-color: rgba(var(--primary-color-rgb), 0.8); */
    background-color: #4c70ef;
    opacity: 0.7 !important;
    /* color: #ffffff; */
  }

  .scroll-top.active {
    visibility: visible;
    opacity: 1;
  }
}

// RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD RWD
/* xl1200  lg992  md768  sm576   xs  */
@media screen and (min-width: 1200px) {
  /*xl*/
  /* .col-xl-3{width:25%;}
      .col-xl-4{width:33.33333%;}
      .col-xl-6{width:50%;}
      .col-xl-12{width:100%;} */
}
@media screen and (max-width: 1200px) {
  /*lg*/
  /* .col-lg-3{width:25%;}
      .col-lg-4{width:33.33333%;}
      .col-lg-6{width:50%;}
      .col-lg-12{width:100%;} */
  .bout-me {
    height: 200%;

    .container,
    .row {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200%;
      flex-wrap: nowrap;
    }
  }

  .portfolio {
    height: 1650px;
    margin-bottom: 100px;
    .container {
      .row {
        height: 100%;
        flex-direction: column !important;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;

        .card {
          height: 40%;
          width: 75% !important;
          margin-bottom: 15px;
          .project-img{
            height:72.5%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  /*md*/
  /* html{font-size:8px;} */
  /* .col-md-3{width:25%;}
      .col-md-4{width:33.33333%;}
      .col-md-6{
          width:50%;
      }
      .col-md-12{width:100%;} */
  .what-i-do {
    height: 750px;
    margin-top: 50px;

    .container,
    .row {
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
      /* height:200%; */
      flex-wrap: nowrap;
    }
    .first {
      margin-bottom: 15px;
      margin-right: 0 !important;
    }
    .second {
      margin-left: 0px !important;
    }
    .card {
      width: 100% !important;
    }
  }
  /* .portfolio{
          height:200%;
          margin-top: 50px;
          .container{
              width:64%;
              height:200%;

              .row{
                  flex-direction: column ;
                  height:506px;

                  .card{
                      width:100%;
                      height:33%;
                      flex-direction: row;
                      
                      .project-img{
                          width:35% ;
                          height:100% ;
                          border-top-right-radius: 0;
                          border-bottom-left-radius: 10px;
                      }
                      .p__button{
                          width:65%;
                          justify-content: center;
                          align-items: center;
                      }
                  }
              }
          }
      } */
}
@media screen and (max-width: 768px) {
  /*sm*/
  /* .col-sm-3{width:25%;}
      .col-sm-4{width:33.33333%;}
      .col-sm-6{width:50%;}
      .col-sm-12{width:100%;} */
}
@media screen and (max-width: 600px) {
  .bout-me {
    .row {
      .photograph {
        .img,
        .hollow-object {
          scale: 1.5;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  /*xs*/
  /* .col-3{width:25%;}
      .col-4{width:33.33333%;}
      .col-6{width:50%;}
      .col-12{width:100%;} */
}

@media screen and (max-width: 500px) {
  .img,
  .hollow-object {
    scale: 1 !important;
  }
}
</style>
