const speakers = [
  {
    name: 'Yochai Benkler',
    field: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law school',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face1.png',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face2.png',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face3.png',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face4.png',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face5.png',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face6.png',
  },
];

// creating the html tags

const section = document.querySelector('.speakers');
const speakersList = document.createElement('ul');
const button = document.createElement('p');
button.className = 'more-speakers';
let info;
let img;
let naMe;
let field;
let description;
let speaker;
let line;
let speakerClass;
button.innerHTML = 'More <i class="fas fa-chevron-down"></i>';

const showSpeaker = (start, end) => {
  for (let i = start; i < end; i += 1) {
    info = document.createElement('div');
    info.className = 'info';
    line = document.createElement('div');
    line.className = 'line-s';
    img = document.createElement('img');
    naMe = document.createElement('p');
    naMe.className = 'name';
    field = document.createElement('p');
    field.className = 'field';
    description = document.createElement('p');
    description.className = 'description';
    speaker = document.createElement('li');
    speaker.className = 'speaker';
    speaker.className += i;
    naMe.innerText = speakers[i].name;
    img.setAttribute('src', speakers[i].img);
    field.innerText = speakers[i].field;
    description.innerText = speakers[i].description;
    info.appendChild(naMe);
    info.appendChild(field);
    info.appendChild(line);
    info.appendChild(description);
    speaker.appendChild(img);
    speaker.appendChild(info);
    speakersList.appendChild(speaker);
  }
  section.appendChild(speakersList);
};
const viewPortWidth2 = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
if (viewPortWidth2 > 768) {
  showSpeaker(0, speakers.length);
} else {
  const addMoreSpeakers = () => {
    section.removeChild(button);
    showSpeaker(2, speakers.length);
  };

  showSpeaker(0, 2);
  button.addEventListener('click', () => {
    addMoreSpeakers();
  });
  section.appendChild(button);
}
