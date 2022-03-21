const hero = document.querySelector(`.hero`);

hero.style.backgroundImage = `url('./assets/sf.jpg')`;

const name = document.querySelector(`.hero h1 span`);
name.innerHTML = `🔥James Stephens🔥`;

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Something really clever. . .`


const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `https://cdn.britannica.com/61/9261-004-CC32B2B6/James-Stephens-1925.jpg`;


const favorites = [{
  img: `./assets/kitchen.jpg`,
  title: `Cooking`,
  desc: `Something important and relevant`
},
{
  img: `./assets/cuba.jpg`,
  title: `Travel`,
  desc: `Something important and relevant`
},
{
  img: `./assets/xfit.jpg`,
  title: `Exercise`,
  desc: `Something important and relevant`
}
]


const gallery = document.querySelector(`.info-gallery`);


favorites.map((favorite) => {

  let newEl = document.createElement(`div`);

  newEl.classList.add(`info-item`);

  newEl.innerHTML = `
  <img src="${favorite.img}" alt="${favorite.title}" class="item-img"/>
  <h4>${favorite.title}</h4>
  <p><${favorite.desc}</p>
  `

  gallery.appendChild(newEl);
});
