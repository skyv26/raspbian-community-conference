const hamburgurIcon = document.querySelector('.mobile-header--hamburgur_icon');
// const main = document.querySelector('.main');
// const header_nav = document.querySelector('.header-nav');
// const footer = document.querySelector('.footer');
// let stateObj = null;

// const ConvertStringToHTML = (str) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(str, 'text/html');
//   return doc.body;
// };

// const removeWrapper = (obj, convert = true) => {
//   let convertedObj = null;
//   if (convert) {
//     convertedObj = ConvertStringToHTML(obj).children;
//     convertedObj = removeWrapper(convertedObj[0], false);
//   }
//   if (!convert) {
//     return obj;
//   }
//   return convertedObj;
// };

// header_nav.addEventListener('click', function fetchTarget(e) {
//   const targetElem = e.target;
//   if (targetElem && targetElem.className.includes('link')) {
//     const page=targetElem.textContent;
//     if (page === 'Home') {
//     } else if (page === 'About') {
//     }

// }});

hamburgurIcon.addEventListener('click', function menuHandler() {
  this.parentNode.classList.toggle('active');
});
