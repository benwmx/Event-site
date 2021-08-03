const speakers = [
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: './img/face.jpeg',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: '#',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: '#',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: '#',
  },
  {
    name: 'Samir ghanim',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: '#',
  },
  {
    name: 'Samir ghanim 6',
    field: 'Samir Ghanim lorem lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sint reprehenderit alias. Fugit, deleniti nulla',
    img: '#',
  },
];

// creating the html tags

const section = document.querySelector('.speakers');
const speakersList = document.createElement('ul');
const button = document.createElement('p');
let info;
let img;
let naMe;
let field;
let description;
let speaker;
button.innerText = 'more >';

const showSpeaker = (start, end) => {
  for (let i = start; i < end; i += 1) {
    info = document.createElement('div');
    info.className = 'info';
    img = document.createElement('img');
    naMe = document.createElement('p');
    naMe.className = 'name';
    field = document.createElement('p');
    field.className = 'field';
    description = document.createElement('p');
    description.className = 'description';
    speaker = document.createElement('li');
    naMe.innerText = speakers[i].name;
    img.setAttribute('src', speakers[i].img);
    field.innerText = speakers[i].field;
    description.innerText = speakers[i].description;
    info.appendChild(naMe);
    info.appendChild(field);
    info.appendChild(description);
    speaker.appendChild(img);
    speaker.appendChild(info);
    speakersList.appendChild(speaker);
  }
  section.appendChild(speakersList);
};

const addMoreSpeakers = () => {
  section.removeChild(button);
  showSpeaker(2, speakers.length);
};

showSpeaker(0, 2);
button.addEventListener('click', () => {
  addMoreSpeakers();
});

section.appendChild(button);