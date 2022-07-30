import conference from './conference.js';

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

const featuredSpeakerListHandler = (props) => `<li class="featured-speaker_group--list">
<img src=${props.image} alt=${props.name} class="img">
<div class="list-detail">
  <p class="name">${props.name}<span class="designation">${props.designation}</span></p>
  <p class="detail">${props.about}</p>
</div>
<ul class="contact-info">
  ${Object.keys(props.social).map((each) => {
    if (props.social[each]) {
      return `<li class="contact-info_list">
                  <a href=${props.social[each].link} class="list_link" rel="noopener noreferrer" target="_blank"  aria-label=${props.social[each].aria}>${props.social[each].logo}</a>
              </li>`;
    }
  }).join('')}
</ul>
</li>`;

const ConvertStringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

window.addEventListener('resize', windowResizerChecker);

try {
  const dynamicData = conference();
  dynamicData.forEach((each) => {
    const [data] = ConvertStringToHTML(featuredSpeakerListHandler(each)).children;
    featuredSpeakerGroup.appendChild(data);
  });

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
        } else if (window.location.href.includes('/')) {
          document.querySelector('#home').parentElement.classList.add('active');
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