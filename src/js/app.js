import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";
import gsap from "gsap";
// class PageHandler {
//   constructor() {
//     this.typeWriterManager();
//   }

//   typeWriterManager() {
//     let dynamicHeaderElement = document.querySelector("#dynamic-header-text");
//     if (dynamicHeaderElement === null) return;

//     let i = 0;
//     let currentText = dynamicHeaderTextArray[i];
//     let currentWord = dynamicHeaderTextArray[i];
//     let isDeleting = false;

//     let typeWriter = () => {
//       currentWord = dynamicHeaderTextArray[i];

//       if (isDeleting) {
//         currentText = currentWord.substring(0, currentText.length - 1);
//       }

//       if (!isDeleting) {
//         currentText = currentWord.substring(0, currentText.length + 1);
//       }

//       dynamicHeaderElement.innerHTML = currentText;

//       if (!isDeleting && currentText === currentWord) {
//         isDeleting = true;
//         setTimeout(typeWriter, 3000);
//       } else if (isDeleting && currentText === "") {
//         isDeleting = false;
//         i++;

//         if (i === dynamicHeaderTextArray.length) {
//           i = 0;
//         }

//         setTimeout(typeWriter, 500);
//       } else {
//         setTimeout(typeWriter, 100);
//       }
//     };

//     typeWriter();
//   }
// }

// // Diese Funktion erstellt eine neue Instanz der Klasse PageHandler.
// const init = () => {
//   new PageHandler();
// };

// // Die Funktion init() wird ausgeführt, wenn der DOM geladen wurde.
// document.addEventListener("DOMContentLoaded", () => init());

// Swup Page Transition
const swup = new Swup({
  // animationSelector: '[class*="swuptransition-"]',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupScrollPlugin()],
});
// swup.hooks.on("page:view", () => {}, { once: true });

swup.hooks.on("page:view", (visit) => {
  const tl = gsap.timeline({});
  tl.to(".loader_start", {
    display: "block",
  }).to("#maskCircle", {
    r: "100%",
  });
});
// swup.hooks.on("visit:start", async () => {
//   await function myCustomFunction() {
//     const tl = gsap.timeline({});
//     tl.to(".loader_start", {
//       width: "140vw",
//       height: "140vw",
//       duration: 0.3,
//     }).to("#maskCircle", {
//       r: "100%",
//     });
//     myCustomFunction();
//   };
// });

// swup.on("contentReplaced", init);
