const logo = document.querySelector('.header-main_nav-logo');
const header = document.querySelector('.header');
const getAllSection = document.querySelectorAll('.section');
const getAllMenu = document.querySelectorAll('.header-main_nav__ul .list');
const featuredSpeakerGroup = document.querySelector('.featured-speaker_group');
const featuredSpeakerGroupButton = document.querySelector('.featured-speaker_more');

const windowResizerChecker = () => {
  if (window.innerWidth >= 768) {
    if (header.className.includes('active')) {
      logo.setAttribute('src', './assets/color-logo.svg');
      header.classList.remove('active');
    }
  }
};

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

window.addEventListener('resize', windowResizerChecker);

try {
  featuredSpeakerGroupButton.addEventListener('click', function thisHandler() {
    featuredSpeakerGroup.classList.toggle('active');
    const iTag = document.createElement('i');
    if (featuredSpeakerGroup.className.includes('active')) {
      this.textContent = 'LESS';
      iTag.className = 'fa-solid fa-chevron-up icon';
      this.appendChild(iTag);
    } else {
      this.textContent = 'MORE';
      iTag.className = 'fa-solid fa-chevron-down icon';
      this.appendChild(iTag);
    }
  });
} catch (err) {
  // console.log('about.html');
}

const headerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 1.0,
};

const menuOptions = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

const headerObserverHandler = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.toggle('fixed');
    }
  });
};

const menuObserverHandler = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      getAllMenu.forEach((each) => {
        each.classList.remove('active');
      });
      const randomElement = entry.target.getAttribute('id');
      const randomTargetElement = document.querySelector(`[href='#${randomElement}']`);
      if (randomTargetElement === null) {
        if (window.location.href.includes('index')) {
          document.querySelector('#home').parentElement.classList.add('active');
        } else if (window.location.href.includes('about')) {
          document.querySelector('#about').parentElement.classList.add('active');
        }
      } else {
        randomTargetElement.parentElement.classList.add('active');
      }
    }
  });
};

const headerObserver = new IntersectionObserver(headerObserverHandler, headerOptions);

const target = document.querySelector('.observe');

headerObserver.observe(target);

const menuObserver = new IntersectionObserver(menuObserverHandler, menuOptions);

getAllSection.forEach((each) => {
  menuObserver.observe(each);
});

header.addEventListener('click', function mobileMenu(e) {
  const nodeElemet = e.target;
  if (nodeElemet.className.includes('mobile-header--hamburgur_icon') || nodeElemet.className.includes('bar')) {
    this.classList.toggle('active');
    logo.setAttribute('src', './assets/white-logo.svg');
  } else if (nodeElemet.className.includes('list') || nodeElemet.className.includes('link')) {
    header.classList.add('fixed');
    this.classList.remove('active');
    logo.setAttribute('src', './assets/color-logo.svg');
  }
});